import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../../services/websocket.service"
@Component({
  selector: 'app-camera-streaming',
  templateUrl: './camera-streaming.component.html',
  styleUrls: ['./camera-streaming.component.css']
})
export class CameraStreamingComponent implements OnInit {
  image: any
  constructor(private websocketService: WebsocketService) { }

  ngOnInit(): void {
    this.websocketService.listen("frame").subscribe((data)=>{
      this.image = data
    })
  }

}
