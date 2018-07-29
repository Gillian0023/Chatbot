import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'necomponent',
  templateUrl: './necomponent.component.html',
  styleUrls: ['./necomponent.component.css'],
})
export class NewComponent  {
  title = 'Contextual Collaboration';

  observable$: Observable<{}>;

  constructor(http: Http,) {
    http
      .get('http://localhost:4300/api/circuit/')
      .toPromise()
      .then(()=>setTimeout(() =>{}, 5000));

      setInterval(function(){
         http
          .get('http://localhost:4300/api/circuit/hello')
          .toPromise()
          .then((response) => console.log(response.json())) 
         }, 3000);

      // setInterval(function(){ alert("Hello"); }, 3000);
  }

}
