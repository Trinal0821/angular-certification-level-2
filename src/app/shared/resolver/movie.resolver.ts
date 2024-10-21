import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../movie-service/movie.service';
import { inject } from '@angular/core';
import { Movie } from '../movie-model/movie.model';

export const movieResolver: ResolveFn<Observable<Movie>> = (route, state) => {
  const movieSerivce = inject(MovieService);
  const movieId = route.paramMap.get('movieId');
  return movieSerivce.getMoveDetails(movieId);
};
