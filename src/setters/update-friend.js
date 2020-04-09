import R from 'ramda';
import { UserInputError } from 'apollo-server';
import { authorizeUser, computeFriendScore } from '../helpers';
import UserModel from '../schemas/user-model';

const updateFriend = async (
  { friendUpdateInput },
  { token }
) => {
  const {
    name,
    icon,
    description,
    username,
    friendId,
    goalSetCollection, // used by ramda
  } = friendUpdateInput;
  
  authorizeUser(username, token)

  const user = await UserModel.findOne({ username: username });
  if (!user) throw new UserInputError('User not found');

  let friend = user.friends
    ? user.friends.find((friend) => friend.name === name)
    : null;

  if (!friend) throw new UserInputError('Friend not found');

  const anything = extractGoals(friend.goalSetCollection)
  console.log(anything)
  // const currentGoalValues = R.pathOr({}, ['goalSetCollection', 'currentGoals'], friend);
  // const currentGoals = currentGoalValues.map(obj => 
  //   ({ text: obj.text, beer: obj.beer, phone:obj.phone })
  // )
  // const targetGoalValues = R.pathOr({}, ['goalSetCollection', 'targetGoals'], friend);

  const cadence = R.pathOr('monthly', ['goalSetCollection', 'cadence'], friend);
  // const friendScore = computeFriendScore(currentGoals, targetGoals);

  try {
    friend = {
      name,
      icon,
      description,
      // friendScore,
      username,
      friendId,
      goalSetCollection: {
        // currentGoals,
        // targetGoals,
        cadence,
      }
    }

    var index = user.friends.findIndex(friend => friend._id == friendId);
    user.friends[index] = friend;

    await user.save()
  } catch (e) {
    throw new UserInputError(e.message);
  }

  // TODO 3/24/2020 currently this is changing the _id which is a problem

  return friend;
};

const extractGoals = (goalInput) => {
  return [goalInput.currentGoals, goalInput.targetGoals]
    .map(obj => {
      // convert this to an object with the name being the key.
      ({ [obj]:text: obj.text, beer: obj.beer, phone:obj.phone })
  )
}

export default updateFriend;
