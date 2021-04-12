/*
 * @Author: chenzhaozheng
 * @Date: 2019-08-01 17:41:56
 * @LastEditors  : chenzhaozheng
 * @LastEditTime : 2020-01-22 09:35:43
 * @Description: file content
 */

import * as UsersController from '../../app/controllers/api/users';
import * as IndexController from '../../app/controllers/api/index';
// import catchError from '../../middlewares/error-handle';
// catchError(IndexController);
import paginationMiddlewares from '../../middlewares/pagination';
import authHandleMiddlewares from '../../middlewares/auth-handle';

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// 路由地址映射
export = (router: any) => {
    // 分页的初始化
    router.use(paginationMiddlewares);
    router.all('*', function (req: any, res: any, next: any) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
        res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
        res.header('X-Powered-By', ' 3.2.1');
        next();
    });
    router.get('/', IndexController.index);
    router.get('/test-users', UsersController.testUsers);
    router.get('/users', authHandleMiddlewares, UsersController.show);
};
