/*
 * @Author: chenzhaozheng
 * @Date: 2019-07-31 17:42:01
 * @LastEditors: chenzhaozheng
 * @LastEditTime: 2019-11-22 18:28:07
 * @Description: file content
 */

import { logger } from '../../util/logger';
import { Request, Response, NextFunction } from 'express';
import statusObjRead from './defines';
import _ from 'lodash';

const finallyResp = function (options: any) {
    options = options || {};
    let defaultFormat = options.format || 'JSONString';
    /**
   * result json或捕获的异常
   * result.code 状态码
   * result.msg  返回消息体，提示方面的
   * result.meta  返回的额外数据
   * result.view 返回的视图
   * result.data 返回的数据
   */

    return function finallyResp(result: any, req: Request, res: Response, next: NextFunction) {
        if (_.isError(result)) {
            result = {
                status: 'interalError',
                code: 1001,
                err: result,
                msg: result.message
            };
        }
        let msg = result.msg;
        let meta = result.meta || {};
        let data = result.data || {};
        let view: any = null;

        if (!(req.url.indexOf('/api') > -1)) {
            view = result.view || statusObjRead[result.code].view;
        }
        let page = result.page;
        let err = result.err;
        let desc = result.desc || statusObjRead[result.code].desc;

        res.status(statusObjRead[result.code].httpCode);

        // 错误回调方法
        function handleError(err: any) {
            logger.error('\nError begin', '\n', err, '\n', 'Error End');
            if (page || view) {
                // res.render("500", {err : err});
                console.log('err', err);
                res.json({ code: 500, desc: '服务错误', msg: '' });
            }
        }

        if (view) {
            if (err) {
                handleError(err);
            } else {
                res.render(view, (err: any, html: any) => {
                    if (err) {
                        handleError(err);
                    } else {
                        res.send(html);
                    }
                });
            }
        } else if (page) {
            res.send(page);
        } else {
            if (err) {
                handleError(err);
            }
            let retObj = {
                code: result.code,
                desc: desc,
                msg: msg,
                data: '',
                meta: ''
            };

            if (typeof meta !== 'undefined' && Object.keys(meta).length !== 0) {
                retObj.meta = meta;
            } else {
                delete retObj.meta;
            }

            if (typeof data !== 'undefined' && Object.keys(data).length !== 0) {
                retObj.data = data;
            } else {
                delete retObj.data;
            }

            if (typeof msg !== 'undefined') {
                retObj.msg = msg;
            } else {
                delete retObj.msg;
            }

            let format = defaultFormat;

            if (format === 'JSONString') {
                res.send(JSON.stringify(retObj));
            } else {
                res.json(retObj);
            }
        }
    };
};

export { finallyResp };
