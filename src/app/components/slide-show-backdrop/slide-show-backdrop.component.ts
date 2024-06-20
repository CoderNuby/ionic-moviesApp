import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieDataModel } from 'src/app/models/models';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slide-show-backdrop',
  templateUrl: './slide-show-backdrop.component.html',
  styleUrls: ['./slide-show-backdrop.component.scss'],
})
export class SlideShowBackdropComponent  implements OnChanges {

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
      }, 400);;
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
