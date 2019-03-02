import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-off-canvas',
  templateUrl: './nav-off-canvas.component.html',
  styleUrls: ['./nav-off-canvas.component.scss']
})
export class NavOffCanvasComponent implements OnInit {

  user: boolean= false;
  useremail: string= null;

  constructor() { }

  @Input() view:boolean=true;


  ngOnInit() {
    if(localStorage.getItem('isLogin')!= null){
      this.user=true;
      this.useremail= localStorage.getItem('isLogin');
    }
  }
    
  click(){
    this.view= !this.view;

  }

  logOut(){
    localStorage.removeItem('isLogin');
    location.reload();
  }
  
}
