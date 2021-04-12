import config from '../config/redis';

var Redis = require('ioredis');

const redisConf = config.redis;
const conf = {
    port: redisConf.port,
    host: redisConf.host,
    family: redisConf.family,
    password: redisConf.password,
    db: redisConf.db
};

var redis = new Redis(conf);

export default redis;
