import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  storeInfo: Store
  constructor() { 
    this.storeInfo = new Store("Udacity","https://gfx4arab.com/wp-content/uploads/2020/06/udacity.svg",["US","UK","EG"]);
    
  }

  ngOnInit(): void {
  }

}
