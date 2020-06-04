import { Model } from 'objection';
import Person from './person';
import Goal from './goal';

class Relationship extends Model {
  static get tableName() {
    return 'relationships';
  }

  static get relationMappings() {
    return {
      followers: {
        relation: Model.BelongsToOneRelation,
        modelClass: Person,
        join: {
          from: 'relationships.follower_id',
          to: 'persons.id',
        },
      },
      followees: {
        relation: Model.BelongsToOneRelation,
        modelClass: Person,
        join: {
          from: 'relationships.followee_id',
          to: 'persons.id',
        },
      },
      goals: {
        relation: Model.BelongsToOneRelation,
        modelClass: Goal,
        join: {
          from: 'relationships.goal_id',
          to: 'goals.id'
        }
      }
    }
  }
}

export default Relationship;