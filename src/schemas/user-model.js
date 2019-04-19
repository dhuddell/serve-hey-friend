import mongoose from 'mongoose';
import UserSchema from './user';

export default mongoose.model('User', UserSchema);
