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

  input GoalInputs {
    targetGoals: GoalSetInput
    cadence: String
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
    friends: [Friend]
    setting: String
  }

  type Query {
    user: User
    friend(id: String!): Friend
  }

  type Mutation {
    updateTargetFriendGoals(id: String!, goals: GoalInputs): Friend
  }
`;

export default typeDefs;