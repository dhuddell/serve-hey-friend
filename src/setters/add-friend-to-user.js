import R from 'ramda';
import authorizeUser from '../helpers/authorize-user';
import createFriend from './create-friend';
import UserModel from '../schemas/user-model';

const addFriendToUser = ( requestInput, headers ) => {
  const { friendInput: {
    username,
    name,
    icon,
    friendScore,
    nickname,
    description,
    goalSetCollection
    } 
  } = requestInput;
  
  authorizeUser(username, headers.token)
  
  const currentGoals = R.pathOr({}, [ 'currentGoals'], goalSetCollection)
  const targetGoals = R.pathOr({}, ['targetGoals'], goalSetCollection)
  const cadence = R.pathOr({}, ['cadence'], goalSetCollection)

  const friendInput = {
    username,
    name,
    icon,
    friendScore,
    nickname,
    description,
    goalSetCollection: {
      currentGoals,
      targetGoals,
      cadence
    },
  }

  const friendObject = createFriend(friendInput);

  return UserModel.findOne({ username: friendObject.username }).then((user) => {
    user.friends.push(friendObject);
    return user.save().then((user) => {
      return user.friends.find((friend) => friend._id === friendObject._id);
    });
  });
};

export default addFriendToUser;
