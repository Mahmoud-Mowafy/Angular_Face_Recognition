import { Injectable } from '@angular/core';
import { io } from "socket.io-client"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socket: any;
  readonly url: string = "ws://127.0.0.1:5000"
  constructor() {
    let self = this
    this.socket = io(this.url)
    this.socket.on('connect', function(){
      self.socket.emit('start_streaming');
    })
   }
   listen(eventName: string){
     return new Observable((subscriber)=>{
       this.socket.on(eventName, (data: any)=>{
         subscriber.next(data)
       })
     })
   }
   emit(eventName: String, data: any){
     this.socket.emit(eventName, data)
   }
}
