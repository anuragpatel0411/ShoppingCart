import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  sku: any;

  products: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    route.params.subscribe(params => { this.sku = params['SKU'];});
   }

  ngOnInit() {
    this.http.get('./../../assets/product.json')
    .subscribe((product) => {
      this.products = product;      
      console.log(this.products);
    })
  }

}
