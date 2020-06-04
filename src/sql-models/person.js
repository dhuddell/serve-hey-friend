import { Model } from 'objection';
import Account from './account';

class Person extends Model {
  static get tableName() {
    return 'persons';
  }

  static get idColumn() {
    return 'id'
  }

  static get relationMappings() {
    return {
      accounts: {
        relation: Model.HasOneRelation,
        modelClass: Account,
        join: {
          from: 'persons.id',
          to: 'accounts.person_id'
        }
      },
      relationships: {
        relation: Model.HasOneRelation,
        modelClass: Account,
        join: {
          from: 'persons.id',
          to: 'relationships.person_id'
        }
      }
    }
  }
}

export default Person;