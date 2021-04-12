import paths from 'path';
import { ENV } from './../util/secrets';

console.log('ENV', ENV);
const config = {
    log: {
        dir: paths.join(__dirname, '../logs/'),
        nolog: /\.(js|css|png|jpg|jpeg|ico|svg|gif)/,
        format: ':remote-addr :method :url :status :response-time ms :user-agent :content-length',
        replaceConsole: true,
        level: 'AUTO',
        console: false
    },
    static: {
        dir: paths.join(__dirname, '../public'),
        maxAge: 1000 * 60 * 60
    }
};

export default config;
