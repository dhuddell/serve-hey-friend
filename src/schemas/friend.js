import { Schema } from 'mongoose';
import GoalSetCollectionSchema from './goalSetCollection';

const friendSchema = new Schema({
  friendId: String,
  name: String,
  description: String,
  icon: String,
  nickname: String, // used for url
  friendScore: Number,
  goalSetCollection: GoalSetCollectionSchema,
}, { timestamps: true });

export default friendSchema;
