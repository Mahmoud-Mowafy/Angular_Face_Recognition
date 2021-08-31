import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FacesService } from '../../services/faces.service';

@Component({
  selector: 'app-face-card',
  templateUrl: './face-card.component.html',
  styleUrls: ['./face-card.component.css']
})
export class FaceCardComponent implements OnInit {
  @Input() face: any
  @Output() onUpdateName: EventEmitter<any> = new EventEmitter();

  newName: String = "";

  constructor(private faceService: FacesService) { }

  ngOnInit(): void {
  }

  updateName(id: String) {
    if (this.newName && this.newName != "") {
      this.faceService.updateFaceName({ id, name: this.newName })
      this.onUpdateName.emit()
    }
  }
  deleteFace(id: any){
    this.faceService.deleteFace({ id })
  }

}
