export class ProductModel {
    type: string;
    price: string;
    items: String[];
    constructor(obj?) {
        this.type = obj && obj['type'] || '';
        this.items = obj && obj['items'] || [];
        this.price = obj && obj['price'] || '';
    }

}
