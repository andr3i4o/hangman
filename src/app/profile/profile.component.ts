import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Angular2TokenService} from "angular2-token";
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface ProfileModel {
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends DialogComponent<ProfileModel, string> implements ProfileModel, OnInit {

  constructor(public authTokenService:Angular2TokenService,
              public authService:AuthService,
              private router:Router,
              dialogService: DialogService) {
  	super(dialogService)
  }

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  ngOnInit() {
  }

}
