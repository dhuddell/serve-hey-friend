import { Model } from 'objection';
import Person from './person';

class Account extends Model {
  static get tableName() {
    return 'accounts';
  }

  static get idColumn() {
    return 'id'
  }

  static get relationMappings() {
    return {
      persons: {
        relation: Model.BelongsToOneRelation,
        modelClass: Person,
        join: {
          from: 'accounts.person_id',
          to: 'persons.id'
        }
      }
    }
  }
}

export default Account;