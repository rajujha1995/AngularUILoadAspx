import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSearchRoutingModule } from './client-search-routing.module';
import { ClientSearchComponent } from './client-search/client-search.component';


@NgModule({
  declarations: [
    ClientSearchComponent
  ],
  imports: [
    CommonModule,
    ClientSearchRoutingModule
  ]
})
export class ClientSearchModule { }
