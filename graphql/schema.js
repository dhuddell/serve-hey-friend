import { ApolloServer } from 'apollo-server-express';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import mocks from './mocks';

import resolvers from './resolvers';
import types from './types';

const server = new ApolloServer({
  typeDefs: types,
  resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});

const mockSchema = makeExecutableSchema({ typeDefs: types });

addMockFunctionsToSchema({ schema: mockSchema, mocks });

export default server;
