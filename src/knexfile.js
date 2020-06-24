export default {
  client: 'postgresql',
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.GCP_HOST_INSTANCE_CONNECTION_NAME,
  },
};
