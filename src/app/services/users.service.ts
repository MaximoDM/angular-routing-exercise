import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor() { }

  getUsers() {
    return axios.get<User[]>(this.url)
      .then(res => res.data);
  }

  getUser(id: number) {
    return axios.get<User>(`${this.url}/${id}`)
      .then(res => res.data);
  }
}
