import {Component, Input, EventEmitter} from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface PromptModel {
  mode:string;
}

@Component({
  selector: 'app-auth-dialog',
   templateUrl: './auth-dialog.component.html',
  	styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent extends DialogComponent<PromptModel, string> implements PromptModel {
  mode: 'login' | 'register' = 'login';

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  onLoginFormResult(e){
    if(e.signedIn)
      this.close();
    else{
      alert(e.err.json().errors[0])
    }
  }

  onRegisterFormResult(e){
    if(e.signedUp)
      this.close();
    else{
      alert(e.err.json().errors.full_messages[0])
    }
  }

  isLoginMode(){return this.mode == 'login'}
  isRegisterMode(){return this.mode == 'register'}

}
