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
  
  type TargetGoalValues {
    phone: String
    text: String
    beer: String
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
    id: String!
    name: String
    icon: String
    description: String
    goalSetCollection: GoalSetCollectionInput
  }

  type Friend {
    username: String
    id: String
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
  }

  type User {
    username: String!
    name: String
    friends: [Friend]
  }

  type AuthResponse {
    message: String
    username: String
    token: String
  }

  type ConfirmationResponse {
    message: String
  }

  input UpdateFriendTargetGoalsInput {
    phone: String
    text: String
    beer: String
    cadence: String
    username: String!
    id: String!
  }

  type Query {
    user(username: String!): User
    users: [User]

    friend(username: String!, id: String!): Friend
    friends(username: String!): [Friend]
  }

  type Mutation {
    registerUser(registrationInput: RegistrationInput!): AuthResponse
    loginUser(loginInput: LoginInput!): AuthResponse

    addFriendToUser(friendInput: FriendInput!): Friend
    updateFriend(friendUpdateInput: FriendUpdateInput!): Friend
    updateFriendTargetGoals(updateFriendTargetGoalsInput: UpdateFriendTargetGoalsInput!): TargetGoalValues

    removeFriend(username: String, friendId: String!): ConfirmationResponse
    removeFriends(username: String!): ConfirmationResponse

    removeUser(username: String): ConfirmationResponse
    removeUsers(ignoreString: String): ConfirmationResponse
  }
`;
