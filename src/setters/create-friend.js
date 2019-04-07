import uuidv1 from 'uuid/v1';
import { Friend } from '../models';

const createFriend = async ( input ) => {
  let friendId = uuidv1();
  const friend = input.friendInput

  const newFriend = new Friend({
    name: friend.name,
    icon: friend.icon,
    id: friendId,
    friendScore: friend.friendScore,
    description: friend.description,
    goals: {
      currentGoals: {
        phone: friend.goals.currentGoals.phone,
        text: friend.goals.currentGoals.text,
        beer: friend.goals.currentGoals.beer,
      },
      targetGoals: {
        phone: friend.goals.targetGoals.phone,
        text: friend.goals.targetGoals.text,
        beer: friend.goals.targetGoals.beer,
      },
      candence: friend.goals.candence
    },
    userId: friend.userId, // need to get and pass userId from client
  })

  await newFriend.save();
  return Friend.findOne({ id: friendId })
    .then((friendo) => ({
      name: friendo.name,
      icon: friendo.icon,
      id: friendo.id,
      friendoScore: friendo.friendScore,
      description: friendo.description,
      goals: friendo.goals,
      userId: friendo.userId, // this still isn't being set.
  }));
};

export default createFriend;