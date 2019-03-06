// Imports: Express
import mongoose from 'mongoose';
import express from 'express';
import server from './graphql/schema';
import {
  friendModel,
  userModel,
  goalModel,
  goalSetModel
} from './models';

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

const User = db.model('User', userModel);
const Friend = db.model('Friend', friendModel);
const Goal = db.model('Goal', goalModel);
const GoalSet = db.model('GoalSet', goalSetModel);

const jimmy = new User({ userName: 'JimmyJo', friends: [{}] });
const jimmysFriend = new Friend({ userName: 'JimmyJo', });
const jimmysGoal = new Goal({ target: 'JimmyJo', });
const jimmysGoalSet = new GoalSet({ boop: 'JimmyJo', });
console.log('user', jimmy)
console.log('friend', jimmysFriend)
console.log('goal', jimmysGoal)
console.log('goalset',jimmysGoalSet)

export default app;
