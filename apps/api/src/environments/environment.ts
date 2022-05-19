export const environment = {
  production: false,
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
  appSecret: process.env.GITHUB_JWT_APP_SECRET,
  appUrl: process.env.APP_URL,
  connectionString: process.env.MONGODB_CONNECTION_URL
};
