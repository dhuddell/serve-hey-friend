import { Friend } from '../models';

const removeFriends = () => {
  Friend.deleteMany({}, () => {});
  return { lameIdiot: "literally thanos'ed your friends"}
};

export default removeFriends;
