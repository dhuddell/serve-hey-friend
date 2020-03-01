import {
  getUser,
  getAllUsers,
  getAllFriends,
} from '../getters';

import {
  registerUser,
  addFriendToUser,
  removeFriends,
  removeUsers,
  loginUser,
} from '../setters';

// FRIEND INPUT DOES NOT TAKE USERID YET.
// IT'S NOT IN THE TYPE, SO WE CANT CONNECT YET ON FRIEND CREATION
const resolvers = {
  Query: {
    user: (_, args, context) => getUser(args, context),
    users: (_, args, context) => getAllUsers(args, context),
    friends: (_, args, context) => getAllFriends(args, context),
  },
  Mutation: {
    registerUser: (_, args, context) => registerUser(args, context),
    loginUser: (_, args, context) => loginUser(args, context),
    addFriendToUser: (_, args, context) => addFriendToUser(args, context),
    removeFriend: (_, args, context) => removeFriend(args, context),
    removeFriends: (_, args, context) => removeFriends(args, context),
    removeUser: (_, args, context) => removeUser(args, context),
    removeUsers: (_, args, context) => removeUsers(args, context),
  },
};

export default resolvers;
