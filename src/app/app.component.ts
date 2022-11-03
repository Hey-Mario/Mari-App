import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './main/Model/user';
import { UsersService } from './main/Services/users.service';
// declare let AOS: any;
import * as AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angulapp';
  @Input () userId: number = 2;
  user: User= {
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
  @Output() theUser= new EventEmitter;
  
  constructor(
    private userService: UsersService,
  ){
    this.userService.getUserById(this.userId).then(
      (data) => {
        this.user = data;
      }
    );
  }
  
  ngOnInit(): void {
    console.log(AOS);
    AOS.init();
  }

  // selectUser(userId: number){
  //   this.theUser.emit(
  //     this.userService.getUserById(userId)
  //   )
  // }
}
