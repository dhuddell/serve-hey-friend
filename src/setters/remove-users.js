import { Account } from '../sql-models'

const removeUsers = async () => await Account.query().delete()
    .then(() => ({ message: 'Literally Thanos\'ed all the users'}));

export default removeUsers;
