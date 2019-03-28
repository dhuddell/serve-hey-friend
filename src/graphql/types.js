const typeDefs = `
  type GoalSet {
    phone: String
    text: String
    beer: String
  }

  input GoalSetInput {
    phone: String
    text: String
    beer: String
  }

  type Goals {
    currentGoals: GoalSet
    targetGoals: GoalSet
    cadence: String
  }

  input GoalsInput {
    currentGoals: GoalSetInput
    targetGoals: GoalSetInput
    cadence: String
  }

  input FriendInput {
    name: String!
    icon: String
    id: String
    friendScore: Float
    description: String
    goals: GoalsInput
  }

  type Friend {
    name: String
    icon: String
    id: String
    friendScore: Float
    description: String
    goals: Goals
  }

  type User {
    name: String!
    friends: [Friend]
    setting: String
  }

  type Query {
    user(id: String!): User
    users: [User]
    friend(id: String!): Friend
    friends: [Friend]
  }

  type StupidString {
    updateMessage: String
  }

  type Mutation {
    updateTargetFriendGoals(id: String!, goals: GoalsInput): Friend

    createFriend(friendInput: FriendInput!): Friend
    removeFriend(friendId: String): StupidString
    removeFriends(ignoreString: String): StupidString

    createUser(name: String!): User
    removeUser(userId: String): StupidString
    removeUsers(ignoreString: String): StupidString
  }
`;

export default typeDefs;
