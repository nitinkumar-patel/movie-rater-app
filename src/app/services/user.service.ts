import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  constructor(private http: HttpClient) { }

  loginUser(userData: any):Observable<any> {
    return this.http.post('fake_url', userData, {headers: this.httpHeaders})

  }

}
