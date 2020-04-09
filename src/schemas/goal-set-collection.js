import { Schema } from 'mongoose';
import GoalSetSchema from './goal-set';

const GoalSetCollectionSchema = new Schema({
  cadence: String,
  currentGoals: GoalSetSchema,
	targetGoals: GoalSetSchema,
});

export default GoalSetCollectionSchema;
