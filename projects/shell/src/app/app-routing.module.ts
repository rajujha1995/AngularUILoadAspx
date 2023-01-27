import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

declare var require:any
const data = require("./appsettings/appsettings.json");
const webpackConfig = data.webpackConfig;

const routes: Routes = [
    {
      path:'sidenav',
      children: [
        {
          path:'paydownconsent',
          loadChildren: () => import('./loan-product/pay-down-consent/pay-down-consent.module').then(m => m.PayDownConsentModule)
        },
        {
          path:'resetreq',
          loadChildren: () => import('./loan-product/reset-req/reset-req.module').then(m => m.ResetReqModule)
        }
      ],
      //canActivate: [MsalGuard]
    },
    {
       path:'dashboard', 
       loadChildren: () => import('./shell-feature/shell-feature.module').then(m => m.ShellFeatureModule),
       //canActivate: [MsalGuard]
    },
    {
      path: 'client',
      loadChildren: () => loadRemoteModule(webpackConfig.client).then((m:any) => m.ClientSearchModule),
      //canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
