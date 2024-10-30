import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent implements OnInit {
  public product: Product = new Product();
  public cart: Cart = new Cart(0);

  constructor() {}

  ngOnInit() {
    this.product = new Product('Boba Tea', 85, 'assets/images/bobaTea.png', true);
    this.cart = new Cart(0);
  }
  addToCart() {
    this.cart.quantity++;
  }
  removeFromCart() {
    if (this.cart.quantity > 0) {
      this.cart.quantity--;
    }
  }
}
