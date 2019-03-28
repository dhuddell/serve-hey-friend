import { User } from '../models';

const removeUsers = () => {
  User.deleteMany({}, () => {});
  return { updateMessage: "literally thanos'ed your users"}
};

export default removeUsers;
