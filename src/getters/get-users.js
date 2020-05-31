import { authenticateAny } from '../helpers/authenticate-user';
import { Account } from '../sql-models';

export default async ({ token }) => {
  authenticateAny(token)

  const users = await Account.query();
  return users;
};
