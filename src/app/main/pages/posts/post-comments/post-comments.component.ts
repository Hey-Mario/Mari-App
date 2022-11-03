import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Comment } from 'src/app/main/Model/comment';
import { Post } from 'src/app/main/Model/post';
import { User } from 'src/app/main/Model/user';
import { CommentsService } from 'src/app/main/Services/comments.service';
import { PostsService } from 'src/app/main/Services/posts.service';
import { UsersService } from 'src/app/main/Services/users.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css'],
})
export class PostCommentsComponent implements OnInit {
  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };


  user!: User;
  
  postId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private userService: UsersService
  ) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => this.postId = params['id']
    )
    this.postService.getPostById(this.postId).then(
       dataPost => {
        this.post = dataPost,
        this.userService.getUserById(dataPost.userId).then(
          (dataUSer) => this.user = dataUSer
        )
      }
    )

    // console.log(this.post.id)
    // console.log(this.user)
  }

  // getEmittedUser($event: any){
  //   // this.user = $emitted
  //   // console.log('the user : ' + this.user)
  //   console.log('The emitted :' + $event)
  // }
  

}
