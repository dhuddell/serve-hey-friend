import { raw } from 'objection';
import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import { goalMappers } from '../helpers';
import { Account, Relationship, Goal } from '../sql-models';

const udpateCurrentGoal = async ({ incrementCurrentGoalInput }, { token }) => {
  const {
    username,
    friendId,
    goalKey,
    goalValue
  } = incrementCurrentGoalInput;

  authenticateUser(username, token)
  const initialAccount = await Account.query().where({ username }).first()
  if (!initialAccount) throw new UserInputError('User not found');

  const initialRelationship = await Relationship.query()
    .where({ follower_id: initialAccount.person_id, followee_id: friendId }).first()
  if (!initialRelationship) throw new UserInputError('Friend not found');

  const mappedGoalKey = goalMappers.apiToDatabaseGoalMap[goalKey];
  const updatedGoals = await Goal.query()
    .patch({ [mappedGoalKey]: goalValue })
    .where({ id: initialRelationship.goal_id }).returning('*').first();
 
  return goalMappers.mapGoalsToApi(updatedGoals);
};

export default udpateCurrentGoal;
