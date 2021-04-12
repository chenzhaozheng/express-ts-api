/*
 * @Author: chenzhaozheng
 * @Date: 2019-07-31 17:42:01
 * @LastEditors: chenzhaozheng
 * @LastEditTime: 2019-11-22 16:40:02
 * @Description: file content
 * @BeforeAuthor dengyun 2018/7/10
 */

function catchError(controller: any) {
    return function (req: any, res: any, next: any) {
        let func = controller.apply(this, arguments);

        if (func && typeof func.then === 'function') {
            return func.catch((err: any) => {
                if (typeof err === 'string') {
                    if (err.indexOf('参数') > -1) {
                        return next({ code: 1004, msg: err });
                    }
                    return next({ code: 1001, msg: err });

                }
                return next(err);
            });
        }
        return func;
    };
}

export default function (params: any) {
    if (typeof params === 'function') {
        return catchError(params);
    }
    if (typeof params === 'object') {
        for (let key in params) {
            if (typeof params[key] === 'function') {
                params[key] = catchError(params[key]);
            }
        }
    }
    return params;
}
