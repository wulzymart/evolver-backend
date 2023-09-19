import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize({
	dialect: 'mysql',
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	host: process.env.DB_HOST,
});

export default db;
