import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../movie-model/movie.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieList() : Observable<Movie[]>{
    return this.http.get<Movie[]>('movies');
  }

  getMoveDetails(movieId : string | null) : Observable<Movie> {
    return this.http.get<Movie>("movies/" + movieId)
  }

}
