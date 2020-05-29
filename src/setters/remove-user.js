import { UserInputError } from 'apollo-server';
import authorizeUser from '../helpers/authorize-user';
import { Account, Person, Relationship, Goal } from '../sql-models';

// 5/27/2020
// Currently when removing account will remove:
// Account, referenced person, any followee or follower relationships
// and any associated goals with any relationship
// * STOPGAP * This is a until the SQL cascading can properly handle this

const removeUser = async ({ username }, { token }) => {
  authorizeUser(username, token);

  try {
    // I dont think transaction is working
    const transactionResponse = Account.transaction(async (t) => {
      try {
        const account = await Account.query().where({ username }).first() || {};
        const relationshipRecords = await Relationship.query()
          .delete().where({ follower_id: account.person_id })
          .orWhere({ followee_id: account.person_id }).returning('*') || [];

        const personIds = relationshipRecords.reduce((accum, curr) => {
          if ([curr.follower_id, curr.followee_id].includes(account.person_id)) {
            accum.push(curr.followee_id, curr.follower_id);
            return accum;
          }
          return accum;
        }, []);

        await Account.query().delete().where({ username }).first()
        await Person.query().delete().whereIn('id', personIds);
        await Goal.query().delete().whereIn('id', relationshipRecords.map((r) => r.goal_id));

        return { message: `Removed user: ${username}` };
      } catch (err) {
        console.log('Remove user transation error: ', err);
        throw new UserInputError(err);
      }
    });

    return transactionResponse;
  } catch (err) {
    console.log('Remove user transation error: ', err);
    throw new UserInputError(err);
  }

};

export default removeUser;
