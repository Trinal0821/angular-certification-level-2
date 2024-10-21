import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie-service/movie.service';
import { Observable} from 'rxjs';
import { Movie } from '../shared/movie-model/movie.model'
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../shared/duration-pipe/duration.pipe';
import { BudgetPipe } from '../shared/budget-pipe/budget.pipe';
import { FormsModule } from '@angular/forms';
import { FilterMoviesPipe } from '../shared/filter-movies-pipe/filter-movies.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, DurationPipe, BudgetPipe, FormsModule, FilterMoviesPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  movieList: Observable<Movie[]> | null = null;
  movieName: string = '';
  movieReleaseDate: string = '';
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.movieList = this.movieService.getMovieList();
  }

  clearFilter() {
    this.movieName = '';
    this.movieReleaseDate = '';
  }

  displayMovieDetails(movieId: string) {
    this.router.navigate(['/movies', movieId]);
  }
}
