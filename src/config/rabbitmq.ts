/*
 * @Author: chenzhaozheng
 * @Date: 2019-09-12 15:53:58
 * @LastEditors: chenzhaozheng
 * @LastEditTime: 2019-12-13 09:24:19
 * @Description: file content
 */
import { ENV } from './../util/secrets';

export default {
    rabbitmq: {
        vhost: ENV.AMPQ_VHOST,
        port: ENV.AMPQ_PORT,
        username: ENV.AMPQ_USERNAME,
        password: ENV.AMPQ_PASSWORD,
        channelMax: ENV.AMPQ_CHANNELMAX
    }
};
