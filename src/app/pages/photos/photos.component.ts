import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photosService: PhotosService) {
    this.photosService.getPhotos()
      .then(photos => this.photos = photos);
  }

  ngOnInit(): void {
  }

}
