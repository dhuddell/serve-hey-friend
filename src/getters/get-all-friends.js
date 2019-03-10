import { Friend } from '../models';

const getAllFriends = () => {
  console.log('ALL friends RESOLVER');
  Friend.find({}).exec().then((friends) => {
    friends.forEach( (friend) => {
      console.log(friend.toJSON());
      console.log('');
    });
    return friends;
  });
};

export default getAllFriends;
