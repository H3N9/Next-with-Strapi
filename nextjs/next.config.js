// Testing ENV
const envList = ['BACKEND_URL'];
console.log('Environments');
envList.forEach((name) => console.log(process.env[name]));

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    backend_url: process.env.BACKEND_URL,
  },
};
