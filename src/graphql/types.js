import gql from 'graphql-tag';

export default gql`  
  type Goals {
    currentText: Int
    currentPhone: Int
    currentBeer: Int
    targetText: Int
    targetPhone: Int
    targetBeer: Int
    cadence: String
  }

  input GoalsInput {
    currentText: Int
    currentPhone: Int
    currentBeer: Int
    targetText: Int
    targetPhone: Int
    targetBeer: Int
    cadence: String
  }

  type UpdateGoalResponse {
    friendScore: Int
    goals: Goals
  }

  input AddFriendInput {
    username: String!
    name: String!
    icon: String
    description: String
    goals: GoalsInput
  }

  input UpdateFriendGoalsInput {
    username: String!
    friendId: String!
    goals: GoalsInput
  }

  input UpdateFriendInfoInput {
    username: String!
    friendId: String!
    name: String
    icon: String
    description: String
  }

  type Friend {
    username: String
    friendId: String
    name: String
    icon: String
    description: String
    friendScore: Int
    goals: Goals
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input RemoveFriendInput {
    username: String!
    friendId: String!
  }

  input RegistrationInput {
    username: String!
    password: String!
    email: String
    name: String
  }

  input UpdateUserInput {
    username: String!
    password: String
    email: String
    name: String
  }

  type User {
    username: String
    password: String
    email: String
    name: String
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

  type Query {
    user(username: String!): User
    users: [User]

    friend(username: String!, friendId: String!): Friend
    friends(username: String!): [Friend]
  }

  type Mutation {
    loginUser(loginInput: LoginInput!): AuthResponse
    registerUser(registrationInput: RegistrationInput!): AuthResponse

    addFriendToUser(addFriendInput: AddFriendInput!): Friend
    
    updateUser(updateUserInput: UpdateUserInput!): User
    updateFriendInfo(updateFriendInfoInput: UpdateFriendInfoInput!): Friend
    updateFriendGoals(updateFriendGoalsInput: UpdateFriendGoalsInput!): Friend
    updateCurrentGoal(updateCurrentGoalInput: UpdateCurrentGoalInput!): UpdateGoalResponse

    removeUser(username: String): ConfirmationResponse
    removeUsers(ignoreString: String): ConfirmationResponse
    removeFriend(removeFriendInput: RemoveFriendInput!): ConfirmationResponse
    removeFriends(username: String!): ConfirmationResponse
  }
`;
