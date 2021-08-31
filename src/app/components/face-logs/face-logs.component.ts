import { Component, OnInit, EventEmitter } from '@angular/core';
import { FacesService } from '../../services/faces.service';

@Component({
  selector: 'app-face-logs',
  templateUrl: './face-logs.component.html',
  styleUrls: ['./face-logs.component.css']
})
export class FaceLogsComponent implements OnInit {

  constructor(private faceService: FacesService) { 
  }
  faces: any
  isUpdated: boolean = false

  onUpdateName(){
    this.isUpdated = true
  }

  getFaces(){
    this.faceService.getFaces().subscribe((faces)=>{
      if( !this.faces  || faces.length != this.faces.length || this.isUpdated){
        this.faces = faces
        this.isUpdated = false
      }

    })
  }
  ngOnInit(): void {
    setInterval(()=>{
      this.getFaces()
    },2000)
  }



}
