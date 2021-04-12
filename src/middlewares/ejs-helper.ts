/**
 * @author dengyun@henhaoji.com
 *
 * @Date 2017/3/7
 */

function helper(locals: any) {
    locals.dateFormat = function (millSeconds: any, fmt: any = 'yyyy-MM-dd hh:mm') {
        if (!millSeconds) {
            return '';
        }
        if (typeof millSeconds === 'string') {
            // eslint-disable-next-line radix
            millSeconds = Number.parseInt(millSeconds);
        }
        let date = new Date(millSeconds);
        let o: any = {
            'M+' : date.getMonth() + 1,
            'd+' : date.getDate(),
            'h+' : date.getHours(),
            'm+' : date.getMinutes(),
            's+' : date.getSeconds(),
            'q+' : Math.floor((date.getMonth() + 3) / 3),
            S : date.getMilliseconds()
        };

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length));
            }
        }
        return fmt;
    };
}

export default function () {
    return function (req: any, res: any, next: any) {
        // 提供EJS页面方法
        helper(res.locals);
        next();
    };
}
