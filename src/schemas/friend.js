import mongoose, { Schema } from 'mongoose';
import GoalSetCollectionSchema from './goal-set-collection';

const friendSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  name: String,
  description: String,
  icon: String,
  friendScore: Number,
  goalSetCollection: GoalSetCollectionSchema,
}, { timestamps: true });

export default friendSchema;
