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

  type GoalSetCollection {
    currentGoals: GoalSet
    targetGoals: GoalSet
    cadence: String
  }

  input GoalSetCollectionInput {
    currentGoals: GoalSetInput
    targetGoals: GoalSetInput
    cadence: String
  }

  input FriendInput {
    name: String!
    icon: String
    nickname: String
    friendScore: Float
    description: String
    goalSetCollection: GoalSetCollectionInput
  }

  type Friend {
    name: String
    icon: String
    nickname: String
    friendScore: Float
    description: String
    goalSetCollection: GoalSetCollection
  }

  input UserInput {
    username: String!
    password: String!
    name: String
    setting: String
  }

  type User {
    username: String!
    password: String!
    name: String
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
    updateTargetFriendGoals(id: String!, goalSetCollection: GoalSetCollectionInput): Friend

    addFriendToUser(friendInput: FriendInput!): Friend
    removeFriend(friendId: String): StupidString
    removeFriends(ignoreString: String): StupidString

    registerUser(userInput: UserInput!): User
    removeUser(userId: String): StupidString
    removeUsers(ignoreString: String): StupidString
  }
`;

export default typeDefs;
