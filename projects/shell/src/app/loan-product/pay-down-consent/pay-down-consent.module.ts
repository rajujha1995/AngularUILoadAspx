import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { PayDownConsentComponent } from './pay-down-consent.component';

const routes : Routes = [
  {
    path : '',
    component : PayDownConsentComponent 
  }
];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule],
})
export class PayDownConsentModule { }
