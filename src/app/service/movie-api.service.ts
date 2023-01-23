import { Result } from './../models/result.model';
import { Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
 
  baseUrl = environment.URLBASE;
  apikey = environment.APIKEY;
 
  constructor(private httpClient: HttpClient) { }
  
  bannerApiData(): Observable<Result> {
     return this.httpClient.get<Result>(`${this.baseUrl}/trending/all/week?api_key=${this.apikey}`)
  }

  trendingMovieApiDate(): Observable<Result> {
    return  this.httpClient.get<Result>(`${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`)
  }
  getSearchMovie(data:any):Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)

  }

  getMovieDetails(data: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movie/${data}?api_key=${this.apikey}`)
  }

  getMovieVideo(data: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  getMovieCast(data: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
}
