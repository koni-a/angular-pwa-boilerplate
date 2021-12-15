import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { MyModalComponent } from './modal/modal.component';
import { HomeComponent } from './page/home.component';
import { ItemsComponent } from './page/items/items.component';
import { DetailsComponent } from './page/details/details.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MyModalComponent,
    ItemsComponent,
    DetailsComponent
  ],
  imports: [SharedModule,  HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
