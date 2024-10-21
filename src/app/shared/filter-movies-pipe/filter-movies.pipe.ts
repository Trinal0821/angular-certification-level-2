import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie-model/movie.model';

@Pipe({
  name: 'filterMovies',
  standalone: true
})
export class FilterMoviesPipe implements PipeTransform {

  transform(movies: Movie[] | null, searchText: string[]): Movie[] {

    if (movies == null) {
      return [];
    }
    else if (!movies || !searchText) {
      return movies;
    }

    //The first value of the searchText is always going to be the movie name filter and the second one is the release date filter
    var movieFilter = searchText[0];
    var movieReleaseDateFilter = searchText[1];
    var movieList = movies;

    if (movieFilter != '') {
      movieList = movieList.filter(m => m.title.toLowerCase().includes(movieFilter.toLocaleLowerCase()))
    }

    if (movieReleaseDateFilter != '') {
      movieList = movieList.filter(m => m.release_date.substring(0, 4).includes(movieReleaseDateFilter));
    }
    return movieList;
  }
}
