import { Component, OnInit, model } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieDataModel } from '../models/models';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textSearch: string = "";
  ideas: string[] = ["Hello", "World"];

  movies: MovieDataModel[] = [];
  isSearching: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private modalController: ModalController
  ) {}

  async showDetails(id: number) {
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: {id}
    });

    modal.present();
  }

  searchMovie(event: any){
    let text: string = event.detail.value;
    if(text.length === 0) {
      this.isSearching = false;
      this.movies = [];
      return;
    }
    this.isSearching = true;
    this.moviesService.getMoviesByQuery(text, 1).subscribe(res => {
      this.movies = res.results;
      this.isSearching = false;
    });
  }
}
