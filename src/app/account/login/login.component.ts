import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/main/Model/user';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // token: any;
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
  }

  constructor(
    private authentificationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  login(formulaire: NgForm){
      this.authentificationService.logByEmail(formulaire.value.email).then(
        (res) => {
          this.user = res[0]
          console.log(this.user.id)
        }
      )
  }

}
