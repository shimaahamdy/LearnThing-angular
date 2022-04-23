import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { EGPToUSDPipe } from './Pipes/egpto-usd.pipe';
import { ShoppingCartComponent } from './Components/Order/shopping-cart/shopping-cart.component';
import { OrderMakingComponent } from './Components/Order/order-making/order-making.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    SideMenuComponent,
    FooterComponent,
    ProductListComponent,
    LightBoxDirective,
    EGPToUSDPipe,
    ShoppingCartComponent,
    OrderMakingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
