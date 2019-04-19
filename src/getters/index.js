// export { default as getAllUsers } from './get-all-users';
// export { default as getAllFriends } from './get-all-friends';

import UserModel from '../schemas/user-model';

export const getAllUsers = () => UserModel.find();

export const getAllFriends = ( userId ) => UserModel.findOne().find();
