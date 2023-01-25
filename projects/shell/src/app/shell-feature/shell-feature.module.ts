import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellFeatureRoutingModule } from './shell-feature-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ShellFeatureRoutingModule
  ]
})
export class ShellFeatureModule { }
