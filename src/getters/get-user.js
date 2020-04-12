import User from '../sql-models/user';
import { UserInputError } from 'apollo-server';
import authorizeUser from '../helpers/authorize-user';

// need to decide to keep or ditch username in favor of ID
export default async ( { username, id }, { token } ) => {
  authorizeUser(username, token)
  const user = await User.query()
    .findById(id)

  if (!user) throw new UserInputError('User not found');

  return user;
};
