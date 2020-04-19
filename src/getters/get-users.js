import { authorizeAny } from '../helpers/authorize-user';
import { Account } from '../sql-models';

export default async ({ token }) => {
  authorizeAny(token)

  const users = await Account.query();
  return users;
};
