import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  setting: {
    type: String,
    required: false,
  },
	friends: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Friend"
	}],
}, { timestamps: true });

export default mongoose.model('User', userModel);
