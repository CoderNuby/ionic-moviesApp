import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagesUrl'
})
export class ImagesUrlPipe implements PipeTransform {
  transform(image: string): string {
    return image ? 'https://image.tmdb.org/t/p/w500' + image : './assets/no-image-banner.jpg';
  }
}
