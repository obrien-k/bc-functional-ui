module.exports = {
  BMP_HOST: (process.env.ENVIRONMENT === 'staging' ? process.env.STAGING_BMP_URL : process.env.INTEGRATION_BMP_URL) || 'https://locahost:9000/',
  CP_HOST: (process.env.ENVIRONMENT === 'staging' ? process.env.STAGING_LOGIN_URL : process.env.INTEGRATION_LOGIN_URL) || 'https://locahost:9000/',
  CLIENT_ID: process.env.CLIENT_ID || 'id',
  CLIENT_SECRET: process.env.CLIENT_SECRET || 'secret',
  DEFAULT_TIMEOUT: 10,
  PROVISIONING_REQUEST_ENDPOINT: 'api/v1/provisioning_requests/',
  STORE_CREATION_TIMEOUT: 120,
  API_RETRY_TIME: 3,
  TEST_USER_EMAIL: process.env.TEST_USER_EMAIL || 'User Email',
  TEST_USER_PASSWORD: process.env.TEST_USER_PASSWORD || 'Password1!',
};
