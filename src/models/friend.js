import mongoose, { Schema } from 'mongoose';

export const friendSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  friendScore: {
    type: Number,
    required: true,
  },
  goals: {
    currentGoals: {
      phone: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      beer: {
        type: String,
        required: true,
      },
    },
    targetGoals: {
      phone: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      beer: {
        type: String,
        required: true,
      },
    },
  }
}, { timestamps: true });

export default mongoose.model('Friend', friendSchema);
