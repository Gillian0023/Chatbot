import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AlarmComponent } from './alarm.component';

const AlarmRoutes: Route[] = [
    {
        path: 'alarm',
        component: AlarmComponent,
        childpath:'',
    }
];

export const AlarmRoutingModule: ModuleWithProviders = RouterModule.forChild(AlarmRoutes);
