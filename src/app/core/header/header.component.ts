import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuToggle: boolean= true;

  constructor() { }

  ngOnInit() {
  }

  public onMenuToggle() {
    this.menuToggle= !this.menuToggle;
  }

}
