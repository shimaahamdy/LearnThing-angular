import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/mainLayout/mainLayout.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { OrderMakingComponent } from './Components/Order/order-making/order-making.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';

const routes: Routes = [
//our routes
//first match first
{path: '', component: MainLayoutComponent, children:[
  {path: '',redirectTo:'/Order',pathMatch:'full'},
  {path: 'Products',component: ProductListComponent},
  {path: 'Products/:pid',component: ProductDetailsComponent},
  {path: 'Order',component:OrderMakingComponent}
]},
{path:'**',component:NotfoundComponent}


];

@NgModule({

  //buitl in module
  //any one when import Approuting he can see router moule
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//module we create to be called in app-root 
export class AppRoutingModule { }
