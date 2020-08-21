import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserInputError } from 'apollo-server';
import { Account } from '../sql-models';

const loginUser = async ( input ) => {
  const { username, password } = input.loginInput;

  const user = await Account.query()
    .select('*')
    .joinRelated('persons', { alias: 'p' })
    .where('username', username)
    .first()

  if (!user) throw new UserInputError('Incorrect login-- register or try again.');

  const match = await bcrypt.compare(password, user.password);
  if (match) {
    const token = jwt.sign(
      { username },
      'tempi is a dog',
      { expiresIn: '24h' }
    );

    return {
      message:'Login successful!',
      name: user.name,
      username,
      token
    };
  }

  return { message:'Invalid credentials, please try again.' };
};

export default loginUser;
