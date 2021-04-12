/*
 * @Author: chenzhaozheng
 * @Date: 2019-11-27 14:49:40
 * @LastEditors  : chenzhaozheng
 * @LastEditTime : 2020-01-10 12:04:52
 * @Description: file content
 */
import { Request, Response, NextFunction } from 'express';
import logger from '../../../util/logger';
import User from '../../models/postgres-sql/user';

/**
 * 用户信息
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const show = async (req: Request, res: Response, next: NextFunction) => {
    let { user_id } = req.query;
    const whereData = {
        user_id
    };
    const result = await User().findOne({
        where: whereData,
        raw: true
    });

    return next({
        code: 0,
        data: result
    });
};

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
export const testUsers = async (req: Request, res: Response, next: NextFunction) => {
    const data = [{
        user_id: 517340,
        name: '小亮的',
        muid: '0CED8A13-4606-49AF-B683-EB27E344E5DF'
    }, {
        user_id: 112029222,
        name: 'xxxx',
        muid: '00000000-1fb5-a9b0-0000-0000033f2209559820a8d8d95d74'
    }, {
        user_id: 41101186,
        muid: '2b16a42a-fa6e-4a3e-950b-8cfbf4bb843a',
        name: 'xxxx'
    }, {
        user_id: 44582775,
        name: 'xxxx',
        muid: '3eeae1db-cfa8-4015-8d8a-b1e83be961b3'
    }, {
        user_id: 45181556,
        name: 'xxxx',
        muid: '776fff8f-d2a6-44b9-83de-adec80bbe999'
    }, {
        user_id: 43864151,
        name: 'xxxx',
        muid: 'a7d0c345-9f53-446e-9fcf-405f5a90813a'
    }];

    return next({
        code: 0,
        data
    });
};

