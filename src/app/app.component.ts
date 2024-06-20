import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { StorageService } from './services/storage.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storageService: StorageService) {
    
  }
}
