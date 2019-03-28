import { Friend } from '../models';

const removeFriends = (friendId) => {
  Friend.deleteOne({ friendId }, () => {});
  return { updateMessage: `literally thanos'ed friend with id ${friendId}`}
};

export default removeFriends;
