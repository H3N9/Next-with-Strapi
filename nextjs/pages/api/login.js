import axios from 'axios';
import { loggerFunc } from '../../src/utills/logger';
import getConfig from 'next/config';
import { setToken } from '../../src/utills/token';

const {
  serverRuntimeConfig: { backend_url },
} = getConfig();

const handler = async (req, res) => {
  try {
    if (req.method !== 'POST')
      return res.status(405).send({ message: 'request must be POST!' });

    const { identifier, password } = req.body;

    const resFromBackend = await axios.post(`${backend_url}/api/auth/local`, {
      identifier,
      password,
    });

    const { jwt, user } = resFromBackend.data;
    if (jwt) {
      res.setHeader('Set-Cookie', setToken(jwt));
      res.status(200).json({ user });
    }
  } catch (err) {
    loggerFunc(err, '/login');
  }
};

export default handler;
