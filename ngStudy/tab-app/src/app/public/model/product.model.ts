export class ProductModel {
    _id: string;
    isActive: boolean;
    price: string;
    picture: string;
    name: string;
    description: string;
    tags: string[];

    constructor(obj?){
        this._id = obj && obj._id || '';
        this.isActive = obj && obj.isActive || '';
        this.price = obj && obj.price || '';
        this.picture = obj && obj.picture || '';
        this.name = obj && obj.name || '';
        this.description = obj && obj.description || '';
        this.tags = obj && obj.tags || [];
    }

}
