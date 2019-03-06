import mongoose from 'mongoose';

const goalSetModel = new mongoose.Schema({
  cadence: {
    type: String,
    required: true,
  },
	phoneGoal: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Goal"
  },
	textGoal: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Goal"
  },
  beerGoal: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Goal"
  },
  friendId: {
    type: mongoose.Schema.Types.ObjectId,
		ref: "Friend"
  },
}, { timestamps: true });

export default goalSetModel;