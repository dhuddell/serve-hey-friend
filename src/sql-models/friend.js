import { Model } from 'objection';
import Relationship from './relationship';

class Friend extends Model {
  static get tableName() {
    return 'friends';
  }

  static get relationMappings() {
    return {
      relationships: {
        relation: Model.HasOneRelation,
        modelClass: Relationship,
        join: {
          from: 'friends.id',
          to: 'relationships.friend_id'
        }
      }
    }
  }
}

export default Friend;