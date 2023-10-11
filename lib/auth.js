import jsonwebtoken from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
  const jwtToken = jsonwebtoken.sign(
    {
      id: user._id,
      firstname: user.firstname,
    },
    JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );

  const cookieStore = cookies()
  const token = cookieStore.get('token')

  console.log(token)
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${jwtToken}` },
  })

};

export const verifyToken = (token) => {
  try {
    const decoded = jsonwebtoken.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};
