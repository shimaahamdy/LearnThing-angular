import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderMakingComponent } from './Components/Order/order-making/order-making.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';

const routes: Routes = [
//our routes
//first match first
{path: 'products',component: ProductListComponent}


];

@NgModule({

  //buitl in module
  //any one when import Approuting he can see router moule
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//module we create to be called in app-root 
export class AppRoutingModule { }
