import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    title = 'Contextual Collaboration';

    observable$: Observable<{}>;

    constructor(http: Http) {
        this.observable$ = http
            .get('/api/public/simple')
            .map((response: Response) => response.json());
    }
    


}
