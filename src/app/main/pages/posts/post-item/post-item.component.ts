import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/main/Model/post';
import { User } from 'src/app/main/Model/user';
import { UsersService } from 'src/app/main/Services/users.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };
  @Input() user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: 0,
      geo: {
        lat: 0,
        lng: 0
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  };
  @Input() i!: number;
  subscription: any;
  constructor(
    private userService: UsersService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.post.userId).then(
      (response) => this.user = response
    ).catch(err => console.log(err))
  }

  // ngOnAfterView(){

  // }

  goToPost(id: number){
    const link = ['posts/' + id + '/comments'];
    this.route.navigate(link);
  }

  // getIndex(){
  //   this.index.emit(this.i)
  // }
}
