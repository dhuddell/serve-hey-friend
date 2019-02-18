import mongoose from 'mongoose';

const goalSetModel = new mongoose.Schema({
  goalType: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  goalSetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GoalSet',
  }
}, { timestamps: true });

export default goalSetModel;
