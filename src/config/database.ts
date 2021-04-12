/*
 * @Author: chenzhaozheng
 * @Date: 2019-09-12 15:53:58
 * @LastEditors: chenzhaozheng
 * @LastEditTime: 2020-02-18 18:53:06
 * @Description: file content
 */
import { ENV } from './../util/secrets';

export default {
    postgres: {
        host: ENV.POSTGRES_DB_HOST,
        username: ENV.POSTGRES_DB_USERNAME,
        password: ENV.POSTGRES_DB_PASSWORD,
        port: ENV.POSTGRES_DB_PORT,
        database: ENV.POSTGRES_DB_DATABASE,
        connectTimeout: 5000 * 2,
        waitForConnections: true,
        connectionLimit: 50,
        logging: false,
        max: 100,
        min: 5
    }
};
