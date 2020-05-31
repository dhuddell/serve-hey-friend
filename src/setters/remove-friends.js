import UserModel from '../schemas/user-model';
import authenticateUser from '../helpers/authenticate-user';

const removeFriends = ({ username }, { token }) => {
  authenticateUser(username, token)

  return UserModel.findOne({ username }).then((user) => {
    if(user) {
      user.friends.pull({});
      return user.save().then(() => ({
        message: 'Removed all friends.',
      }));
    }

    throw new UserInputError('User not found');
  });
};

export default removeFriends;
