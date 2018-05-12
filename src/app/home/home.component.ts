import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CurrencyService, ProductService, UserService } from '../shared';

import { Currency, Product } from '../shared/';


@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  cart: Product[] = [];
  products: Product[] = [];
  currency: Currency[];
  productIds: any[];

  constructor(
    private router: Router,
    private currencyService: CurrencyService,
    private productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
      }
    );

    // Product IDs for Walmart Api
    // this.productIds = ['19336123', '19336124', '19336125'];

    // Fake Products (comment this code)
   //  this.products.push(this.productService.getProducts());

    // Real Products (uncomment this code)
     this.productService.getProductsFromApi().subscribe(data => {
     this.products.push(data);
     });

    this.currency = this.currencyService.getCurrencyList();
  }

  // logout
  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  // Convert Currency
  convertCurrency(product, i) {
    console.log(product.currency, product.price, product.targetCurrency);

    this.currencyService.getConvertedAmoutFromApi(product.currency, product.salePrice, product.targetCurrency).subscribe(data => {

      console.log(data);
      // this.products[i].convertedPrice = data.sourceAmount;                   // Use this for fake service
      this.products[i].convertedPrice = (data as any).destinationAmount;        // Use this for real service

      console.log(this.products[i].convertedPrice);

    })
  }

  // Add Product to Cart
  addToCart(product) {
    console.log('Card updated with....' + product);
    console.log(product);

    this.cart.push(product);
    console.log(this.cart);
  }
}
