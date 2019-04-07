import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  setting: {
    type: String,
    required: false,
  },
	friends: [{ // need to figure out how to handle this one too
		type: Schema.Types.ObjectId,
		ref: "Friend",
	}],
});

export default mongoose.model('User', UserSchema);
