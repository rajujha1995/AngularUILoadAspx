import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {
    //path: 'client', component: AppComponent
    loadChildren: () => import('./client-search/client-search.module').then(m => m.ClientSearchModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
