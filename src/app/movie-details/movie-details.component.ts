import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../shared/movie-model/movie.model';
import { Observable} from 'rxjs';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../shared/duration-pipe/duration.pipe';
import { BudgetPipe } from '../shared/budget-pipe/budget.pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterLink, DurationPipe, BudgetPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  movieDetails! : Movie;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieDetails = this.route.snapshot.data['movie'];
  }
}
