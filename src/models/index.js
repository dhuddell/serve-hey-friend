import mongoose from 'mongoose';
import friendModel from './friend';
import userModel from './user';

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });
const User = mongoose.model('User', userModel);
const Friend = mongoose.model('Friend', friendModel);

const jimmy = new User({ userName: 'JimmyJo', friends: [{}] });
const jimmysFriend = new Friend({ userName: 'JimmyJo', });

jimmy.save().then(() => console.log('jimmy saved'));
jimmysFriend.save().then(() => console.log('jimmysFriend saved'));

export default mongoose;
