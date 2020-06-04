import { UserInputError } from 'apollo-server';
import authenticateUser from '../helpers/authenticate-user';
import { Account, Relationship, Person, Goal } from '../sql-models';

// 5/27/2020
// TODO: Need to create a SQL trigger to properly order and cascade deletions

const removeFriends = async ({ username }, { token }) => {
  authenticateUser(username, token)
  const account = await Account.query().where({ username }).first() || {};
  const relationships = await Relationship.query()
    .where({ follower_id: account.person_id });

  try {
    const transactionResponse = Account.transaction(async (trx) => {
      try {
        await Relationship.query(trx).delete().where({ follower_id: account.person_id });
        await Person.query(trx).delete().whereIn( 'id', relationships.map((r) => r.followee_id));
        await Goal.query(trx).delete().whereIn('id', relationships.map((r) => r.goal_id));

        return { message: `Removed friends of user '${username}'.` };
      } catch (err) {
        console.log('Remove friends transaction error: ', err);
        throw new UserInputError(err);
      }
    });

    return transactionResponse;
  } catch (error) {
    console.log('Remove friends transaction error: ', err);
    throw new UserInputError(err);
  }
};

export default removeFriends;
