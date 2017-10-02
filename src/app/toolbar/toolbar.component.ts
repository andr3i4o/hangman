import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import { DialogService } from "ng2-bootstrap-modal";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  // @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(private dialogService:DialogService, public tokenAuthService:Angular2TokenService) {}

  ngOnInit() {
  }

  presentAuthDialog(mode?: 'login' | 'register') {
    this.dialogService.addDialog(AuthDialogComponent, {
      mode: mode
      }).subscribe((message)=>{
    });
  }
}
