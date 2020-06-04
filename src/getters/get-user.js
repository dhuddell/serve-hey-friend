import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import { Account, Person, Relationship } from '../sql-models';

export default async ( { username, id }, { token } ) => {
  authenticateUser(username, token);
  const user = await Account.query().findById(id);
  if (!user) throw new UserInputError('User not found');

  const person = await Person.query().findById(user.person_id);

  const relationships = await Relationship.query()
    .where({ follower_id: person.id});

  return {
    ...user,
    name: person.name,
    relationships
  };
};
