import { Friend } from '../models';

const getAllFriends = () => {
  // good place to call a mapper!
  return Friend.find().then((friends) => friends);
};

export default getAllFriends;
