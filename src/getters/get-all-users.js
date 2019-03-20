import { User } from '../models';

const getAllUsers = () => {
  // good place to call a mapper!
  return User.find().then((users) => users);
};

export default getAllUsers;
