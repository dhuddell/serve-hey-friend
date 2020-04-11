import User from '../sql-models/user';
import { authorizeAny } from '../helpers/authorize-user';

export default async ({ token }) => {
  authorizeAny(token)

  const users = await User.query();
  return users;
};
