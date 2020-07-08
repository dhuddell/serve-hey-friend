import { UserInputError } from 'apollo-server';
import { authenticateUser, computeFriendScore } from '../helpers';
import { goalMappers } from '../helpers';
import { Account, Relationship, Goal } from '../sql-models';

const updateFriendGoals = async ({ updateFriendGoalsInput }, { token }) => {
  const { username, friendId, goals } = updateFriendGoalsInput;

  authenticateUser(username, token)

  const initialAccount = await Account.query().where({ username }).first()
  if (!initialAccount) throw new UserInputError('User not found');

  const initialRelationship = await Relationship.query()
    .where({ follower_id: initialAccount.person_id, followee_id: friendId }).first()

  if (!initialRelationship) throw new UserInputError('Friend not found');
      
  const initialGoals = await Goal.query()
    .where({ id: initialRelationship.goal_id }).returning('*').first();

  try {
    const transactionResponse = await Account.transaction(async (trx) => {
      const updatedGoals = Object.assign(goalMappers.mapGoalsToApi(initialGoals), goals);
      const friendScore = computeFriendScore(updatedGoals)

      const goalsResponse = await Goal.query(trx).patch({ 
        ...goalMappers.mapGoalsToDatabase(updatedGoals),
        friend_score: friendScore
        }).where({ id: initialRelationship.goal_id }).returning('*').first();

      return {
        friendId,
        username,
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

export default updateFriendGoals;
