import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { contactRoutes } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [contactRoutes, SharedModule]
})
export class ContactModule {}
