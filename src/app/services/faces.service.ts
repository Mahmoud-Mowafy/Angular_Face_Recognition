import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacesService {

  constructor(private http: HttpClient) { }

  getFaces(): Observable<any> {
    return this.http.get("http://localhost:3000/api/faces/getFaces")
  }
  updateFaceName(data: any) {
    this.http.post<any>("http://localhost:3000/api/faces/update_face_name", data).subscribe({
      next: data => {

      },
      error: error => {

      }
    })
  }
  deleteFace(data: any) {
    this.http.post<any>("http://localhost:3000/api/faces/delete_face", data).subscribe({
      next: data => {

      },
      error: error => {

      }
    })
  }
}
