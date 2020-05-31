import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import UserModel from '../schemas/user-model';

const updateCurrentGoal = async ({ updateCurrentGoalInput }, { token }) => {
  const {
    username,
    friendId,
    goalValue,
    goalKey
  } = updateCurrentGoalInput;
  
// DAN RESUME HERE, just swapped in vars

// currently compute friend score is broken

  authenticateUser(username, token)

  const user = await UserModel.findOne({ username: username });
  if (!user) throw new UserInputError('User not found');

  const friend = user.friends ? user.friends.id(friendId) : null;
  if (!friend) throw new UserInputError('Friend not found');

  try {
    friend.goalSetCollection.currentGoals[goalKey] = goalValue;

    var index = user.friends.findIndex(friend => friend._id == friendId);
    user.friends[index] = friend;

    await user.save()
  } catch (e) {
    throw new UserInputError(e.message);
  }

  return { [goalKey]: goalValue };
};

export default updateCurrentGoal;
