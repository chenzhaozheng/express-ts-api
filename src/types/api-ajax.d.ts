/*
 * @Author: chenzhaozheng
 * @Date: 2019-08-06 14:46:13
 * @LastEditors: chenzhaozheng
 * @LastEditTime: 2019-08-20 14:12:40
 * @Description: 暂未使用
 */
declare namespace Ajax {
    export interface AixosResponse {
        data: AjaxResponse
    }

    // 请求接口数据
    export interface AjaxResponse {
        code: number,
        data: object | null | Array<any>,
        msg: string
    }
}