import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moviesresponse } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesServicesService {


  private urlBase =  'https://api.themoviedb.org/3/movie/now_playing?api';
  private apiKey = '69ce2319b81322ebe711400bf555471a';
  constructor(private http: HttpClient) { }


   getMovies() : Observable<Moviesresponse>{

     return this.http.get<Moviesresponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=69ce2319b81322ebe711400bf555471a&language=es-ES&page=1');
   }
  
}
//69ce2319b81322ebe711400bf555471a
//https://api.themoviedb.org/3/movie/550?api_key=69ce2319b81322ebe711400bf555471a
// endpoint https://api.themoviedb.org/3/movie/now_playing?api_key=69ce2319b81322ebe711400bf555471a&language=es-ES&page=1