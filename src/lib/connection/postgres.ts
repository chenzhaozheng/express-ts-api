/*
 * @Author: chenzhaozheng
 * @Date: 2019-09-12 16:20:30
 * @LastEditors: chenzhaozheng
 * @LastEditTime: 2020-02-20 11:22:06
 * @Description: file content
 */
import { Sequelize } from 'sequelize';
import dbConf from '../../config/database';
import logger from '../../util/logger';

const sequelize: any = new Sequelize(dbConf.postgres.database, dbConf.postgres.username, dbConf.postgres.password, {
    host   : dbConf.postgres.host,
    dialect: 'postgres',
    pool : {
        max: 1000,
        min: 0,
        idle: 200000,
        acquire: 1000000,
        evict: 10000
    },
    define: {
        freezeTableName: true,
        charset: 'utf8',
        timestamps: false
    },
    logging: function (output: any) {
        if (dbConf.postgres.logging) {
            logger.info(output);
        }
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Postgres Connection has been established successfully.');
    })
    .catch((err: any) => {
        console.error('Unable to connect to the postgres database:', err);
    });

export default { sequelize };
