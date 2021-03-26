import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environmentDev} from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

 private serverApi = environmentDev.back.URL_API +  environmentDev.back.VERSION_API;

  constructor(private http: HttpClient,
              ) { }

  loginGuest() {
    const resource = 'auth/token/guest';
    return this.http
      .get(`${this.serverApi}/${resource}`);
  }

  getTokenAuth() {
    const resource = 'auth/token/auth';
    return this.http
      .get(`${this.serverApi}/${resource}`);
  }

  loginTMDB(req) {
    const resource = 'auth/login';
    return this.http
      .post(`${this.serverApi}/${resource}`, req);
  }
}
