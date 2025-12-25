import { Component } from '@angular/core';
import {CardProducts} from '../card-products/card-products';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-row',
  imports: [CardProducts, RouterLink],
  templateUrl: './product-row.html',
  styleUrl: './product-row.css'
})
export class ProductRow {
  product :any = {
    name : 'Product Name',
    price : '$99.99',
    image :  'assets/carvao.webp',
    id: 1,
    buttonName :'Add to Cart'
  }

  products:any = [this.product, this.product, this.product, this.product]
}
