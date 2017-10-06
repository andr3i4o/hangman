import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import { DialogService } from "ng2-bootstrap-modal";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(private dialogService:DialogService, public authService:AuthService, private router:Router) {}

  ngOnInit() {
  }

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  presentAuthDialog(mode?: 'login' | 'register') {
    this.dialogService.addDialog(AuthDialogComponent, {
      mode: mode
      }).subscribe((message)=>{
    });
  }
}
