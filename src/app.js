import express from 'express';
import Knex from 'knex';
import { Model } from 'objection';

import server from './graphql/schema';
import cors from 'cors';

// remove this
import mongoose from 'mongoose';
// remove this

const app = express();
server.applyMiddleware({ // graphql
  app
});

app.use(cors({
  origin: 'localhost:3000',
  credentials: true,
}));

const PORT = 3001 || process.env;
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});


var knex = Knex({
  client: 'postgresql',
  connection: 'serve-i-miss-you',
});

Model.knex(knex)

// remove this
mongoose.connect('mongodb://localhost:27017/serve-i-miss-you', {useNewUrlParser: true});
const db = mongoose.connection;
// remove this

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected to the Data-bizzle
});

export default app;
