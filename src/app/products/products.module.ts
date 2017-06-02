import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSpreadComponent } from './product-spread/product-spread.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductSpreadComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
})
export class ProductsModule { }
