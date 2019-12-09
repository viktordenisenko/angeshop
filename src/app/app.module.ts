import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { SliderComponent } from './components/slider/slider.component';


const routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    SliderComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyAJsSz-rnIyisDmreU7O_fGHxNP6DjaZY0'
    }),
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
