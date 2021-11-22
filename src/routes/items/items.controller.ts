import { ItemsMo } from './items.mo';

const mo = new ItemsMo();
export class ItemsController {
    public static list = (req: any, res: any, next: any) => res.json(mo.list());
    public static detail = (req: any, res: any, next: any) => res.json(mo.detail(req.params.id));
}
