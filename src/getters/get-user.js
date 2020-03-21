import { UserInputError } from 'apollo-server';

import UserModel from '../schemas/user-model';
import authorizeUser from '../helpers/authorize-user';

export default ( { username }, { token } ) => {
  authorizeUser(username, token)

  const user = UserModel.findOne({ username }).then((user) => user);
  
  if (!user) throw new UserInputError('User not found');
  return user;
};