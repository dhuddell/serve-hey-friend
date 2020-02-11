import mongoose, { Schema } from 'mongoose';
import FriendSchema from './friend';

const UserSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  username: String,
  password: String,
  message: String,
  name: String,
  setting: String,
	friends: [FriendSchema],
});

export default UserSchema;
