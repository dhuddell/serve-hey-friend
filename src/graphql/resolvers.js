import {
  getAllUsers,
  getAllFriends,
} from '../getters';

import {
  createUser,
  createFriend,
  removeFriends,
  removeUsers,
} from '../setters';

// FRIEND INPUT DOES NOT TAKE USERID YET.
// IT'S NOT IN THE TYPE, SO WE CANT CONNECT YET ON FRIEND CREATION

const resolvers = {
  Query: {
    friends: () => getAllFriends(),
    users: () => getAllUsers(),
  },
  Mutation: {
    createFriend: async (_, args) => await createFriend(args),
    removeFriend: (_, args) => removeFriend(args),
    removeFriends: (_, args) => removeFriends(args),
    createUser: async (_, args) => await createUser(args),
    removeUser: (_, args) => removeUser(args),
    removeUsers: (_, args) => removeUsers(args),
  },
};

export default resolvers;
