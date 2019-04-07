import { Friend } from '../models';

const removeFriends = () => {
  Friend.deleteMany({}, () => {});
  return { updateMessage: "literally thanos'ed your friends"}
};

export default removeFriends;
