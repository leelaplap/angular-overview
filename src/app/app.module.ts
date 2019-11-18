import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductComponent } from './products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
