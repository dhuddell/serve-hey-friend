import UserModel from '../schemas/user-model';

const removeAllUsers = () => {
  UserModel.deleteMany({}, () => {});
  return { updateMessage: "literally Thanos'ed all the users"}
};

export default removeAllUsers;
