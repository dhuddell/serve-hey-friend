import UserModel from '../schemas/user-model';

const removeUsers = (userId) => {
  UserModel.deleteOne({ userId }, () => {});
  return { updateMessage: `literally thanos'ed user with id ${userId}`}
};

export default removeUsers;
