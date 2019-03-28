import { User } from '../models';

const removeUsers = (userId) => {
  User.deleteOne({ userId }, () => {});
  return { updateMessage: `literally thanos'ed user with id ${userId}`}
};

export default removeUsers;
