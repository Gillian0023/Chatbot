import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdIconModule, MdIconRegistry} from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdButtonModule } from '@angular2-material/button';
import { AlarmComponent } from './alarm.component';
import { AlarmRoutingModule} from './alarm.routing';


@NgModule({
    declarations: [
        AlarmComponent
    ],
    imports: [

        BrowserModule,
        AlarmRoutingModule,
        FormsModule,
        HttpModule,
        MdIconModule.forRoot(),
        MdInputModule.forRoot(),
        MdButtonModule.forRoot(),

    ],
    providers: [
        MdIconRegistry,
    ],
    bootstrap: [
        AlarmComponent,
    ]
})
export class AlarmModule { }