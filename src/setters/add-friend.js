import { UserInputError } from 'apollo-server';
import { 
  authenticateUser,
  insertFriendToDatabase,
  checkNameAvailability
} from '../helpers';
import { Account } from '../sql-models';

const addFriend = async ( { addFriendInput }, { token } ) => {
  const {
    username,
    name,
    icon,
    description,
    goals,
  } = addFriendInput;

  authenticateUser(username, token);

  const follower = await Account.query()
    .select('accounts.*', 'p.name')
    .where('username', username)
    .joinRelated('persons',  { alias: 'p' })
    .first()

  if (!follower) throw new UserInputError('User not found');
  await checkNameAvailability({ followerId: follower.person_id, name });

  const { friendRecord, goalsRecord, relationshipRecord } = await insertFriendToDatabase({
    goals,
    followerId: follower.person_id,
    name,
    description,
    icon
  })

  return {
    username,
    friendId: friendRecord.id,
    name: friendRecord.name,
    icon: relationshipRecord.icon,
    description: relationshipRecord.description,
    friendScore: goalsRecord.friend_score,
    goals: {
      cadence: goalsRecord.cadence,
      currentText: goalsRecord.current_text,
      currentPhone: goalsRecord.current_phone,
      currentBeer: goalsRecord.current_beer,
      targetText: goalsRecord.target_text,
      targetPhone: goalsRecord.target_phone,
      targetBeer: goalsRecord.target_beer,
    }
  }
};

export default addFriend;
