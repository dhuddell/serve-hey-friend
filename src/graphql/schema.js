import { ApolloServer } from 'apollo-server-express';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import mocks from './mocks';

import resolvers from './resolvers';
import typeDefs from './types';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});

const mockSchema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema: mockSchema, mocks });

export default server;
