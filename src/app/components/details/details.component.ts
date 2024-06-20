import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieDataModel } from 'src/app/models/models';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {

  @Input() id: number = 0;

  movie: MovieDataModel | null = null;

  isFavorite: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private modalController: ModalController,
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
    this.moviesService.getMovieById(this.id).subscribe(res => {
      this.movie = res;
    });

    this.isFavorite = this.storageService.existMovie(this.id);
  }

  goBackToHomePage() {
    this.modalController.dismiss();
  }

  favorite() {
    this.storageService.setMovie(this.movie!);
    this.isFavorite = this.storageService.existMovie(this.id);
  }
}
