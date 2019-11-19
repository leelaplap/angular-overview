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
      name: 'Dell-1',
      price: 3000,
      image: 'assets/images/product-1.jpg'
    },
    {
      name: 'asus-2',
      price: 3000,
      image: 'assets/images/product-2.jpg'
    },
    {
      name: 'hp-3',
      price: 3000,
      image: 'assets/images/product-3.jpg'
    },
  ];
  widthImage = 100;
  showImage = true;
  product = this.products;

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    this.showImage = !this.showImage;
  }

  delete(id) {
    if (confirm('Are you sure')) {
      this.products.splice(id, 1);
    }
    alert('delete success');
  }

  search(event) {
    const data = event.target.value;
    if (data) {
      this.products = this.products.filter(
        product => product.name.toLowerCase().indexOf(data) !== -1
      );
    } else {
      this.products = this.product;
    }
  }
}
