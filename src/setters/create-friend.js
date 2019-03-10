import { Friend } from '../models';

const createFriend = ({ name }) => {
  console.log('user creation resolver');
  console.log(name);
  return Friend.create({ name }).then((friend) => ({
      name: friend.name,

    }),
  );
}

export default createFriend;