import mongoose, { Schema } from 'mongoose';

export const GoalSetSchema = new Schema({
	phone: {
    type: String,
    required: true,
  },
	text: {
    type: String,
    required: true,
  },
  beer: {
    type: String,
    required: true,
  },
  friendId: {
    type: Schema.Types.ObjectId,
		ref: "Friend"
  },
});

export default mongoose.model('GoalSet', GoalSetSchema);
