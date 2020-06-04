import { Model } from 'objection';
import Relationship from './relationship';

class Goal extends Model {
  static get tableName() {
    return 'goals';
  }

  static get idColumn() {
    return 'id'
  }

  static get relationMappings() {
    return {
      relationships: {
        relation: Model.BelongsToOneRelation,
        modelClass: Relationship,
        join: {
          from: 'relationships.goal_id',
          to: 'goals.id'
        }
      }
    }
  }
}

export default Goal;