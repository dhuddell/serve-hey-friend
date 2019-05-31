import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../schemas/user-model';

const loginUser = async ( input ) => {
  const { username, password } = input.userInput;
  const user = await UserModel.findOne({ username: username });

  const match = await bcrypt.compare(password, user.password);
  if(match) {
      var token = jwt.sign({ foo: 'bar' }, 'tempi is a dog');
      return {
        message:'Success!',
        token
      };
  }

  // set no jwt and return failure message
  return { message: 'FAILURE, YOU HACKER!' };
}

export default loginUser;