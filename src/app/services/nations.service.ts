import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nation } from '../models/nation';


@Injectable({
  providedIn: 'root'
})

export class NationsService {

  private apiUrlNation = 'http://localhost:5000/nation';

  constructor(private http: HttpClient) {}

   getNations(): Observable<Nation[]>{
     return this.http.get<Nation[]>(this.apiUrlNation);
   }
}

