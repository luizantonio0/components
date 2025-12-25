import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card-products',
  imports: [],
  templateUrl: './card-products.html',
  styleUrl: './card-products.css'
})
export class CardProducts {
  @Input () productPrice!: string
  @Input () productImage!: string
  @Input () productId!: number
  @Input () buttonName!:string
  @Input () productName!: string
}
