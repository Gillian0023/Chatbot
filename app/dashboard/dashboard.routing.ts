import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

const DashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(DashboardRoutes);
