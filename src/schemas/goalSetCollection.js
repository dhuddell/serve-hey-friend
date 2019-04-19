import { Schema } from 'mongoose';
import GoalSetSchema from './goalSet';

const GoalSetCollectionSchema = new Schema({
  cadence: String,
  currentGoals: GoalSetSchema,
	targetGoals: GoalSetSchema,
});

export default GoalSetCollectionSchema;
