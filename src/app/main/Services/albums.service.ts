import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Album } from '../Model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  linkUsers = 'https://jsonplaceholder.typicode.com/users/';
  linkAlbums = 'https://jsonplaceholder.typicode.com/albums/'
  constructor(
    private http: HttpClient,
  ) { }

  getMyAlbumsList(idUser: number): Promise<Album[]>{
    return lastValueFrom(this.http.get<Album[]>(this.linkUsers + idUser + '/albums'));
  }
  
  getAlbumById(idAlbum: number): Promise<Album>{
    return lastValueFrom(this.http.get<Album>(this.linkAlbums + idAlbum));
  }
}
