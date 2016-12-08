import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



const routes: Route[] = [
    {path:'', loadChildren:'app/login/login.module#LoginModule'},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
