module.exports = {
  reactStrictMode: true,
  env: {
    MONGOODB_URI: `${process.env.MONGOODB_URI}`,
  },
};
