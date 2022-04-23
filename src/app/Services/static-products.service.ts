import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { ICartViewModel } from '../ViewModels/IcartViewModel';

@Injectable({

  //singleton design pattern 
  //only one object is created and used in all project elements
  providedIn: 'root'
})
export class StaticProductsService {

  private prodList:Iproduct[];
  constructor() { 
    this.prodList = [
      {id:100,name:'C++',price:100,quantity:0,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:1},
      {id:200,name:'Java',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:2},
      {id:150,name:'c#',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:4},
      {id:300,name:'.Net',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:1},
      {id:500,name:'VS',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:2},
      {id:600,name:'Git',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:1}

    ];
  }

  getAllProducts():Iproduct[]
  {
    return this.prodList;
  }

  getProductsByCatID(CID:number):Iproduct[]
  {
    if(CID==0) return this.prodList;
    else return this.prodList.filter(prd=>prd.categoryID==CID);
  }

  getProductByID(Id:number):Iproduct|null
  {
    let product = this.prodList.find(prd=>prd.id==Id);
    return product?product:null;
  }

  getQuantity(id:number):number | null 
  {
    let product = this.getProductByID(id);
    if(product==null)return null;
    else return product.quantity;
    
  }
  completeOrder(items:ICartViewModel[])
  {
    for(let item of items)
    {
      
      this.buyProduct(item.id,item.quantity);
    }
  }

  private buyProduct(id:number,quantity:number)
  {
    let product = this.getProductByID(id);
    if(product && product.quantity>=quantity)
    product.quantity-=quantity
  }

  

  
}
