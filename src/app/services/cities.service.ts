import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private apiUrlCity = ' http://localhost:5000/city';

  constructor(private http: HttpClient) { }

  getCities(nationId:number): Observable<City[]>{
    const url = `${this.apiUrlCity}?nationId=${nationId}`;
    return this.http.get<City[]>(url);
  }

}
