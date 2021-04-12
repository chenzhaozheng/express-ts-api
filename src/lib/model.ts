/* eslint-disable no-case-declarations */
/*
 * @Author: chenzhaozheng
 * @Date: 2019-09-12 14:26:12
 * @LastEditors: chenzhaozheng
 * @LastEditTime: 2019-09-18 18:15:44
 * @Description: file content
 */

import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

let data: any = { Sequelize, Model, DataTypes, sequelize: {} };

data.initDb = function (dbType: any) {
    switch (dbType) {
    case 'postgres':
        let postgresSequelize = require('../lib/connection/postgres');

        data.sequelize = postgresSequelize.default.sequelize;
        break;
    default:
        break;
    }
    return data;
};

export default data;
