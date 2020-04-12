import jwt from 'jsonwebtoken';
import uuid from 'uuid';
import bcrypt from 'bcrypt';
import { User } from '../sql-models';

const registerUser = async ( input ) => {
  const { username, password, name } = input.registrationInput;

  const usernameTaken = await !!User.query().findOne({ username }).length;
  if (usernameTaken) return { message: `The username ${username} is already taken` };

  const hashedPassword = await bcrypt.hash(password, 10);;
  const token = jwt.sign(
    { username },
    'tempi is a dog',
    { expiresIn: '2h' }
  );

  await User.query().insert({
    id: uuid.v4(),
    username,
    password: hashedPassword,
    name
  })

  return {
    message: 'User created successfully!',
    username,
    token,
    name
  }
};

export default registerUser;
