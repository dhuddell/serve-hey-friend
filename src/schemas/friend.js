import mongoose, { Schema } from 'mongoose';
import GoalSetCollectionSchema from './goal-set-collection';

const initialId = Schema.Types.ObjectId;

const friendSchema = new Schema({
  _id: initialId,
  friendId: initialId,
  username: String,
  name: String,
  description: String,
  icon: String,
  friendScore: Number,
  goalSetCollection: GoalSetCollectionSchema,
}, { timestamps: true });

export default friendSchema;
