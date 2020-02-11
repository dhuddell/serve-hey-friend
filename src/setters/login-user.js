import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import bcrypt from 'bcrypt';
import UserModel from '../schemas/user-model';

const loginUser = async ( input, context = {} ) => {
  // console.log(context)
  const { username, password } = input.loginInput;
  const user = await UserModel.findOne({ username: username });
  if (!user) return {
    code: '401',
    success: false,
    message:'Incorrect login information, please try again or register.',
    username
  };

  const match = await bcrypt.compare(password, user.password);
  if (match) {
      var token = jwt.sign({ foo: 'bar' }, 'tempi is a dog');
      return {
        code: '200',
        success: true,
        message:'Login successful!',
        username,
        token
      };
  }


  return {
    code: '401',
    success: false,
    message:'Incorrect login information, please try again or register.',
  };
};

export default loginUser;
