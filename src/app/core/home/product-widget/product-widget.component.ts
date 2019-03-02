import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent implements OnInit {

  products: any;
  constructor(private http: HttpClient) { }

  @Input() public widgetTitle: string;

  ngOnInit() {
    this.http.get('./../../../assets/product.json').subscribe((response) => {
      this.products = response;
    })
}

}
