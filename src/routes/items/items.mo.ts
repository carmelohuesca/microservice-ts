// tslint:disable:no-console
export interface IItem {
    id: string;
    name: string;
}
export class Item implements IItem {
    public id: string;
    public name: string;
    constructor(name: string) { this.id = '1'; this.name = name; }
}
export class ItemsMo {
    private usersList: Item[] = [new Item('item1'), { id: '2', name: 'item2' }];
    public detail = (id: string) => this.usersList.find((user) => user.id === id);
    public list = (): IItem[] => this.usersList;
}
