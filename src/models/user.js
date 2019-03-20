import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  setting: {
    type: String,
    required: false,
  },
	friends: [{
		type: Schema.Types.ObjectId,
		ref: "Friend",
	}],
});

export default mongoose.model('User', UserSchema);
