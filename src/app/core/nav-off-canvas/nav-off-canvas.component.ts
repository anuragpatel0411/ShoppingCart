import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-off-canvas',
  templateUrl: './nav-off-canvas.component.html',
  styleUrls: ['./nav-off-canvas.component.scss']
})
export class NavOffCanvasComponent implements OnInit {

  constructor() { }
@Input() view:boolean=true;


  ngOnInit() {console.log(this.view);
  }
  
}
