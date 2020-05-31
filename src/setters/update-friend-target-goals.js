import R from 'ramda';
import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import UserModel from '../schemas/user-model';

const updateFriendTargetGoals = async (
  { updateFriendTargetGoalsInput },
  { token }
) => {
  const {
    username,
    friendId,
    phone,
    text,
    beer,
    cadence,
  } = updateFriendTargetGoalsInput;
  
  authenticateUser(username, token)

  const user = await UserModel.findOne({ username: username });
  if (!user) throw new UserInputError('User not found');

  const friend = user.friends ? user.friends.id(friendId) : null;
  if (!friend) throw new UserInputError('Friend not found');

  try {
    friend.goalSetCollection = {
      currentGoals: R.pathOr({}, ['goalSetCollection', 'current'], friend),
      targetGoals: { phone, text, beer, },
      cadence,
    }

    var index = user.friends.findIndex(friend => friend._id == friendId);
    user.friends[index] = friend;

    await user.save()
  } catch (e) {
    throw new UserInputError(e.message);
  }

  const updatedFriend = user.friends.id(friendId)

  return {
    phone: R.pathOr('', ['goalSetCollection', 'targetGoals', 'phone'], updatedFriend),
    beer: R.pathOr('', ['goalSetCollection', 'targetGoals', 'beer'], updatedFriend),
    text: R.pathOr('', ['goalSetCollection', 'targetGoals', 'text'], updatedFriend),
    cadence: R.pathOr('', ['goalSetCollection', 'cadence'], updatedFriend),
  };
};

export default updateFriendTargetGoals;
