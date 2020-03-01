import jwt from 'jsonwebtoken';

const validateToken = (username, token = 'invalid') => {
  try {
    const verificationResponse = jwt.verify(token, 'tempi is a dog');
    return { isValidToken: verificationResponse.username === username }
  } catch(e) {
    console.log('Error: ', e.message)
    return { isValidToken: false, error: e.message };
  };
}

export default validateToken;