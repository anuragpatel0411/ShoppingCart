import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OffcanvasService } from './core/shared/offcanvas.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavOffCanvasComponent } from './core/nav-off-canvas/nav-off-canvas.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { ContentComponent } from './core/content/content.component';
import { ToolbarCartComponent } from './core/header/toolbar-cart/toolbar-cart.component';
import { NavigationMainComponent } from './core/header/navigation-main/navigation-main.component';
import { HomeComponent } from './core/home/home.component';
import { MainSliderComponent } from './core/home/main-slider/main-slider.component';
import { ProductWidgetComponent } from './core/home/product-widget/product-widget.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavOffCanvasComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    ToolbarCartComponent,
    NavigationMainComponent,
    HomeComponent,
    MainSliderComponent,
    ProductWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    OffcanvasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
