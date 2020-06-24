import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import { goalMappers, computeFriendScore } from '../helpers';
import { Account, Relationship, Goal } from '../sql-models';

const updateCurrentGoal = async ({ updateCurrentGoalInput }, { token }) => {
  const {
    username,
    friendId,
    goalKey,
    goalValue
  } = updateCurrentGoalInput; 

  authenticateUser(username, token)
  const initialAccount = await Account.query().where({ username }).first()
  if (!initialAccount) throw new UserInputError('User not found');

  const initialRelationship = await Relationship.query()
    .where({ follower_id: initialAccount.person_id, followee_id: friendId }).first()
  if (!initialRelationship) throw new UserInputError('Friend not found');

  const mappedGoalKey = goalMappers.apiToDatabaseGoalMap[goalKey];
  // this is a double mutation. makes no damn sense. i'll get that next time
  const updatedGoals = await Goal.query()
    .patch({ [mappedGoalKey]: goalValue })
    .where({ id: initialRelationship.goal_id }).returning('*').first();
  const friendScore = computeFriendScore(goalMappers.mapGoalsToApi(updatedGoals))

  // this is a double mutation. makes no damn sense. i'll get that next time
  const goalsResponse = await Goal.query().patch({
    friend_score: friendScore
    }).where({ id: initialRelationship.goal_id }).returning('*').first();

  return {
    friendScore,
    goals: goalMappers.mapGoalsToApi(goalsResponse)
  };
};

export default updateCurrentGoal;
