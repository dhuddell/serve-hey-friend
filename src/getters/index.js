// export { default as getAllUsers } from './get-all-users';
// export { default as getAllFriends } from './get-all-friends';
import UserModel from '../schemas/user-model';

export { default as getUser } from './get-user';
export const getAllUsers = () => UserModel.find();
export const getAllFriends = ( username ) => UserModel.findOne({ username })
  .then((user) => user.friends);
