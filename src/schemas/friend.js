import mongoose, { Schema } from 'mongoose';
import GoalSetCollectionSchema from './goalSetCollection';

const friendSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  icon: String,
  nickname: String, // used for url
  friendScore: Number,
  goalSetCollection: GoalSetCollectionSchema,
}, { timestamps: true });

export default friendSchema;
