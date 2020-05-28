import R from 'ramda';
import uuid from 'uuid';
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

  const [ followeeId, goalId ] = R.times(uuid.v4, 2)

  const friendScore = computeFriendScore(goals);

  try {
    const transationResponse = await Person.transaction(async (t) => {
      const friendRecord = await Person.query().insert({ id: followeeId, name });
      const goalsRecord = await Goal.query().insert({
        id: goalId,
        cadence,
        current_text: currentText,
        current_phone: currentPhone,
        current_beer: currentBeer,
        target_text: targetText,
        target_phone: targetPhone,
        target_beer: targetBeer,
        friend_score: friendScore
      });

      // default return is id, but that column
      // doesn't exist so I'm returning followee_id
      const relationshipRecord = await Relationship.query()
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

    return transationResponse
  } catch (err) {
    console.log('Transation error: ', err)
  }
}

export default insertFriendToDatabase;
