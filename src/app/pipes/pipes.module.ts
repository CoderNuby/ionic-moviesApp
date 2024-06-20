import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PairsPipe } from './pairs.pipe';
import { ImagesUrlPipe } from './images-url.pipe';
import { ImagesYoutubeUrlPipe } from './images-youtube-url.pipe';



@NgModule({
  declarations: [
    PairsPipe,
    ImagesUrlPipe,
    ImagesYoutubeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PairsPipe,
    ImagesUrlPipe,
    ImagesYoutubeUrlPipe
  ]
})
export class PipesModule { }
