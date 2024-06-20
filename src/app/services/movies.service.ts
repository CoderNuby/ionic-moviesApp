import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieDataModel, MoviesResponseModel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  discoverUrl: string = `https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}`;
  
  constructor(
    public http: HttpClient
  ) {
   }

  getMovies(page: number) {
    let params = new HttpParams().set("include_adult", "false")
    .set("include_video", "true").set("language", "en-US")
    .set("page", page.toString());

    return this.http.get<MoviesResponseModel>(this.discoverUrl, { params });
  }

  getMoviesByQuery(text: string, page: number) {
    let url = "https://api.themoviedb.org/3/search/movie";
    let params = new HttpParams().set("api_key", environment.apiKey)
    .set("include_adult", "false").set("language", "en-US")
    .set("page", page.toString()).set("query", text);
    return this.http.get<MoviesResponseModel>(url, { params });
  }

  getMoviesByPopularity(page: number) {
    let params = new HttpParams().set("include_adult", "false")
    .set("include_video", "true").set("language", "en-US")
    .set("page", page.toString()).set("sort_by", "popularity.desc");
    return this.http.get<MoviesResponseModel>(this.discoverUrl, { params });
  }

  getMoviesCurrentMonth(page: number){
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth() + 1;
    let monthString = "";

    month < 10 ? monthString = "0" + month : month.toString();

    let initDate = `${today.getFullYear()}-${monthString}-01`;
    let endDate = `${today.getFullYear()}-${monthString}-${lastDay}`;

    let params = new HttpParams().set("include_adult", "false")
    .set("include_video", "true").set("language", "en-US")
    .set("primary_release_date.gte", initDate).set("primary_release_date.lte", endDate)
    .set("page", page.toString()).set("sort_by", "popularity.desc");

    return this.http.get<MoviesResponseModel>(this.discoverUrl, { params });
  }

  getMovieById(movieId: number){
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${environment.apiKey}&append_to_response=videos,images`;
    return this.http.get<MovieDataModel>(url);
  }
}
