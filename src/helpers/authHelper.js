import jwt from 'jsonwebtoken';

// need to test this token with postman.

export default (headers) => {
  console.log(headers)
  return jwt.verify(headers.token, 'tempi is a dog');
};

