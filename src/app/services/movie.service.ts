import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getMovie():Observable<any> {
    return this.http.get(this.baseUrl + 'movies/', this.getAuthHeader());
  }

  private getAuthHeader(){
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Token ' + token});
    return {headers: httpHeaders};
  }


}
