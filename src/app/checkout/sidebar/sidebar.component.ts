import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private http: HttpClient,private cart: AppComponent) { }

  products: any=[];
  cartItem: number[]= this.cart.cartProduct;
  quantity: number[]= this.cart.cartQuantity;
  shipping: number= 50;

  ngOnInit() {
    this.http.get('./../../../assets/product.json').subscribe((response) => {
      this.products = response;
    });
  }

  calcTotal(){
    let total = 0;
    for(let j=0;j< this.cartItem.length && j< this.quantity.length; j++){
      for(let k=0;k< this.products.length; k++){
        if(this.cartItem[j] == this.products[k].productSKU){
          total += (this.quantity[j] * this.products[k].productPrice);
        }
      }      
    }
    return total;
  }
}
