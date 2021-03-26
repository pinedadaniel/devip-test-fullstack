import { Injectable } from '@angular/core';
import {environmentDev} from '../../../environments/environment.dev';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

 private serverApi = environmentDev.back.URL_API +  environmentDev.back.VERSION_API;

  getMoviesExplorer() {
    const resource = 'movies/popular';
    return this.http
      .get(`${this.serverApi}/${resource}`);
  }
  getMoviesQuery(query) {
    const resource = `movies/search/${query}`;
    return this.http
      .get(`${this.serverApi}/${resource}`);
  }
  getMoviesRecommendate() {
    const resource = `movies/recommendation`;
    return this.http
      .get(`${this.serverApi}/${resource}`);
  }
  getDetailsMovie(id) {
    const resource = `movies/details/${id}`;
    return this.http
      .get(`${this.serverApi}/${resource}`);
  }

}
