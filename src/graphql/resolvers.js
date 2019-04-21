import {
  getUser,
  getAllUsers,
  getFriend,
  getAllFriends,
} from '../getters';

import {
  registerUser,
  removeUser,
  removeAllUsers,
  addFriendToUser,
  removeFriend,
  removeAllFriends,
} from '../setters';

const resolvers = {
  Query: {
    friend: (_, args) => getFriend(args),
    friends: (_, args) => getAllFriends(args),
    user: (_, args) => getUser(args),
    users: (_, args) => getAllUsers(args),
  },
  Mutation: {
    registerUser: async (_, args) => await registerUser(args),
    removeUser: (_, args) => removeUser(args),
    removeAllUsers: (_, args) => removeAllUsers(args),
    addFriendToUser: async (_, args) => await addFriendToUser(args),
    removeFriend: (_, args) => removeFriend(args),
    removeAllFriends: (_, args) => removeAllFriends(args),
  },
};

export default resolvers;
