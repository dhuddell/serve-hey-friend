import UserModel from '../schemas/user-model';

const removeFriend = ({ username, friendId }) => {
  return UserModel.findOne({ username }).then((user) => {
    const friendToRemove = user.friends.find((friend) => friend.friendId === friendId);
    user.friends.splice(user.friends.indexOf(friendToRemove), 1);
    return user.save().then(() => ({ updateMessage: `literally Thanos'ed friend with name ${friendToRemove.name}.`}));
  });
};

export default removeFriend;
