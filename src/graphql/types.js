import gql from 'graphql-tag';

export default gql`
  type GoalSet {
    phone: Int
    text: Int
    beer: Int
  }

  input GoalSetInput {
    phone: Int
    text: Int
    beer: Int
  }
  
  type GoalSetResponse {
    phone: Int
    text: Int
    beer: Int
    cadence: String
  }

  type GoalSetCollection {
    currentGoals: GoalSet
    targetGoals: GoalSet
    cadence: String
  }

  input GoalSetCollectionInput {
    targetGoals: GoalSetInput
    currentGoals: GoalSetInput
    cadence: String
  }

  input FriendInput {
    username: String!
    name: String!
    icon: String
    description: String
    goalSetCollection: GoalSetCollectionInput
  }

  input FriendUpdateInput {
    username: String!
    friendId: String!
    name: String
    icon: String
    description: String
    goalSetCollection: GoalSetCollectionInput
  }

  type Friend {
    username: String
    friendId: String
    name: String
    icon: String
    description: String
    friendScore: Int
    goalSetCollection: GoalSetCollection
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input RegistrationInput {
    username: String!
    password: String!
    name: String
  }

  type User {
    username: String!
    name: String
    friends: [Friend]
  }

  type AuthResponse {
    message: String
    username: String
    name: String
    token: String
  }

  type ConfirmationResponse {
    message: String
  }

  input UpdateCurrentGoalInput {
    goalKey: String!
    goalValue: Int!
    username: String!
    friendId: String!
  }

  input UpdateFriendTargetGoalsInput {
    phone: Int
    text: Int
    beer: Int
    cadence: String
    username: String!
    friendId: String!
  }

  type Query {
    user(username: String!, id: String!): User
    users: [User]

    friend(username: String!, friendId: String!): Friend
    friends(username: String!): [Friend]
  }

  type Mutation {
    registerUser(registrationInput: RegistrationInput!): AuthResponse
    loginUser(loginInput: LoginInput!): AuthResponse

    addFriendToUser(friendInput: FriendInput!): Friend
    updateCurrentGoal(updateCurrentGoalInput: UpdateCurrentGoalInput!): GoalSetResponse
    updateFriend(friendUpdateInput: FriendUpdateInput!): Friend
    updateFriendTargetGoals(updateFriendTargetGoalsInput: UpdateFriendTargetGoalsInput!): GoalSetResponse

    removeFriend(username: String, friendId: String!): ConfirmationResponse
    removeFriends(username: String!): ConfirmationResponse

    removeUser(username: String): ConfirmationResponse
    removeUsers(ignoreString: String): ConfirmationResponse
  }
`;
