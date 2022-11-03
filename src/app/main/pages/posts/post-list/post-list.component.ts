import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { randomize } from 'src/app/functions/randomize.function';
import { Post } from 'src/app/main/Model/post';
import { RandomizePipe } from 'src/app/main/pipes/randomize.pipe';
import { PostsService } from 'src/app/main/Services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];
  i: number = 10;
  constructor(
  ) { }

  ngOnInit(): void {
    // const source = interval(1000);
    // source.subscribe(val => console.log(val));

  }


  showMorePost() {
    this.i += 5;
  }
}
