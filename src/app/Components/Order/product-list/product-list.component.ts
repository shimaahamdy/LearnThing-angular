import { BuiltinType } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';
import { ICartViewModel } from 'src/app/ViewModels/IcartViewModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit ,OnChanges{

  // prodList:Iproduct[];
  prodFilter:Iproduct[]=[];
  
  totalPrice:number = 0;
  @Input() sendCategoryid:number = 0;

  //define Event
  @Output() addToCartItem:EventEmitter<ICartViewModel>;
  
  constructor(private staticProdServ : StaticProductsService,
    private router:Router) { 
    // this.prodList = [
    //   {id:100,name:'C++',price:100,quantity:0,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:1},
    //   {id:200,name:'Java',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:2},
    //   {id:150,name:'c#',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:4},
    //   {id:300,name:'.Net',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:1},
    //   {id:500,name:'VS',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:2},
    //   {id:600,name:'Git',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:1}

    // ];

    this.addToCartItem =  new EventEmitter<ICartViewModel>();
    
  }
  ngOnChanges(): void {
    this.filterProducts();

    
  }
 
  ngOnInit(): void {
    this.prodFilter = this.staticProdServ.getAllProducts();
    
  }

  trackfun(index:number, prd:Iproduct):number
  {
    return prd.id;
  }

  private filterProducts()
  {
    this.prodFilter = this.staticProdServ.getProductsByCatID(this.sendCategoryid);
  }

  addToCart(item:Iproduct)
  {
   let cartModel:ICartViewModel = 
    {id:item.id,name:item.name,quantity:1,unitPrice:item.price,imgURL:item.imgURL,totalPrice:1*item.price}
    console.log(cartModel);
   this.addToCartItem.emit(cartModel);
   
  }

  goToDetails(prdID:number)
  {
    this.router.navigate(['/Products',prdID]);
  }



}
