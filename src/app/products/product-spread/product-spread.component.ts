import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';


import { DataStorageService } from '../../shared/data-storage.service';


@Component({
  selector: 'app-product-spread',
  templateUrl: './product-spread.component.html',
  styleUrls: ['./product-spread.component.sass']
})
export class ProductSpreadComponent implements OnInit {
  products: any = [];
  type: string;
  typeId: string;
  bigImg: string;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.typeId = params['typeId'];
        this.products = [];
        this.getProductSpread(this.typeId)
      })
  }

  getProductSpread(typeId: string){
    this.dataStorageService.getProductSpread(typeId)
      .subscribe(
        (products: any[]) => {
          this.products.push(...products)
          this.type = this.products[0].type
          if (typeId === "1"){
            this.bigImg = 'https://cdn.shopify.com/s/files/1/1699/2423/files/Assorted_Bottles_six.jpg?7512745540055226971'
          }
        },(error) => console.log(error)
      )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
