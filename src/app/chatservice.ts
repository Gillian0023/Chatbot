import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
var io = require('socket.io-client');

export class ChatService {
    private url = 'http://localhost:4300';
    private socket;

    sendMessage(message){
        this.socket.emit('add-message', message);
        console.log(this.socket);
    }

    getMessages() {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('message', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        })
        return observable;
    }
}
