import { AuthenticationError } from 'apollo-server';
import validateToken from './validate-token';

export default ( username, token ) => {
  const validationResponse = validateToken(username, token);
  if (!validationResponse.isValidToken)
    throw new AuthenticationError('you must be logged in'); 
};