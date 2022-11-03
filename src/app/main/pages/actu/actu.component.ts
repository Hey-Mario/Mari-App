import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { AutoUnsub } from 'src/app/functions/auto-un-subscription';
import { randomize } from 'src/app/functions/randomize.function';
import { Post } from '../../../main/Model/post';
import { PostsService } from '../../../main/Services/posts.service';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})

// @AutoUnsub()
export class ActuComponent implements OnInit {
  posts: Post[] = [];
  subscription : any;
  constructor(
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.postService.getAllPostsList().then(
      (data) => {
        this.posts = data.map( result => {return result}),
        randomize(this.posts)
        // console.log(data)
      }
    )
  }

  
  
}
