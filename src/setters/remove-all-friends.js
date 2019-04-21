import UserModel from '../schemas/user-model';

const removeAllFriends = ({ username }) => {
  return UserModel.findOne({ username }).then((user) => {
    user.friends = [];
    return user.save().then(() => 'literally Thanos\'ed all your friends');
  });
};

export default removeAllFriends;
