import {User} from './user';

export class UserFactory {
	create(userInfo, authService) {
    	return new User(userInfo, authService);
  	}
}
