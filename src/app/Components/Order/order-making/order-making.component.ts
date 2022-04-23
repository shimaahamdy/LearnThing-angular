import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ICartViewModel } from 'src/app/ViewModels/IcartViewModel';

@Component({
  selector: 'app-order-making',
  templateUrl: './order-making.component.html',
  styleUrls: ['./order-making.component.css']
})
export class OrderMakingComponent implements OnInit {

  catList:ICategory[];
  selecedCategoryid:number = 0;
  sendOrderTotalPrice:number = 0;
  orderItems:ICartViewModel[]=[];

  constructor() { 
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
    console.log(item);
    this.orderItems.push(item);
  }
 

}
