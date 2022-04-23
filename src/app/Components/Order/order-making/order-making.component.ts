import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';
import { ICartViewModel } from 'src/app/ViewModels/IcartViewModel';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-making',
  templateUrl: './order-making.component.html',
  styleUrls: ['./order-making.component.css']
})
export class OrderMakingComponent implements OnInit {

  selecedCategoryid:number = 0;
  sendOrderTotalPrice:number = 0;
  orderItems:ICartViewModel[]=[];
  totalPrice:number=0;
  catList:ICategory[]=[];
  selectedItem:ICartViewModel[]=[];

  // viewchild: used to ref any element in view that has template variable
  //  @ViewChild(ProductListComponent) prdLlist!: ProductListComponent; //that will not be ever with null or undefine value when it used
   //above we can see  object of ts class of prdlist

   //now we don`t need view child as it is sperate service
  constructor(private staProdServ:StaticProductsService) { 
    this.catList = [
      {id:1,name:"oop"},
      {id:2,name:'.net'},
      {id:3,name:'c#'}
    ];
  }

  ngOnInit(): void {
  }

  bought(item:ICartViewModel)
  {
    this.orderItems.push(item);
    this.updateTotalPrice();
    
  }
  changeQuantity(event:any,item:ICartViewModel)
  {
    let quan:number = parseInt(event.target.value)
    let itemQuantity = this.staProdServ.getQuantity(item.id);
    if(itemQuantity && itemQuantity>=quan)
    {
    if( quan>item.quantity)
    {
      
       let diff:number=0;
       diff = quan-item.quantity;
     
       

    }
    else if(quan<item.quantity)
    {
      let diff:number=0;
       diff = item.quantity-quan;

    }
    item.totalPrice=quan*item.unitPrice;
    item.quantity=quan;

    this.updateTotalPrice();
  }
    
  }
  private updateTotalPrice()
  {
    this.totalPrice=0;
    for(let item of this.orderItems)
    this.totalPrice+=item.totalPrice;
  }
  getProdPrice(item:ICartViewModel)
  {
    return item.totalPrice;
  }
  getTotalPrice()
  {
    
    return this.totalPrice;
  }
  complete()
  {
    this.staProdServ.completeOrder(this.orderItems);
  }
  getQuantity(item:ICartViewModel)
  {
    return this.staProdServ.getQuantity(item.id);

  }
 

}
