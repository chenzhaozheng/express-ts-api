/*
 * @Author: chenzhaozheng
 * @Date: 2019-07-31 18:15:51
 * @LastEditors  : chenzhaozheng
 * @LastEditTime : 2019-12-24 11:02:41
 * @Description: file content
 */
import express from 'express';
import path from 'path';
import fs from 'fs';

var router = express.Router();

const createRouter = (versionDir: any) => {
    fs.readdirSync(versionDir).forEach(function (file) {
        if (path.extname(file) === '.js' || path.extname(file) === '.ts') {
            let filePath = path.join(versionDir, file);

            require(filePath)(router);
        }
    });
    return router;
};

const v1 = createRouter(path.join(__dirname, '../routes/api'));

router.use('/api/', v1);


router.use((_req, res, next) => {
    // res.render('404');
    return next({
        code: 1002
    });
});
export default router;
