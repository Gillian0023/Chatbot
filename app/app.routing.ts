import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NewComponent } from './newcomponent/necomponent.component';
import { AppComponent } from './app.component';



const routes: Route[] = [

  { path: '', component: AppComponent },
  { path: 'newcomponent', component: NewComponent },
    {path:'', loadChildren:'app/login/login.module#LoginModule'},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
