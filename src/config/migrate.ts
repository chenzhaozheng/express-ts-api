// import { ENV } from '';
import dotenv from 'dotenv';
import fs from 'fs';
if (fs.existsSync('../.env')) {
    dotenv.config({ path: '../.env' });
} else {
    dotenv.config({ path: '../.env.example' }); // you can delete this after you create your own .env file!
}
const ENV = process.env;

if (ENV.DEFAULT_DB === 'postgres') {
    module.exports = {
        development: {
            username: ENV.POSTGRES_DB_USERNAME,
            password: ENV.POSTGRES_DB_PASSWORD,
            database: ENV.POSTGRES_DB_DATABASE,
            port: ENV.POSTGRES_DB_PORT,
            host: ENV.POSTGRES_DB_HOST,
            dialect: 'postgres',
            migrations: {
                directory: '../migrations'
            }
        },
        test: {
            username: ENV.POSTGRES_DB_USERNAME,
            password: ENV.POSTGRES_DB_PASSWORD,
            database: ENV.POSTGRES_DB_DATABASE,
            port: ENV.POSTGRES_DB_PORT,
            host: ENV.POSTGRES_DB_HOST,
            dialect: 'postgres',
            migrations: {
                directory: '../migrations'
            }
        },
        production: {
            username: ENV.POSTGRES_DB_USERNAME,
            password: ENV.POSTGRES_DB_PASSWORD,
            database: ENV.POSTGRES_DB_DATABASE,
            port: ENV.POSTGRES_DB_PORT,
            host: ENV.POSTGRES_DB_HOST,
            dialect: 'postgres',
            migrations: {
                directory: '../migrations'
            }
        }
    };
} else {
    module.exports = {
        development: {
            username: ENV.MYSQL_DB_USERNAME,
            password: ENV.MYSQL_DB_PASSWORD,
            database: ENV.MYSQL_DB_DATABASE,
            host: ENV.MYSQL_DB_HOST,
            dialect: 'mysql',
            migrations: {
                directory: '../migrations'
            }
        },
        test: {
            username: ENV.MYSQL_DB_USERNAME,
            password: ENV.MYSQL_DB_PASSWORD,
            database: ENV.MYSQL_DB_DATABASE,
            host: ENV.MYSQL_DB_HOST,
            dialect: 'mysql'
        },
        production: {
            username: ENV.MYSQL_DB_USERNAME,
            password: ENV.MYSQL_DB_PASSWORD,
            database: ENV.MYSQL_DB_DATABASE,
            host: ENV.MYSQL_DB_HOST,
            dialect: 'mysql'
        }
    };
}

