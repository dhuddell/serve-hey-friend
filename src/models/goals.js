import mongoose, { Schema } from 'mongoose';

export const GoalsSchema = new Schema({
  cadence: {
    type: String,
    required: true,
  },
  currentGoals: {
    type: Schema.Types.ObjectId,
    ref: "GoalSet",
  },
	targetGoals: {
    type: Schema.Types.ObjectId,
    ref: "GoalSet",
  },
  friendId: {
    type: Schema.Types.ObjectId,
		ref: "Friend"
  },
});

export default mongoose.model('Goals', GoalsSchema);
