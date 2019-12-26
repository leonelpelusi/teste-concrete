"use strict";require("dotenv/config");

module.exports = {
	dialect: "postgres",
	host: process.env.DB_HOST || "ec2-174-129-255-106.compute-1.amazonaws.com",
	port: process.env.DB_PORT || 5432,
	username: process.env.DB_USER || "bkhrivecemstkk",
	password:
		process.env.DB_PASS ||
		"6c1a8f4ba64b8a160bd741895ff309b15945aa09591b906f85affde2e9fb5d9f",
	database: process.env.DB_NAME || "dfhtrduie4vf9",
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true
	}
};

// module.exports = {
//   dialect: 'postgres',
//   host: 'localhost',
//   username: 'postgres',
//   password: 'docker',
//   database: 'postgres',
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };