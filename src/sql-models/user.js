import { Model } from 'objection';
import Relationship from './relationship';

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      relationships: {
        relation: Model.HasManyRelation,
        modelClass: Relationship,
        join: {
          from: 'users.id',
          to: 'relationships.user_id'
        }
      }
    }
  }
}

export default User;