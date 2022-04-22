import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  prodList:Iproduct[];
  catList:ICategory[];
  selecedCategoryid:number = 0;
  constructor() { 
    this.prodList = [
      {id:100,name:'C++',price:100,quantity:0,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:1},
      {id:200,name:'Java',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:2},
      {id:150,name:'c#',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:4},
      {id:300,name:'.Net',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:1},
      {id:500,name:'VS',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:2},
      {id:600,name:'Git',price:100,quantity:2,imgURL:'https://e3arabi.com/wp-content/uploads/2021/01/6038586442907648-1.png',categoryID:1}

    ];
    this.catList = [
      {id:1,name:"oop"},
      {id:2,name:'.net'},
      {id:3,name:'c#'}
    ];
  }
 
  ngOnInit(): void {
  }

  trackfun(index:number, prd:Iproduct):number
  {
    return prd.id;
  }

}
