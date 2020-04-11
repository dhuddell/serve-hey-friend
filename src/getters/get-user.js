import { UserInputError } from 'apollo-server';

import User from '../sql-models/user';
import authorizeUser from '../helpers/authorize-user';

// 4/11/2020 Just started  this conversion
export default ( { username }, { token } ) => {
  authorizeUser(username, token)

  const user = User.findOne({ username }).then((user) => user);
  // const user = UserModel.findOne({ username }).then((user) => user);
  
  if (!user) throw new UserInputError('User not found');
  return user;
};

// import { UserInputError } from 'apollo-server';

// import UserModel from '../schemas/user-model';
// import authorizeUser from '../helpers/authorize-user';

// export default ( { username }, { token } ) => {
//   authorizeUser(username, token)

//   const user = UserModel.findOne({ username }).then((user) => user);
  
//   if (!user) throw new UserInputError('User not found');
//   return user;
// };