import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import { Account, Relationship, Person, Goal } from '../sql-models';

// 5/27/2020
// TODO: Need to create a trigger to properly order and cascade deletions

const removeFriend = async ({ username, friendId }, { token }) => {
  authenticateUser(username, token)
  const account = await Account.query().where({ username }).first() || {};
  const relationship = await Relationship.query()
    .where({ follower_id: account.person_id })
    .andWhere({ followee_id: friendId }).first();

  if (!relationship) throw new UserInputError('Friendship not found');

  try {
    const transactionResponse = Account.transaction(async (trx) => {
      // should be able to remove this
      try {
        await Relationship.query(trx).delete().where({ followee_id: relationship.followee_id })
        await Goal.query(trx).delete().where({ 'id': relationship.goal_id });

        const person = await Person.query(trx).delete()
          .where({ 'id': relationship.followee_id }).returning('*').first();

        return { message: `Removed friend '${person.name}' of user '${username}'.` };

      } catch (err) {
        console.log('Remove friend transaction error: ', err);
        throw new UserInputError(err);
      }
    });

    return transactionResponse;

  } catch (error) {
    console.log('Remove friend transaction error: ', err);

    throw new UserInputError(err);
  }
};

export default removeFriend;
