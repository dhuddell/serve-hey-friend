import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import typeDefs from './types';

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || `/graphql`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({
  schema,
  playground: {
    endpoint: GRAPHQL_ENDPOINT,
    settings: {
      'editor.theme': 'light'
    }
  },
  context: ({ req }) => {
    const token = req.headers.authorization;
    return {token };
  },
});

export default server;