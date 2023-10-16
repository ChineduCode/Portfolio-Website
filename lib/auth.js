import jsonwebtoken from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
  const token = jsonwebtoken.sign(
    {
      id: user._id,
      firstname: user.firstname,
    },
    JWT_SECRET,
    {
      expiresIn: '30d',
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
