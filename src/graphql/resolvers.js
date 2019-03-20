import { getAllUsers, getAllFriends } from '../getters';
import { createUser, createFriend, removeFriends } from '../setters';

const resolvers = {
  Query: {
    friends: async (parent, args) => await getAllFriends(),
    users: async (parent, args) => await getAllUsers(),
  },
  Mutation: {
    createUser: (_, args) => createUser(args),
    createFriend: (_, args) => createFriend({ friend: args.friendInput }),
    removeFriends: (_, args) => removeFriends(args),
  },
};

export default resolvers;
