import mongoose from 'mongoose';
import express from 'express';
import server from './graphql/schema';

const app = express();
server.applyMiddleware({ // graphql
  app
});

const PORT = 4000 || process.env;
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

export default app;
