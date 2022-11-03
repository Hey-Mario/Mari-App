import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/main/Model/user';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.css']
})
export class ProfileNavbarComponent implements OnInit {

  @Input() user!: User
  constructor() { }

  ngOnInit(): void {
  }

}
