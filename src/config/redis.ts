import { ENV } from './../util/secrets';

export default {
    redis: {
        port: ENV.REDIS_PORT,
        host: ENV.REDIS_HOST,
        family: ENV.REDIS_FAMILY || 4,
        password: ENV.REDIS_PASSWORD,
        db: ENV.REDIS_DB
    }
};
