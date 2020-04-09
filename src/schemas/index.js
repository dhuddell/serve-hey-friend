import mongoose from 'mongoose';

// const exports are breaking:
// /Users/dan-huddell/projects/serve-imissyou/node_modules/mongoose/lib/index.js:454
//       throw new _mongoose.Error.OverwriteModelError(name);
//       ^
// OverwriteModelError: Cannot overwrite `User` model once compiled.
//     at new OverwriteModelError (/Users/dan-huddell/projects/serve-imissyou/node_modules/mongoose/lib/error/overwriteModel.js:20:11)
//     at Mongoose.model (/Users/dan-huddell/projects/serve-imissyou/node_modules/mongoose/lib/index.js:454:13)
//     at Object.<anonymous> (/Users/dan-huddell/projects/serve-imissyou/src/schemas/index.js:7:30)
//     at Module._compile (module.js:635:30)
//     at loader (/Users/dan-huddell/projects/serve-imissyou/node_modules/babel-register/lib/node.js:144:5)
//     at Object.require.extensions.(anonymous function) [as .js] (/Users/dan-huddell/projects/serve-imissyou/node_modules/babel-register/lib/node.js:154:7)
//     at Module.load (module.js:554:32)
//     at tryModuleLoad (module.js:497:12)
//     at Function.Module._load (module.js:489:3)
//     at Module.require (module.js:579:17)
//     at require (internal/module.js:11:18)
//     at Object.<anonymous> (/Users/dan-huddell/projects/serve-imissyou/src/getters/index.js:3:1)
//     at Module._compile (module.js:635:30)
//     at loader (/Users/dan-huddell/projects/serve-imissyou/node_modules/babel-register/lib/node.js:144:5)
//     at Object.require.extensions.(anonymous function) [as .js] (/Users/dan-huddell/projects/serve-imissyou/node_modules/babel-register/lib/node.js:154:7)
//     at Module.load (module.js:554:32)

// import UserSchema from './user';
// import friendSchema from './friend';

// const UserModel = mongoose.model('User', UserSchema);
// const FriendModel = mongoose.model('User', friendSchema);

// export {
//   UserModel,
//   FriendModel,
// };