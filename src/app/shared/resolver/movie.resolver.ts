import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieService } from '../movie-service/movie.service';
import { inject } from '@angular/core';
import { Movie } from '../movie-model/movie.model';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

/**
 * A Resolver that will redirect the user to the movie route if an invalid id is passed in. 
 * Otherwise it will just resolve the current route. 
 * @param route 
 * @param state 
 * @returns 
 */
export const MovieResolver: ResolveFn<Observable<Movie | null>> = (route, state) => {
  const movieService = inject(MovieService);
  const router = inject(Router);
  const movieId = route.paramMap.get('movieId');

  return movieService.getMovieDetails(movieId).pipe(
    map(movie => {
      if (!movie) {
        router.navigate(['/movies']);
        return null;
      }
      return movie;
    }),
    catchError(() => {
      router.navigate(['/movies']);
      return of(null);
    })
  );
};
