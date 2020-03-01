import mongoose from 'mongoose';

const createFriend = ( friend ) => ({
  _id: new mongoose.Types.ObjectId(),
  username: friend.username,
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

export default createFriend;