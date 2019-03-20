import { Friend } from '../models';

const createFriend = ({ friend }) => {
  const newFriend = new Friend({
    name: friend.name,
    icon: friend.icon,
    id: friend.id,
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
  })

  newFriend.save();
  return Friend.find({ name: friend.name }).then((friend) => friend); // need to remap it back to values.
};

export default createFriend;