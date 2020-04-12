import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserInputError } from 'apollo-server';
import User from '../sql-models/user';

const loginUser = async ( input ) => {  
  const { username, password } = input.loginInput;

  const user = await User.query().findOne({ username })
  if (!user) throw new UserInputError('Incorrect login-- register or try again.');

  const match = await bcrypt.compare(password, user.password);
  if (match) {
    const token = jwt.sign(
      { username },
      'tempi is a dog',
      { expiresIn: '2h' }
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
