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
import {ActivatedRoute, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { SliderComponent } from './components/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ProductComponent } from './components/product/product.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { BoxComponent } from './components/box/box.component';


const routes = [
  {
    path: '',
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
  },
  {
    path: 'products/:productId',
    component: ProductComponent
  },
  {
    path: 'boxes',
    component:BoxesComponent
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
    ProductComponent,
    BoxesComponent,
    BoxComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    CarouselModule,
    FilterPipeModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
