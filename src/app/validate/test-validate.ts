/*
 * @Author: chenzhaozheng
 * @Date: 2019-08-07 17:16:56
 * @LastEditors: chenzhaozheng
 * @LastEditTime: 2019-08-07 17:16:56
 * @Description: file content
 */
import { check, checkSchema } from 'express-validator';
export default [
    check('email')
        .isEmail().withMessage('Invalid email format'),
    checkSchema({
        password: {
            isLength: {
                errorMessage: 'Password should be at least 7 chars long',
                options: { min: 7 }
            }
        },
        firstName: {
            isUppercase: {
                negated: true
            }
        }
    })
];
