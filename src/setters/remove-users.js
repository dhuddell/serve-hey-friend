import UserModel from '../schemas/user-model';

const removeUsers = () => UserModel.deleteMany({})
  .then(() => ({ message: 'literally Thanos\'ed all the users'}));

export default removeUsers;
