import {Component, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [
    {
      name: 'product-1',
      price: 3000,
      image: 'assets/images/product-1.jpg'
    },
    {
      name: 'product-2',
      price: 3000,
      image: 'assets/images/product-2.jpg'
    },
    {
      name: 'product-3',
      price: 3000,
      image: 'assets/images/product-3.jpg'
    },
  ];
  widthImage = 100;
  showImage = true;

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    this.showImage = !this.showImage;
  }
}
