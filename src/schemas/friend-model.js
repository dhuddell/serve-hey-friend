import mongoose from 'mongoose';
import FriendSchema from './friend';

export default mongoose.model('Friend', FriendSchema);
