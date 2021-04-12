import { Request, Response, NextFunction } from 'express';

/**
 *
 * @param req
 * @param res
 * @param next
 */
export const index = async (req: Request, res: Response, next: NextFunction) => {
    return next({
        code: 0,
        data: ''
    });
};
