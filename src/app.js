import mongoose from 'mongoose';
import express from 'express';
import server from './graphql/schema';
import cors from 'cors';

const app = express();
server.applyMiddleware({ // graphql
  app
});


app.use(cors());

const PORT = 3001 || process.env;
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});


mongoose.connect('mongodb://localhost:27017/serve-i-miss-you', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

export default app;
