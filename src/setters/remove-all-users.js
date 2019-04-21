import UserModel from '../schemas/user-model';

const removeAllUsers = () => UserModel.deleteMany({})
  .then(() => 'literally Thanos\'ed all the users');

export default removeAllUsers;
