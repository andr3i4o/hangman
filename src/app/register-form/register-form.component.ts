import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {UserFactory} from '../models/userFactory';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user: any;

  signUpUser: any = {
  	name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(private userFactory: UserFactory, public authService: AuthService) {
  }

  ngOnInit() {
  }

  onSignUpSubmit(){
  	this.user = this.userFactory.create(this.signUpUser, this.authService);
  	this.user.save();
  }

}