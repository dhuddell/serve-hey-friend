import UserModel from './schemas/user-model';

export const getOneUser = ({ username }) => UserModel.findOne({ username }).then((user) => user);
export const getAllUsers = () => UserModel.find();

export const getAllFriends = ({ username }) => {
  return UserModel.findOne({ username }).then((user) => user.friends)
};

export const getOneFriend = ({ username, friendId }) => {
  return UserModel.findOne({ username })
    .then((user) => user.friends
    .find((friend) => friend.friendId === friendId));
};
