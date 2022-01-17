module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8e60d4dcca17329e30673709609831a4'),
  },
});
