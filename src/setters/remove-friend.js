import UserModel from '../schemas/user-model';

const removeFriend = ({ username, friendId }) => {
  return UserModel.findOne({ username }).then((user) => {
    const deletedFriend = user.friends.find((friend) => friend.friendId === friendId);
    user.friends.splice(user.friends.indexOf(deletedFriend), 1);
    return user.save().then(() => `literally Thanos'ed friend named ${deletedFriend.name}.`);
  });
};

export default removeFriend;
