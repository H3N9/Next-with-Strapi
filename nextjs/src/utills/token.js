import cookie from 'cookie';

const ttl = 1;

const cookiesOption = {
  httpOnly: true,
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 60 * 60 * 24 * ttl, //60secs 60mins 24hours * TTL
};

const tokenName = 'token';

const getToken = (req) => {
  const encodeCookie = req?.headers?.cookie || '';
  return cookie.parse(encodeCookie)?.token;
};

const setToken = (token) => {
  return cookie.serialize(tokenName, token, cookiesOption);
};

export { setToken, getToken };
