import uuidv1 from 'uuid/v1';
import UserModel from '../schemas/user-model';

const createFriendObject = ( friend ) => ({
  friendId: uuidv1(),
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

const addFriendToUser = async ( input ) => {
  const friendObject = createFriendObject(input.friendInput);
  return UserModel.findOne({ username: friendObject.username }).then((user) => {
    user.friends.push(friendObject);
    return user.save().then((user) => {
      return user.friends.find((friend) => friend.friendId === friendObject.friendId);
    });
  });
};

export default addFriendToUser;
