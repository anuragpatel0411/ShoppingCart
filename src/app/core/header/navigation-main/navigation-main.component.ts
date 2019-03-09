import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-main',
  templateUrl: './navigation-main.component.html',
  styleUrls: ['./navigation-main.component.scss']
})
export class NavigationMainComponent implements OnInit {

  constructor() { }

  user: boolean= false;
  useremail: string= null;
  
  ngOnInit() {
    if(localStorage.getItem('isLogin')!= null){
    this.user=true;
    this.useremail= localStorage.getItem('isLogin');
    }
  }

}
