import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';

import { UtilityService } from '../../shared/utility.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: {};
  productId: string;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private utilityService: UtilityService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.productId = params['productId'];
        this.product = [];
        this.getProductInfo(this.productId)
      })
  }

  getProductInfo(productId: string){
    this.dataStorageService.getProductById(productId)
      .subscribe(
        (product: any[]) => {
          let tempArr= []
          tempArr.push(...product)
          this.product=tempArr[0]
          this.product = this.utilityService.fixProduct(this.product)
          console.log(this.product)
        },(error) => console.log(error)
      )
  }

  logStuff(){
    console.log(this.product)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
