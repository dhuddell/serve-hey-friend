import R from 'ramda';
import mongoose from 'mongoose';

const createFriend = ( friend ) => ({
  _id: new mongoose.Types.ObjectId(),
  username: friend.username,
  name: friend.name,
  icon: friend.icon,
  friendScore: friend.friendScore,
  description: friend.description,
  goalSetCollection: {
    currentGoals: {
      phone: R.pathOr('', ['goalSetCollection','currentGoals','phone'], friend),
      text: R.pathOr('', ['goalSetCollection','currentGoals','text'], friend),
      beer: R.pathOr('', ['goalSetCollection','currentGoals','beer'], friend),
    },
    targetGoals: {
      phone: R.pathOr('', ['goalSetCollection','targetGoals','phone'], friend),
      text: R.pathOr('', ['goalSetCollection','targetGoals','text'], friend),
      beer: R.pathOr('', ['goalSetCollection','targetGoals','beer'], friend),
    },
    cadence: R.pathOr('', ['goalSetCollection','cadence'], friend),
  },
});

export default createFriend;