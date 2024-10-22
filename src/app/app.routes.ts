import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { movieResolver } from './shared/resolver/movie.resolver';

export const routes: Routes = [
    { path: 'movies', title: 'Movie List', component: MovieListComponent},  
    { path: 'movies/:movieId', title: 'Movie Details', component: MovieDetailsComponent, resolve: {movie: movieResolver}},
    { path: '', redirectTo: '/movies', pathMatch: 'full'},
    { path: '**', redirectTo: '/movies'},
];
