import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prdID:number=0;
  product:Iproduct | null = null;
  constructor(private activatedRoute:ActivatedRoute,
    private prodServ:StaticProductsService,
    private loaction:Location) { }

  ngOnInit(): void {
    //get parameter in query id
    this.prdID = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    // console.log(this.prdID);
    this.product = this.prodServ.getProductByID(this.prdID);
  }

  goBack()
  {
    this.loaction.back();
  }


}
