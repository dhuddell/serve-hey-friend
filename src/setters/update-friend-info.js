import { UserInputError } from 'apollo-server';
import { authenticateUser, checkNameAvailability } from '../helpers';
import { Account, Relationship, Person } from '../sql-models';

const updateFriendInfo = async ({ updateFriendInfoInput }, { token }) => {
  const {
    username,
    name,
    icon,
    description,
    friendId
  } = updateFriendInfoInput;

  authenticateUser(username, token)

  const initialAccount = await Account.query().where({ username }).first()
  if (!initialAccount) throw new UserInputError('User not found');

  const initialRelationship = await Relationship.query()
    .where({ follower_id: initialAccount.person_id, followee_id: friendId }).first()
  if (!initialRelationship) throw new UserInputError('Friend not found');
  
  const initialPerson = await Person.query()
    .where({ id: friendId }).returning('*').first();

  if (initialPerson.name !== name) await checkNameAvailability({ followerId: initialAccount.person_id, name });

  try {
    const transactionResponse = await Account.transaction(async (trx) => {
      const relationship = await Relationship.query(trx).patch({ icon, description })
        .where({ follower_id: initialAccount.person_id, followee_id: friendId }).returning('*').first();

      const person = await Person.query(trx).patch({ name })
        .where({ id: initialAccount.person_id }).returning('*').first();

      return {
        username: initialAccount.username,
        friendId: relationship.followee_id,
        name: person.name || name || '',
        icon: relationship.icon,
        description: relationship.description,
      };
    });

    return transactionResponse; 
  } catch (error) {
    console.log('Update friend transaction error: ', error)
    throw new UserInputError('Update friend transaction error')
  }
};

export default updateFriendInfo;
