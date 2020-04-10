import { Model } from 'objection';
import User from './user';

class Relationship extends Model {
  static get tableName() {
    return 'relationships';
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'relationships.user_id',
          to: 'users.id'
        }
      },
      friends: {
        relation: Model.BelongsToOneRelation,
        modelClass: Friend,
        join: {
          from: 'relationships.friend_id',
          to: 'friends.id'
        }
      },
      goalSets: {
        relation: Model.BelongsToOneRelation,
        modelClass: GoalSet,
        join: {
          from: 'relationships.goal_set_id',
          to: 'goal_sets.id'
        }
      }
    }
  }
}

export default Relationship;