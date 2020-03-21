import R from 'ramda';
import { UserInputError } from 'apollo-server';
import authorizeUser from '../helpers/authorize-user';
import UserModel from '../schemas/user-model';

const updateFriend = async (
  { friendUpdateInput },
  { token }
) => {
  const {
    name,
    icon,
    description,
    friendScore,
    username,
    id,
    goalSetCollection: {
      currentGoals,
      targetGoals,
      cadence,
    } = {},
  } = friendUpdateInput;
  
  authorizeUser(username, token)

  const user = await UserModel.findOne({ username: username });
  if (!user) throw new UserInputError('User not found');

  let friend = user.friends ? user.friends.id(id) : null;
  if (!friend) throw new UserInputError('Friend not found');

  try {
    friend = {
      name,
      icon,
      description,
      friendScore,
      username,
      id,
      goalSetCollection: {
        cadence,
        currentGoals: R.propOr({}, 'currentGoals', friend),
        targetGoals: R.propOr({}, 'targetGoals', friend),
      }
    }

    var index = user.friends.findIndex(friend => friend._id == id);
    user.friends[index] = friend;

    await user.save()
  } catch (e) {
    throw new UserInputError(e.message);
  }

  // const updatedFriend = user.friends.id(id)

  return friend;
};

export default updateFriend;
