
/*
 * @Author: chenzhaozheng
 * @Date: 2019-08-19 15:06:37
 * @LastEditors  : chenzhaozheng
 * @LastEditTime : 2019-12-25 00:06:15
 * @Description: file content
 */
import { CronJob } from 'cron';

if (process.env.NODE_ENV === 'monit') {
    new CronJob('0 */5 * * * *', () => {
        console.log('执行定时任务');
    }, null, true, 'America/Los_Angeles');
}

export default () => {
};
