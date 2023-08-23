import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// http://localhost:3000/rest/gastosxcat/categoria/2/json
@Injectable({
  providedIn: 'root'
})
export class DataearnService {
  private PATH_CATXGAS: string = '';
  private URL: string = 'http://localhost:3000/rest/gastosxcat'
  constructor(private http:HttpClient) { }

  getResponseCatxGasId(id: number){
    this.PATH_CATXGAS = '/categoria/${id}/json'
    return this.http.get(this.URL + this.PATH_CATXGAS)
  }
}
