/**
 * @author dengyun
 *
 * @Date 2018/7/10
 */
const statusObj: any = {
    0: { succeed: true, httpCode: 200, status: 'success', desc: '成功' },
    1001: { succeed: true, httpCode: 500, status: 'interalError', desc: '内部错误', view: '500' },
    1002: { succeed: true, httpCode: 404, status: 'notFound', desc: '接口不存在', view: '404' },
    1003: { succeed: true, httpCode: 403, status: 'noAuth', desc: '没有权限' },
    1004: { succeed: true, httpCode: 400, status: 'paramError', desc: '参数错误或请求错误' },
    1005: { succeed: true, httpCode: 200, status: 'addressError', desc: '地址有误' }
};

export default statusObj;
// module.exports = statusObjRead;
