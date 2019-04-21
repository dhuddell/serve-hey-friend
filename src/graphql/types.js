import gql from 'graphql-tag';

const typeDefs = gql`
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
    username: String
  }

  type Friend {
    friendId: String
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
    user(username: String!): User
    users: [User]
    friend(username: String!, friendId: String!): Friend
    friends(username: String!): [Friend]
  }

  type StupidString {
    updateMessage: String
  }

  type Mutation {
    updateTargetFriendGoals(username: String!, goalSetCollection: GoalSetCollectionInput): Friend

    addFriendToUser(friendInput: FriendInput!): Friend
    removeFriend(username: String!, friendId: String!): StupidString
    removeAllFriends(username: String!): StupidString

    registerUser(userInput: UserInput!): User
    removeUser(userId: String): StupidString
    removeAllUsers(ignoreString: String): StupidString
  }
`;

export default typeDefs;
