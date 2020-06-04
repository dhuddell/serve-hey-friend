import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import { Account, Person } from '../sql-models';

export default async ( { username, id }, { token } ) => {
  authenticateUser(username, token);
  const user = await Account.query().findById(id);
  if (!user) throw new UserInputError('User not found');

  const { name } = await Person.query().findById(user.person_id);

  return {
    ...user,
    name
  };
};
