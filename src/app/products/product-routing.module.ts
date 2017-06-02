import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from '../auth/auth-guard.service';
import { ProductSpreadComponent } from './product-spread/product-spread.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const productsRoutes: Routes = [
  { path: ':typeId', component: ProductSpreadComponent},
  { path: 'products/:productId', component: ProductDetailComponent}
];

//   { path: '', component: RecipesComponent, children: [
//     { path: '', component: RecipeStartComponent },
//     { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] }, //Should be ordered from hardcoded to dynamic
//     { path: ':id', component: RecipeDetailComponent },
//     { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
//   ] },
// ];

@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
