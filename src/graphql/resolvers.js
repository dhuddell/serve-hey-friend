import { getAllUsers, getAllFriends } from '../getters';
import { createUser, createFriend, removeFriends } from '../setters';

const resolvers = {
  Query: {
    friends: async (parent, args) => await getAllFriends(),
    users: async (parent, args) => await getAllUsers(),
  },
  Mutation: {
    createFriend: (_, args) => createFriend({ friend: args.friendInput }),
    removeFriend: (_, args) => removeFriend(args),
    removeFriends: (_, args) => removeFriends(args),

    createUser: (_, args) => createUser(args),
    removeUser: (_, args) => removeUser(args),
    removeUsers: (_, args) => removeUsers(args),
  },
};

export default resolvers;
