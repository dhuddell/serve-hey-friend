import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserInputError } from 'apollo-server';
import UserModel from '../schemas/user-model';

const loginUser = async ( input ) => {  
  const { username, password } = input.loginInput;

  const user = await UserModel.findOne({ username });
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
        username,
        token
      };
  }

  return {
    message:'Incorrect login information, please try again or register.',
  };
};

export default loginUser;
