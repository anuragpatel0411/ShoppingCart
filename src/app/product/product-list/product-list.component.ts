import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private http: HttpClient, private cart:  AppComponent) { }

  products: any;

  ngOnInit() {
    this.http.get('./../../assets/product.json').subscribe((product) => {
      this.products = product;
    })
  }

  addToCart(sku: number){
    let temp = sku;
    let quantity: number= 1;
    if(this.cart.cartProduct.indexOf(sku)== -1){
      this.cart.cartProduct.push(temp);
      this.cart.cartQuantity.push(quantity);
    }
    else{
      for(let i=0; i<this.cart.cartProduct.length; i++){
        if(i == this.cart.cartProduct.indexOf(sku)){
          this.cart.cartQuantity[i]++;
        }
      }
    }
  }

}
