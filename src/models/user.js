import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
	friends: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Friend"
	}],
}, { timestamps: true });

export default userModel;
