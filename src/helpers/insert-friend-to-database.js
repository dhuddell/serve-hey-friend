import R from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import { computeFriendScore } from '../helpers';
import { Person, Goal, Relationship } from '../sql-models';

const insertFriendToDatabase = async ({
  goals,
  followerId,
  name,
  description,
  icon
}) => {
  const {
    currentText, currentPhone, currentBeer,
    targetText, targetPhone, targetBeer, cadence
  } = goals;

  const [followeeId, goalId] = R.times(uuidv4, 2)

  const friendScore = computeFriendScore(goals);

  try {
    const transactionResponse = await Person.transaction(async (trx) => {
      const friendScoreIsNumber = typeof friendScore === Number;

      const friendRecord = await Person.query(trx).insert({ id: followeeId, name });
      const goalsRecord = await Goal.query(trx).insert({
        id: goalId,
        cadence: cadence || 'Monthly',
        current_text: currentText || 0,
        current_phone: currentPhone || 0,
        current_beer: currentBeer || 0,
        target_text: targetText || 0,
        target_phone: targetPhone || 0,
        target_beer: targetBeer || 0,
        friend_score: friendScoreIsNumber ? friendScore :  100,
      });

      // default return is id, but that column
      // doesn't exist so I'm returning followee_id
      const relationshipRecord = await Relationship.query(trx)
        .returning('followee_id')
        .insert({
          followee_id: followeeId,
          follower_id: followerId,
          goal_id: goalId,
          description,
          icon
        });

      return { friendRecord, goalsRecord, relationshipRecord };
    });

    return transactionResponse
  } catch (err) {
    console.log('Transaction error: ', err)
  }
}

export default insertFriendToDatabase;
