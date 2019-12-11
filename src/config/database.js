module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'concrete',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
