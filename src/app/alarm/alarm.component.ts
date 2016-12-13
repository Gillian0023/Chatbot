import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Component({
    selector: 'app-alarm',
    templateUrl: './alarm.component.html',
    styleUrls: ['./alarm.component.css'],
})
export class AlarmComponent  {
    title = 'Contextual Collaboration';


    observable$: Observable<{}>;
    expert={};
    name=[];
    alarmtemplate = [
    {name: 'alarm', icon: 'alarm'},
    {name: 'dashboard', icon: 'dashboard'},
    {name: 'mood', icon: 'mood'},
];
@Output send = new EventEmitter();
    sendMessage(http:Http){
        
        http.post('http://localhost:4300/api/alarm/')
            .then((response)=>{console.log('I have sent the data')});
    }
    cancel(){
        
    };
    
    constructor(http: Http) {

        http
            .get('http://localhost:4300/api/alarm/')
            .toPromise()
            .then(()=>setTimeout(() =>{}, 5000));

        setInterval(function(){
            http
                .get('http://localhost:4300/api/alarm')
                .toPromise()
                .then((response) => console.log(response.json()))
        }, 3000);

        // setInterval(function(){ alert("Hello"); }, 3000);
    }

}
