import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import UserModel from '../schemas/user-model';

const getFriends = async ( { username }, { token } ) => {
  const user = await UserModel.findOne({ username: username });
  if (!user) throw new UserInputError('User not found');

  authenticateUser(username, token)

  const friends = Array
    .from(user.friends)
    .map((friend) => {
      friend.id = friend._id;
      console.log(friend) // ??
      return friend
    });
  return friends;
};

export default getFriends;
