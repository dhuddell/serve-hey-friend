import { User } from '../models';

const createUser = (user) => {
  return User.create({
    name: user.name,
    friends: user.friends,
    setting: user.setting,
  }).then((user) => ({
    name: user.name,
    friends: user.friends,
    setting: user.setting,
  }),
)};

export default createUser;
