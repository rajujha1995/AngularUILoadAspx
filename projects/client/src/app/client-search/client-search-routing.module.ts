import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSearchComponent } from './client-search/client-search.component';

const routes: Routes = [
  { path:'', component: ClientSearchComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSearchRoutingModule { }
