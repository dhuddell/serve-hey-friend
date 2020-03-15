import UserModel from '../schemas/user-model';

const removeUser = async ({ username }) => {
  const deletedUser = await UserModel.findOneAndDelete({ username })

  if (!deletedUser) throw new Error('Unable to remove user, cannot find username');
  return `Literally just Thanos\'s user ${username}`;
};

export default removeUser;
