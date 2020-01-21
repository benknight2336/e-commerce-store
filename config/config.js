const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'ca_GZbsNaJQDCEWdhXT51sD0rBfTE8ZDHIo',
  stripe_test_secret_key: 'sk_test_YQKqNZtph7owovPtWtKN7gms00YfwclXNF',
  stripe_test_api_key: 'pk_test_i2AnBdBITKTbEBWto2xRKPUX00UQySK85h'
}

export default config
