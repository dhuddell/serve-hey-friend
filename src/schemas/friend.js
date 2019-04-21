import { Schema } from 'mongoose';
import GoalSetCollectionSchema from './goalSetCollection';

const friendSchema = new Schema({
  friendId: String,
  name: String,
  description: String,
  icon: String,
  nickname: String,
  friendScore: Number,
  goalSetCollection: GoalSetCollectionSchema,
}, { timestamps: true });

export default friendSchema;
