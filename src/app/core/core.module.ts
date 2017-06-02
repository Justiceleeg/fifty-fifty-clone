import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ParallaxViewDirective } from './home/parallax-view/parallax-view.directive';
import { UtilityService } from '../shared/utility.service';
import { DataStorageService } from '../shared/data-storage.service';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ParallaxViewDirective
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    UtilityService,
    DataStorageService
  ]
})
export class CoreModule {}
