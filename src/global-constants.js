const Globals = {
    'HOST' : (process.env.ENVIRONMENT === 'staging' ? process.env.STAGING_BMP_URL : process.env.INTEGRATION_BMP_URL) || 'https://locahost:9000/',
    'clientId' : process.env.CLIENT_ID || 'id',
    'clientSecret' : process.env.CLIENT_SECRET || 'secret',
};

module.exports = Globals;


