const mocks = {
  String: () => 'It works!',
  Float: () => 1
};

export default mocks;

// const mocks = {
//   String: () => 'It works!',
//   Float: () => 1,
//   Goals: () => [GoalSet],
//   GoalSet: () => ({
//     phone: '123-234-2346',
//     text: '2',
//     beer: '1',
//   }),
//   User: () => ({
//     name: 'jimmy dean',
//     friends: [{}],
//     setting: 'default, mang',

//   }),
//   Friends: () => [{
//     name: 'jimmy dean',
//     icon: 'fa-horse',
//     id: '1234',
//     friendScore: 10,
//     description: 'description about stuff',
//     goals: [{}],
//   },
//   {
//     name: 'jones dean',
//     icon: 'fa-mule',
//     id: '9876',
//     friendScore: 100,
//     description: 'blahblah blah about stuff',
//     goals: [{}],
//   }],
//   Friend: () => ({
//     name: 'jimmy dean',
//     icon: 'fa-horse',
//     id: '1234',
//     friendScore: 10,
//     description: 'description about stuff',
//     goals: [{}],
//   })
// };

// export default mocks;