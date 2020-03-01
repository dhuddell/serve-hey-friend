import { Schema } from 'mongoose';

const GoalSetSchema = new Schema({
  phone: String,
  text: String,
  beer: String,
});

export default GoalSetSchema;
