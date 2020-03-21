import UserModel from '../schemas/user-model';
import { authorizeAny } from '../helpers/authorize-user';

export default ({ token }) => {
  authorizeAny(token)

  const users = UserModel.find({});
  return users;
};