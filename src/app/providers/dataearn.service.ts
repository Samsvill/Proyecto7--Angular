import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// http://localhost:3000/rest/gastosxcat/categoria/2/json
@Injectable({
  providedIn: 'root'
})
export class DataearnService {
  private PATH_CATXGAS: string = '';
  //private URL: string = 'http://localhost:3000/rest/gastosxcat'
  private URL: string = 'http://localhost:3000/rest/usuarios/findAll/json'
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.URL)
  }
}
