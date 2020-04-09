import R from 'ramda';
import { UserInputError } from 'apollo-server';
import { authorizeUser, computeFriendScore } from '../helpers';
import createFriend from './create-friend';
import UserModel from '../schemas/user-model';

const addFriendToUser = async ( requestInput, headers ) => {
  const { friendInput: {
    username,
    name,
    icon,
    description,
    goalSetCollection
    } = {}
  } = requestInput;

  // TODO 3/6/2020 clean up friendInput assignment

  const user = await UserModel.findOne({ username })
  if (!user) throw new UserInputError('User not found');
  
  authorizeUser(username, headers.token)
  
  const nameIsTaken = user.friends.find((friend) => friend.name === name);
  if (nameIsTaken) throw new UserInputError('Friend name taken, please choose another name');
  
  const currentGoals = R.pathOr({}, ['currentGoals'], goalSetCollection);
  const targetGoals = R.pathOr({}, ['targetGoals'], goalSetCollection);
  const cadence = R.pathOr({}, ['cadence'], goalSetCollection);
  const friendScore = computeFriendScore(currentGoals, targetGoals);

  const friendInput = {
    username,
    name,
    icon,
    friendScore,
    description,
    goalSetCollection: {
      currentGoals,
      targetGoals,
      cadence
    },
  }

  const friendObject = createFriend(friendInput);
  await user.friends.push(friendObject);
  await user.save();

  return user.friends.id(friendObject._id);
};

export default addFriendToUser;
