const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

// module.exports = {
//   dialect: 'postgres',
//   host: 'localhost',
//   username: 'postgres',
//   password: 'docker',
//   database: 'concrete',
//   define: {
//     timestamp: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };
