import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../schemas/user-model';

const loginUser = async ( input ) => {  
  const { username, password } = input.loginInput;
  const user = await UserModel.findOne({ username: username });
  if (!user) return {
    message:'Incorrect login information, please try again or register.',
    username
  };

  const match = await bcrypt.compare(password, user.password);
  if (match) {
      var token = jwt.sign({ username }, 'tempi is a dog');
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
