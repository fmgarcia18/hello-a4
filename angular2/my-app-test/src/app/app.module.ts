import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductsComponent } from './products.component';
import { AdvertisementComponent } from './advertisement.component';
import { RatingComponent } from './rating.component';


@NgModule({
  declarations: [
    AppComponent, ProductsComponent, AdvertisementComponent, RatingComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
