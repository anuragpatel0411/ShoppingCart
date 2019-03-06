import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private cart: AppComponent) {}
 
  thanks: boolean= true;
  ngOnInit() {
  }

  change(){
    this.thanks= false;
  }

  clearCart(){
    this.cart.cartProduct= [];
    this.cart.cartQuantity= [];

  }

}
