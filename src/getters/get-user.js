import { UserModel } from '../schemas';
import authHelper from '../helpers/authHelper';

export default ( { username }, { token } ) => {
  authHelper(username, token)

  const userBoi = UserModel.findOne({ username }).then((user) => user);
  return userBoi;
};