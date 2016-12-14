import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ChatService } from './chatservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent  {
  title = 'Contextual Collaboration';

  observable$: Observable<{}>;

  constructor(http: Http, private chatService:ChatService) {
    /*
    this.observable$ = http
      .get('/api/circuit')
      .map((response: Response) => response.json())
      */
       
      setInterval(function(){
         http
          .get('http://localhost:4300/api/circuit/hello')
          .toPromise()
          .then((response) => console.log(response.json())) 
         }, 3000);

      // setInterval(function(){ alert("Hello"); }, 3000);
  }

}
