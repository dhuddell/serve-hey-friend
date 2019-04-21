import UserModel from '../schemas/user-model';

export const getAllUsers = () => UserModel.find();

export const getAllFriends = ({ username }) => {
  return UserModel.findOne({ username }).then((user) => user.friends.find())
};
