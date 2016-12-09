import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { runTest } from '../../circuit';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './login/login.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'Contextual Collaboration';

  observable$: Observable<{}>;

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}





