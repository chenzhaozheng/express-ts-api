import config from '../config/rabbitmq';

const rabbitmqConf = config.rabbitmq;
const conf = {
    hostname: rabbitmqConf.vhost,
    username: rabbitmqConf.username,
    password: rabbitmqConf.password,
    port:  rabbitmqConf.port,
    channelMax: rabbitmqConf.channelMax,
    frameMax: 100000,
    heartbeat: 20,
    clientProperties: {
        connection_name: 'your host name'
    }

};

const open = require('amqplib').connect(conf);

export default open;
