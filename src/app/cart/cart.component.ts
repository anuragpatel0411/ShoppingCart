import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient,private cart: AppComponent) { }
  
  products: any;
  total: number= 0;
  cartItem: number[]= this.cart.cartProduct;
  quantity: number[]= this.cart.cartQuantity;

  ngOnInit() {
    this.http.get('./../../../assets/product.json').subscribe((response) => {
      this.products = response;
    })
    
    // for(let j=0;j< this.cartItem.length; j++){
    //   for(let k=0;k< this.products.length; k++){
    //     if(this.cartItem[j] == this.products[k].productSKU){
    //       this.total += (this.quantity[j] * this.products[k].productPrice);
    //     }
    //   }      
    // }
  }

  increaseQuantity(i: number){
    this.quantity[i]++;
  }

  decreaseQuantity(i: number){
    if(this.quantity[i] > 1)
      this.quantity[i]--;
  }

  onRemoveItem(sku: number){
      this.cartItem = this.cartItem.filter(cartItem => cartItem !== sku);
  }

  onClearCart(){
    this.cartItem=this.cart.cartProduct=[];
  }
}
