import { Component, OnInit } from '@angular/core';
import { OffcanvasService } from '../shared/offcanvas.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{

  constructor(private offcanvasService: OffcanvasService) { }

  ngMenuClose(e: Event) {
    this.offcanvasService.closeOffcanvasNavigation();
  }

}
