/*
 * @Author: chenzhaozheng
 * @Date: 2019-07-31 17:00:50
 * @LastEditors  : chenzhaozheng
 * @LastEditTime : 2019-12-31 12:54:57
 * @Description: file content
 */
import errorHandler from 'errorhandler';

import app from './app';

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    console.log(
        '  App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
    );
    console.log('Press CTRL-C to stop\n');
});

server.setTimeout(3600 * 10);

export default server;
