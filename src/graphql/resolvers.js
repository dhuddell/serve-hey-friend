import {
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
    friends: () => getAllFriends(),
    users: () => getAllUsers(),
  },
  Mutation: {
    registerUser: (_, args) => registerUser(args),
    loginUser: (_, args, context ) => loginUser(args, context),
    addFriendToUser: (_, args, { headers }) => addFriendToUser(args, headers),
    removeFriend: (_, args, { headers }) => removeFriend(args),
    removeFriends: (_, args, { headers }) => removeFriends(args),
    removeUser: (_, args, { headers }) => removeUser(args),
    removeUsers: (_, args, { headers }) => removeUsers(args),
  },
  MutationResponse: {
    __resolveType(mutationResponse, context, info){
      return null;
    },
  },
};

export default resolvers;
