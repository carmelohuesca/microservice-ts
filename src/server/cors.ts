export class Cors {
    public static init(req: any, res: any, next: any) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    }
}
