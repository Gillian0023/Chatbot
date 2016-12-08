import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { runTest } from '../../circuit';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ChatService } from './chatservice';

@Component({
  selector: 'app-root',
  templateUrl: './login/login.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent  {
  title = 'Contextual Collaboration';

  observable$: Observable<{}>;

  constructor(http: Http, private chatService:ChatService) {
    this.observable$ = http
      .get('/api/public/simple')
      .map((response: Response) => response.json());
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}





