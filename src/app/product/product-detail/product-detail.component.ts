import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./../../assets/product.json')
    .subscribe((product) => {
      this.products = product;      
      console.log(this.products);
    })
  }

}
