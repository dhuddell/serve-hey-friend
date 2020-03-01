import mongoose from 'mongoose';

import UserSchema from './user';

// export { default as GoalSet } from './goal-set';
// export { default as GoalSetCollection } from './goal-set-collection';

const UserModel = mongoose.model('User', UserSchema);

export {
  UserModel,
};