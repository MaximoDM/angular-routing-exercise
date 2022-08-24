import { Injectable } from '@angular/core';
import axios from 'axios';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  url = 'https://jsonplaceholder.typicode.com/photos';
  constructor() { }

  getPhotos() {
    return axios.get<Photo[]>(this.url)
      .then(res => res.data);
  }

  getPhoto(id: number) {
    return axios.get<Photo>(`${this.url}/${id}`)
      .then(res => res.data);
  }
}
