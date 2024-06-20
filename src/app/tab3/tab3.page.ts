import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { MovieDataModel } from '../models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  movies: MovieDataModel[] = [];

  constructor(
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.storageService.movies$.subscribe(res => {
      this.movies = [...res];
    });
  }
}
