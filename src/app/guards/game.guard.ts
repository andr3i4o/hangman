import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CategoryService } from '../game/game-category/category.service';

@Injectable()
export class GameGuard implements CanActivate {

	constructor(private categoryService: CategoryService,
        		private router: Router){}

	canActivate(){
		let category: string = this.categoryService.getCategory();

	  	if( category !== '' && category !== null && category !== undefined){
	  		return true;
	  	}else{
	  		this.router.navigate(['/category-choose']);
	  		return false;
	  	}
	}
}
