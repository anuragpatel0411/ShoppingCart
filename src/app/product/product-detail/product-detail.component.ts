import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  sku: any;
  a: number[]=[0];

  products: any;
  constructor(private http: HttpClient, private route: ActivatedRoute,private cart: AppComponent) {
    route.params.subscribe(params => { this.sku = params['SKU'];});
   }

  ngOnInit() {
    this.http.get('./../../assets/product.json')
    .subscribe((product) => {
      this.products = product; 
    })
  }

  addToCart(){
    let temp = this.sku;
    let quantity: number= 1;
    if(this.cart.cartProduct.indexOf(this.sku)== -1){
      this.cart.cartProduct.push(temp);
      this.cart.cartQuantity.push(quantity);
    }
    else{
      for(let i=0; i<this.cart.cartProduct.length; i++){
        if(i == this.cart.cartProduct.indexOf(this.sku)){
          this.cart.cartQuantity[i]++;
        }
      }
    }
  }

}
