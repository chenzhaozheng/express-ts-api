/*
 * @Author: chenzhaozheng
 * @Date: 2019-08-01 16:39:59
 * @LastEditors  : chenzhaozheng
 * @LastEditTime : 2020-01-03 10:25:17
 * @Description: file content
 */

import log4js from 'log4js';
import paths from 'path';
import config from '../config/default';
import fse from 'fs-extra';

fse.mkdirsSync(config.log.dir);
fse.mkdirsSync(config.log.dir + 'main');

console.log(paths.join(config.log.dir, 'main/log'));
export const log4jsConfig: any = {
    replaceConsole: config.log.replaceConsole,
    appenders: {
        stdout: {
            type: 'stdout'
        },
        main: {
            type: 'dateFile',
            filename: paths.join(config.log.dir, 'main/log'),
            pattern: 'yyyyMMdd',
            alwaysIncludePattern: true,
            maxLogSize: 20480,
            backups: 3
        },
        mainLevel: {
            type: 'logLevelFilter',
            appender: 'main',
            level: 'ERROR'
            // filename: paths.join(config.log.dir, "main.ERROR"),
            // maxLogSize: 20480
        }
    },
    categories: {
        default: { appenders: ['stdout', 'main', 'mainLevel'], level: 'All' }
    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID'
};

log4js.configure(log4jsConfig);
export const logger = log4js.getLogger();
logger.debug('Some debug messages');

export default logger;
