import { UserInputError } from 'apollo-server';
import { Relationship } from '../sql-models';

const checkNameAvailability = async function({ follower, name }) {
  const followees = await Relationship.query()
    .select('f.name')
    .where('follower_id', follower.person_id)
    .joinRelated('followees',  { alias: 'f' })

  if (followees.find((f) => f.name === name))
    throw new UserInputError('Friend name taken, please choose another name');
}

export default checkNameAvailability;
