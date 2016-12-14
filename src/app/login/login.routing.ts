import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login.component';

const LoginRoutes: Route[] = [
    {
        path: 'login',
        component: LoginComponent
    }
];

export const LoginRoutingModule: ModuleWithProviders = RouterModule.forChild(LoginRoutes);
