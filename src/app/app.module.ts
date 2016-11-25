import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MdIconModule, MdIconRegistry} from '@angular2-material/icon'; 
import { MdInputModule } from '@angular2-material/input'; 
import { MdButtonModule } from '@angular2-material/button';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { feedReducer } from './store/feed/feed.reducer';
import { FeedEffects } from './store/feed/feed.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    StoreModule.provideStore({
      feed: feedReducer
    }),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    EffectsModule.run(FeedEffects),
    StoreLogMonitorModule,
    HttpModule,
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    MdButtonModule.forRoot(),
  ],
  providers: [
    MdIconRegistry,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
