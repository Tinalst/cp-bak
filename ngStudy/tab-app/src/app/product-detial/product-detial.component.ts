import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../public/model/product.model";

@Component({
  selector: 'app-product-detial',
  templateUrl: './product-detial.component.html',
  styleUrls: ['./product-detial.component.scss']
})
export class ProductDetialComponent implements OnInit {
    @Input() product: ProductModel;
    constructor() { }

    ngOnInit() {
    }

}
