import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  constructor(private http: HttpClient) {}

  getQrForRegistration(): Observable<Blob> {
    return this.http.get('http://localhost:8000/qr/registrar?id_evento=1&id_estudiante=4', { responseType: 'blob' });
  }

  getQrForAttendance(): Observable<Blob> {
    return this.http.get('http://localhost:8000/qr/marcar-presente?id_evento=1&id_estudiante=4', { responseType: 'blob' });
  }
}
