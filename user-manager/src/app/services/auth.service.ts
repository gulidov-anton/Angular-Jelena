import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url = `${API_URL}/login`;
  getUserId(login: any, pass: any):Observable<any> {
    return this.http.get(this.url, { login, pass });
}
