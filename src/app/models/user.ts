import {AuthService} from '../services/auth.service';
import {EventEmitter, Output} from '@angular/core';

export class User {
	name: string;
	email: string;
	password: string;
	passwordConfirmation: string;

	@Output() onFormResult = new EventEmitter<any>();

	constructor(userInfo:any, public authService: AuthService) {
		this.name = userInfo.name;
		this.email = userInfo.email;
		this.password = userInfo.password;
		this.passwordConfirmation = userInfo.passwordConfirmation;
	}

	save(){
		this.authService.registerUser(this.getProps()).subscribe(
			(res) => {

				if (res.status == 200){
					this.onFormResult.emit({signedUp: true, res});
				}

			},

			(err) => {
				console.log(err.json());
				this.onFormResult.emit({signedUp: false, err});
			}
			);
	}

	getProps(){
		return {
			name: this.name,
			email: this.email,
			password: this.password,
			passwordConfirmation: this.passwordConfirmation
		}
	}
}
