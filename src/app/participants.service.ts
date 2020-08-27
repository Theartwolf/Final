import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(private http: HttpClient) { }

  getParticipants(): Observable<any>{
    //return the array from backend
    return this.http.get<any>('http://localhost:3000/participants');
  }
  getParticipantsWithTimings(): Observable<any>{
    //return the array from backend
    return this.http.get<any>('http://localhost:3000/participantsTime');
  }
  

  checkAvailbility(data){
      return this.http.post('http://localhost:3000/create',data);
  }
  editParticipantTimings(data){
    return this.http.post('http://localhost:3000/edit',data);
}

}
