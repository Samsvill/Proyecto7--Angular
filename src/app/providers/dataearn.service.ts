import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// http://localhost:3000/rest/gastosxcat/categoria/2/json
@Injectable({
  providedIn: 'root'
})
export class DataearnService {
  private PATH_CATXGAS: string = '';
  //private URL: string = 'http://localhost:3000/rest/gastosxcat'
  private URL: string = 'https://proyecto7-express-production.up.railway.app'
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.URL+'/rest/usuarios/findAll/json')
  }
}
