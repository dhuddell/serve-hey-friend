import { UserInputError } from 'apollo-server';

import authorizeUser from '../helpers/authorize-user';
import UserModel from '../schemas/user-model';

const removeFriend = async ({ username, friendId }, { token }) => {
  authorizeUser(username, token)
  
  // this is wicked gross. honestly, fuck.
  return UserModel.findOne({ username }).then((user) => {
    const targetFriend = user.friends.id(friendId);

    if (targetFriend) {
      const friendRecord = user.friends.id(friendId).remove()

      return user.save().then(() => {
        console.log('have a friend', friendRecord)
        return { message: `Removed friend: ${friendRecord.name}`}
      })
    }

    throw new UserInputError('Friend not found');
  });
};

export default removeFriend;
