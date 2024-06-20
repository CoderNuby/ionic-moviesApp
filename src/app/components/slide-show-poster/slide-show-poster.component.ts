import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MovieDataModel } from 'src/app/models/models';
import { DetailsComponent } from '../details/details.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnChanges {

  @Input() movies: MovieDataModel[] = [];
  @Input() showMore: boolean = true;
  @Output() loadMore: EventEmitter<void> = new EventEmitter();
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["movies"]){
      setTimeout(() => {
        this.updateSwiper()
      }, 400);
    }
  }

  async viewDetails(id: number){
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: { id }
    });

    modal.present();
  }

  loadMovies(): void {
    this.loadMore.emit();
  }

  updateSwiper(): void {
    if (this.swiperContainer) {
      const swiperInstance = this.swiperContainer.nativeElement.swiper;
      if (swiperInstance) {
        swiperInstance.update();
      }
    }
  }
}
