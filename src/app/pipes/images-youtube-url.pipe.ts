import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'imagesYoutubeUrl'
})
export class ImagesYoutubeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(key: string): SafeResourceUrl {
    let youtubeVideoUrl = "https://www.youtube.com/embed/";
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeVideoUrl + key);
  }
}
