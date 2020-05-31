import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import { mapGoals } from '../mappers';
import { Account, Relationship } from '../sql-models';

const getFriends = async ( { username }, { token } ) => {
  const account = await Account.query().where({ username }).first();
  if (!account) throw new UserInputError('User not found');

  authenticateUser(username, token)

  const relationships = await Relationship.query()
    .select('f.name', 'g.*', '*')
    .where({ follower_id: account.person_id })
    .joinRelated('followees',  { alias: 'f' })
    .joinRelated('goals', { alias: 'g' });

  const friends = relationships.map((r) => ({
    username,
    name: r.name,
    icon: r.icon,
    friendId: r.followee_id,
    description: r.description,
    friendScore: r.friend_score,
    goals: mapGoals(r),
  }))

  return friends;
};

export default getFriends;
