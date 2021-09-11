module.exports = {
  reactStrictMode: true,
  env: {
    MONGOODB_URI: `${process.env.MONGOODB_URI}`,
    JWT_SECRET: `${process.env.JWT_SECRET}`,
  },
};
