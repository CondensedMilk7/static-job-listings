import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { FilterComponent } from './filter/filter.component';
import { Filterdirective } from './filter.directive';

@NgModule({
  declarations: [
    AppComponent,
    Filterdirective,
    ListingComponent,
    FilterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
