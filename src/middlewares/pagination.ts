export default (req: any, res: any, next: any) => {
    // 分页检测
    let page = 1, limit = 10;

    if (typeof req.query.page !== 'undefined') {
        page = req.query.page;
    }
    if (typeof req.query.limit !== 'undefined') {
        limit = req.query.limit;
    }
    req.query.page = page;
    req.query.limit = limit;
    next();
};
