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
  private socket: any;
  private socketUrl: string = 'http://localhost:4300';
  messages = [];
  connection;
  message;

  observable$: Observable<{}>;

  constructor(http: Http, private chatService:ChatService) {
    this.observable$ = http
      .get('/api/public/simple')
      .map((response: Response) => response.json());
  }


   sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
