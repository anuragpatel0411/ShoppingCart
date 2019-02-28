import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

  constructor(private http: HttpClient){}

  product: any;

  ngOnInit() {
    this.http.get('./../../assets/mainSlider.json').subscribe((response) => {
      this.product = response;
      console.log(this.product);
    })
  }

  
}
