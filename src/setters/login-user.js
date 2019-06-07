import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../schemas/user-model';

const loginUser = async ( input ) => {
  const { username, password } = input.userInput;
  const user = await UserModel.findOne({ username: username });
  if(!user) return { message: 'User not found.' };

  console.log(user,'was found!')
  const match = await bcrypt.compare(password, user.password);
  console.log(password ===  user.password)
  if(match) {
    console.log('woooot')
      var token = jwt.sign({ foo: 'bar' }, 'tempi is a dog');
      return {
        message:'Success!',
        token
      };
  }
  console.log('fack', match)
  // set no jwt and return failure message
  return { message: 'FAILURE, YOU HACKER!' };
}

export default loginUser;


// $2b$10$rO6P2M.bJiPxkC3IRNNfPuaEd0eHpooRxre6LyNVfU.Fn0HQaZgEC
// $2b$10$rO6P2M.bJiPxkC3IRNNfPuaEd0eHpooRxre6LyNVfU.Fn0HQaZgEC