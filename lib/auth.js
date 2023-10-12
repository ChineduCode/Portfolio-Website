import jsonwebtoken from 'jsonwebtoken';

const MAX_AGE = process.env.MAX_AGE
const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
  const token = jsonwebtoken.sign(
    {
      id: user._id,
      firstname: user.firstname,
    },
    JWT_SECRET,
    {
      expiresIn: MAX_AGE,
    }
  );

  return token;
};

export const verifyToken = (token) => {
  try {
    const decoded = jsonwebtoken.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};
