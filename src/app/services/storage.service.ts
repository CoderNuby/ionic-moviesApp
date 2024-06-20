import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { MovieDataModel } from '../models/models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  movies: MovieDataModel[] = [];

  movies$: Subject<MovieDataModel[]> = new Subject<MovieDataModel[]>();

  constructor(
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    await this.loadMoviesFromStorage();
  }

  public setMovie(movie: MovieDataModel) {
    let exist: boolean = false;
    for (const movieArray of this.movies) {
      if(movieArray.id === movie.id) {
        exist = true;
        break;
      }
    }
    let message: string = "";
    if(exist){
      this.movies = this.movies.filter(x => x.id !== movie.id);
      message = "Movie removed from favorites";
    }else{
      this.movies.push(movie);
      message = "Movie add to favorites";
    }
    this.presentToast(message);
    this.movies$.next(this.movies);
    this._storage?.set("movies", this.movies);
  }

  async loadMoviesFromStorage(){
    const movies: MovieDataModel[] = await this.storage.get("movies");
    this.movies = movies || [];
    this.movies$.next(this.movies);
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  existMovie(id: number){
    const exist = this.movies.filter(x => x.id === id).length;
    return !!exist;
  }
}
