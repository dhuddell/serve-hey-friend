import {
  getOneUser,
  getAllUsers,
  getOneFriend,
  getAllFriends,
} from '../getters';

import {
  registerUser,
  addFriendToUser,
  removeFriends,
  removeUsers,
} from '../setters';

const resolvers = {
  Query: {
    friend: (_, args) => getOneFriend(args),
    friends: (_, args) => getAllFriends(args),
    user: (_, args) => getOneUser(args),
    users: (_, args) => getAllUsers(args),
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
