import { UserModel } from '../schemas';
import authorizeUser from '../helpers/authorize-user';

export default ( { username }, { token } ) => {
  authorizeUser(username, token)

  const userBoi = UserModel.findOne({ username }).then((user) => user);
  return userBoi;
};