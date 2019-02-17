// Imports: Express
import express from 'express';
const app = express();

// Imports: GraphQL
import server from './graphql/schema.js';

// Middleware: GraphQL
server.applyMiddleware({
  app: app
});

// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});

// Exports
export default app;