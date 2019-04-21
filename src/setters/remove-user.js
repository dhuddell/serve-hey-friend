import UserModel from '../schemas/user-model';

const removeUser = (userId) => {
  UserModel.deleteOne({ userId }, () => {});
  return { updateMessage: `literally Thanos'ed user with id ${userId}`}
};

export default removeUser;
