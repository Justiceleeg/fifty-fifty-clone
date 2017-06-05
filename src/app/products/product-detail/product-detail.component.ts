import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms'

import { UtilityService } from '../../shared/utility.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @ViewChild('f') colorForm: NgForm | null;
  defaultColor = '';

  product: {};
  productId: string;
  randomProducts: object[];
  colors: null | string[];

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
    this.getRandomProducts()
  }

  onColorSelection(color: string){
    console.log(color)
  }

  getRandomProducts(){
    this.dataStorageService.getRandomProducts()
      .subscribe(
        (products: object[]) => {
          this.randomProducts = this.utilityService.limitRandomProducts(products,4)
        }
      )
  }

  getProductInfo(productId: string){
    this.dataStorageService.getProductById(productId)
      .subscribe(
        (product: object[]) => {
          let tempArr= []
          tempArr.push(...product)
          this.product=tempArr[0]
          this.product = this.utilityService.fixProduct(this.product)
          console.log(this.product)
          if (this.product['colors']){
            this.colors = Object.keys(this.product['colors'])
          }
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
