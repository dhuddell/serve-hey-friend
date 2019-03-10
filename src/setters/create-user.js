import { User } from '../models';

const createUser = ({ name }) => {
  console.log('user creation resolver');
  console.log(name);
  return User.create({ name }).then((user) => ({
      name: user.name,
      friends: [{}],
      setting: '',
    }),
  );
}

export default createUser;