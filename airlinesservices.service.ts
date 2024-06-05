import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AirlinesservicesService {

  constructor(private http:HttpClient) { }

  getBookings():Observable<any>{
  return this.http.get('https://api.npoint.io/378e02e8e732bb1ac55b');
  }
}
