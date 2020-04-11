import { Model } from 'objection';
import Relationship from './relationship';

class GoalSet extends Model {
  static get tableName() {
    return 'goal_sets';
  }

  static get relationMappings() {
    return {
      relationships: {
        relation: Model.HasOneRelation,
        modelClass: Relationship,
        join: {
          from: 'goal_sets.id',
          to: 'relationships.goal_set_id'
        }
      }
    }
  }
}

export default GoalSet;