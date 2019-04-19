import UserModel from '../schemas/user-model';

const removeUsers = () => {
  UserModel.deleteMany({}, () => {});
  return { updateMessage: "literally thanos'ed your users"}
};

export default removeUsers;
