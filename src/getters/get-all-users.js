import { User } from '../models';

const getAllUsers = () => {
  console.log('Users Users USER_RESOLVER');
  return User.find({}).then((users) => {
    users.forEach((user) => {
      console.log(user.toJSON());
      console.log('');
    });
    return users;
  });
};

export default getAllUsers;