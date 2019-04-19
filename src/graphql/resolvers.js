import {
  getAllUsers,
  getAllFriends,
} from '../getters';

import {
  registerUser,
  addFriendToUser,
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
    addFriendToUser: async (_, args) => await addFriendToUser(args),
    removeFriend: (_, args) => removeFriend(args),
    removeFriends: (_, args) => removeFriends(args),
    registerUser: async (_, args) => await registerUser(args),
    removeUser: (_, args) => removeUser(args),
    removeUsers: (_, args) => removeUsers(args),
  },
};

export default resolvers;
