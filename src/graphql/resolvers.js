import { getAllUsers, getAllFriends } from '../getters';
import { createUser } from '../setters';

const resolvers = {
  Query: {
    friends: async (parent, args) => await getAllFriends(),
    users: async (parent, args) => await getAllUsers(),
  },
  Mutation: {
    createUser: (_, args) => createUser({ name: args.name }),
  },
};

export default resolvers;
