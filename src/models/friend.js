import mongoose from 'mongoose';

const friendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  friendScore: {
    type: Number,
    required: true,
  },
	targetGoals: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "GoalSet"
	},
	currentGoals: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "GoalSet"
	},
}, { timestamps: true });

export default mongoose.model('Friend', friendSchema);
