import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieDataModel } from '../models/models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  moviesCurrentMonth: MovieDataModel[] = [];
  popularMovies: MovieDataModel[] = [];
  movies: MovieDataModel[] = [];

  counterMoviesCurrentMonth: number = 1;
  counterMoviesByPopularity: number = 1;
  counterMovies: number = 1;

  get getPopulariesMovies(): MovieDataModel[] {
    return this.popularMovies;
  }

  constructor(private moviesService: MoviesService) {
    this.moviesService.getMoviesCurrentMonth(1).subscribe((res) => {
      this.moviesCurrentMonth = res.results;
    });

    this.moviesService.getMoviesByPopularity(1).subscribe(res => {
      this.popularMovies = res.results;
    });

    this.moviesService.getMovies(1).subscribe(res => {
      this.movies = res.results;
    });
  }

  loadMoreCurrentMonthMovies(){
    this.counterMoviesCurrentMonth++;
    this.moviesService.getMoviesCurrentMonth(this.counterMoviesCurrentMonth).subscribe(res => {
      this.moviesCurrentMonth = [...this.moviesCurrentMonth, ...res.results];
    });
  }

  loadMorePopulariesMovies(){
    this.counterMoviesByPopularity++;
    this.moviesService.getMoviesByPopularity(this.counterMoviesByPopularity).subscribe((res) => {
      this.popularMovies = [...this.popularMovies, ...res.results];
    });
  }

  loadMoreMovies(){
    this.counterMovies++;
    this.moviesService.getMovies(this.counterMovies).subscribe(res => {
      this.movies = [...this.movies, ...res.results];
    });
  }
}
