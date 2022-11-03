import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/main/Model/album';
import { Photo } from 'src/app/main/Model/photo';
import { AlbumsService } from 'src/app/main/Services/albums.service';
import { PhotoService } from 'src/app/main/Services/photo.service';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.css']
})
export class UserPhotoComponent implements OnInit {
  // @Input() albumId!: number;
  photos: Photo[] = [];
  album: Album = {
    userId: 0,
    id: 0,
    title: ''
  };
  c: number = 0;
  i: number = 11;
  subscription: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private albumService: AlbumsService
  ) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=> {
        this.photoService.getPhotos(params['id']).then(
            (data) => {
            this.photos = data.map((result)=> result)
          }
        ),
        this.albumService.getAlbumById(params['id']).then(
            (data) => {
            this.album = data
          }
        )
      }
    )
  }

  

  preview(){
    this.i = this.c
    this.c -= 11
  }
  next(){
    this.c = this.i
    this.i += 11
  }

}
