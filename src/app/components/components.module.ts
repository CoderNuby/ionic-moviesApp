import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideShowBackdropComponent } from './slide-show-backdrop/slide-show-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { SlideShowPosterComponent } from './slide-show-poster/slide-show-poster.component';
import { SlideShowPairsComponent } from './slide-show-pairs/slide-show-pairs.component';
import { PipesModule } from '../pipes/pipes.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    SlideShowBackdropComponent,
    SlideShowPosterComponent,
    SlideShowPairsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideShowBackdropComponent,
    SlideShowPosterComponent,
    SlideShowPairsComponent,
    DetailsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
