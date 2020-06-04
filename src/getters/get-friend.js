import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import { goalMappers } from '../helpers';
import { Account, Relationship } from '../sql-models';

const getFriend = async ( { username, friendId }, { token } ) => {    
  const account = await Account.query().where({ username }).first();
  if (!account) throw new UserInputError('User not found');

  authenticateUser(username, token)

  const relationship = await Relationship.query()
    .select('f.name', 'g.*', '*')
    .where({ follower_id: account.person_id, followee_id: friendId })
    .joinRelated('followees',  { alias: 'f' })
    .joinRelated('goals', { alias: 'g' })
    .first();

  const friend = {
    username,
    name: relationship.name,
    icon: relationship.icon,
    friendId: relationship.followee_id,
    description: relationship.description,
    friendScore: relationship.friend_score,
    goals: goalMappers.mapGoalsToApi(relationship),
  }

  return friend;
};

export default getFriend;
