import { Schema } from 'mongoose';

const GoalSetSchema = new Schema({
  phone: Number,
  text: Number,
  beer: Number,
});

export default GoalSetSchema;
