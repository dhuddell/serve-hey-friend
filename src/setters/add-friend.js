import mongoose from 'mongoose';
import UserModel from '../schemas/user-model';

const createFriendObject = ( friend ) => ({
  _id: new mongoose.Types.ObjectId(),
  name: friend.name,
  icon: friend.icon,
  friendScore: friend.friendScore,
  nickname: friend.nickname,
  description: friend.description,
  goalSetCollection: {
    currentGoals: {
      phone: friend.goalSetCollection.currentGoals.phone,
      text: friend.goalSetCollection.currentGoals.text,
      beer: friend.goalSetCollection.currentGoals.beer,
    },
    targetGoals: {
      phone: friend.goalSetCollection.targetGoals.phone,
      text: friend.goalSetCollection.targetGoals.text,
      beer: friend.goalSetCollection.targetGoals.beer,
    },
    cadence: friend.goalSetCollection.cadence
  },
});

const addFriendToUser = async ( input ) => {
  const friendObject = createFriendObject(input.friendInput);
  return UserModel.findOne({ _id: "5cba36b29da43e24336f9eb7" }).then((user) => {
    user.friends.push(friendObject);
    return user.save().then((user) => {
      return user.friends.find(
        (friend) => friend._id === friendObject._id);
    });
  });
};


export default addFriendToUser;
