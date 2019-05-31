import gql from 'graphql-tag';

export default gql`
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
    username: String!
  }

  type Friend {
    _id: String
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

  type LoginResponse {
    message: String!
    token: String
  }

  type Query {
    user(id: String!): User
    users: [User]
    friend(id: String!): Friend
    friends: [Friend]
  }

  type Mutation {
    updateTargetFriendGoals(id: String!, goalSetCollection: GoalSetCollectionInput): Friend

    addFriendToUser(friendInput: FriendInput!): Friend
    removeFriend(friendId: String): String
    removeFriends(ignoreString: String): String

    removeUser(userId: String): String
    registerUser(userInput: UserInput!): User
    removeUsers(ignoreString: String): String
    loginUser(userInput: UserInput!): LoginResponse
  }
`;