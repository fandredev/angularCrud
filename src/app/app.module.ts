import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { NgxBootstrapModule } from './ngx-bootstrap.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductReadComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [{
    provide: LOCALE_ID, // pt-br linguagem
    useValue: 'pt-br'
  }], // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
