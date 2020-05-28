import gql from 'graphql-tag';

// i just broke all goals stuff.
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

  input CreateFriendInput {
    username: String!
    name: String!
    icon: String
    description: String
    goals: GoalsInput
  }

  input UpdateFriendInput {
    username: String!
    friendId: String!
    name: String
    icon: String
    description: String
    goals: GoalsInput
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

  input RegistrationInput {
    username: String!
    password: String!
    email: String
    name: String
  }

  type User {
    username: String!
    id: String!
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

    addFriendToUser(createFriendInput: CreateFriendInput!): Friend
    
    # is this what I want to return?
    updateCurrentGoal(updateCurrentGoalInput: UpdateCurrentGoalInput!): Goals
    updateFriend(updateFriendInput: UpdateFriendInput!): Friend
    updateFriendTargetGoals(updateFriendTargetGoalsInput: UpdateFriendTargetGoalsInput!): Goals

    removeFriend(username: String, friendId: String!): ConfirmationResponse
    removeFriends(username: String!): ConfirmationResponse

    removeUser(username: String): ConfirmationResponse
    removeUsers(ignoreString: String): ConfirmationResponse
  }
`;
