import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/main/Model/user';
import { UsersService } from 'src/app/main/Services/users.service';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {
  user: User = {
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
  subscription: any;
  
  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.userService.getUserById(params['id']).then(
          (data) => this.user = data
        )
      }
    })
  }
  
}
