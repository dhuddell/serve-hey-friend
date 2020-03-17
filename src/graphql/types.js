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
    cadence: String
  }

  input FriendInput {
    username: String!
    name: String!
    icon: String
    friendScore: Int
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
    updateFriendTargetGoals(updateFriendTargetGoalsInput: UpdateFriendTargetGoalsInput!): TargetGoalValues

    addFriendToUser(friendInput: FriendInput!): Friend
    removeFriend(id: String): String
    removeFriends(ignoreString: String): String

    removeUser(username: String): String
    registerUser(registrationInput: RegistrationInput!): AuthResponse
    removeUsers(ignoreString: String): String
    loginUser(loginInput: LoginInput!): AuthResponse
  }
`;
