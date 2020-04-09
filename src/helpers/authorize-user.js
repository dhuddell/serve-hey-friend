import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';
import validateToken from './validate-token';

export default ( username, token ) => {
  const validationResponse = validateToken(username, token);
  if (!validationResponse.isValidToken)
    throw new AuthenticationError('Not logged in'); 
};

export const authorizeAny = (token) => jwt.verify(token, 'tempi is a dog');