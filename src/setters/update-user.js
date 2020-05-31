import bcrypt from 'bcrypt';
import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import { Account, Person } from '../sql-models';

const updateUser = async ({ updateUserInput }, { token }) => {
  const { username, password, email, name } = updateUserInput;

  authenticateUser(username, token);
  const initialAccount = await Account.query().where({ username }).first()
  if (!initialAccount) throw new UserInputError('User not found');

  try {
    const transactionResponse = await Account.transaction(async (trx) => {
      const hashedPassword = password && await bcrypt.hash(password, 10);
      const person = await Person.query(trx).patch({ name })
        .where({ id: initialAccount.person_id }).returning('*').first();
      const account = await Account.query(trx).patch({ password: hashedPassword, email })
        .where({ username }).returning('*').first();

      return {
        username: account.username,
        password: hashedPassword,
        email: account.email,
        name:  person.name,
      };
    });

    return transactionResponse;

  } catch (err) {
    console.log('Update user transaction error: ', err);
    throw new UserInputError(err);
  }
};

export default updateUser;
