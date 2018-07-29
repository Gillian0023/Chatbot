import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.css'],
})
export class ChatBotComponent {
    title = 'Contextual Collaboration';

    observable$: Observable<{}>;

    constructor(http: Http) {
        this.observable$ = http
            .get('/api/public/simple')
            .map((response: Response) => response.json());
    }
    


}





