import { UserInputError } from 'apollo-server';
import { authenticateUser, computeFriendScore, checkNameAvailability } from '../helpers';
import { goalMappers } from '../helpers';
import { Account, Relationship, Person, Goal } from '../sql-models';

const updateFriend = async ({ updateFriendInput }, { token }) => {
  const {
    username,
    name,
    icon,
    description,
    friendId,
    goals
  } = updateFriendInput;

  authenticateUser(username, token)

  const initialAccount = await Account.query().where({ username }).first()
  if (!initialAccount) throw new UserInputError('User not found');

  const initialRelationship = await Relationship.query()
    .where({ follower_id: initialAccount.person_id, followee_id: friendId }).first()
    
  if (!initialRelationship) throw new UserInputError('Friend not found');
  await checkNameAvailability({ followerId: initialAccount.person_id, name });

  const initialGoals = await Goal.query()
    .where({ id: initialRelationship.goal_id }).returning('*').first();

  try {
    const transactionResponse = await Account.transaction(async (trx) => {
      const updatedGoals = Object.assign(goalMappers.mapGoalsToApi(initialGoals), goals)
      const friendScore = computeFriendScore(updatedGoals)

      const relationship = await Relationship.query(trx).patch({ icon, description })
        .where({ follower_id: initialAccount.person_id, followee_id: friendId }).returning('*').first();

      const person = await Person.query(trx).patch({ name })
        .where({ id: initialAccount.person_id }).returning('*').first();

      const goalsResponse = await Goal.query(trx).patch({ 
        ...goalMappers.mapGoalsToDatabase(updatedGoals),
        friend_score: friendScore
        }).where({ id: initialRelationship.goal_id }).returning('*').first();

      return {
        username: initialAccount.username,
        friendId: relationship.followee_id,
        name: person.name,
        icon: relationship.icon,
        description: relationship.description,
        friendScore: goalsResponse.friend_score,
        goals: goalMappers.mapGoalsToApi(goalsResponse)
      };
    });

    return transactionResponse; 
  } catch (error) {
    console.log('Update friend transaction error: ', error)
    throw new UserInputError('Update friend transaction error')
  }
};

export default updateFriend;
