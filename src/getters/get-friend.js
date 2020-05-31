import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import UserModel from '../schemas/user-model';

const getFriend = async ( { username, friendId }, { token } ) => {    
  authenticateUser(username, token)

  const user = await UserModel.findOne({ username: username });
  if (!user) throw new UserInputError('User not found');
  
  // I want to have friends be an assumed value on the Model
  const friend = user.friends ? user.friends.id(friendId) : null;
  if (!friend) throw new UserInputError('Friend not found');
  
  return friend;
};

export default getFriend;
