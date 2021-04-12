const jwt = require('jsonwebtoken');

export default (req: any, res: any, next: any) => {
    // auth
    const authorization = req.headers.authorization;
    const userRes = jwt.decode(authorization);

    if (userRes === null) {
        return next({
            code: 1003,
            data: ''
        });
    }
    req.body.user = userRes;

    next();
};
