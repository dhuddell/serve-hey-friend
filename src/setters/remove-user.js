import UserModel from '../schemas/user-model';
import { authorizeAny } from '../helpers/authorize-user';

const removeUser = async ({ username }, { token }) => {
  authorizeAny(token)

  const deletedUser = await UserModel.findOneAndDelete({ username })
  if (!deletedUser) throw new Error('Unable to remove user, cannot find username');

  return { message: `Removed user: ${username}` }
};

export default removeUser;
