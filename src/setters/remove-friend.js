import { UserInputError } from 'apollo-server';

import authorizeUser from '../helpers/authorize-user';
import UserModel from '../schemas/user-model';

// 5/27/2020
// Need to create a trigger to properly order and cascade deletions
// If follower is deleted,
//   remove all relationships then goals
//   then followee unless we (someday)
//   have many to many follower : followee

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
