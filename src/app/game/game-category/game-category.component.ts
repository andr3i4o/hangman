import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { Category } from "../../models/category";

@Component({
    selector: 'app-game-category',
    templateUrl: './game-category.component.html',
    styleUrls: ['./game-category.component.css']
})
export class GameCategoryComponent extends DialogComponent<Category, string> implements OnInit {
    public categories: Array<Category> = [];
    public selectedCategory: string = '';

    constructor(dialogService: DialogService, private _categoryService: CategoryService, private router: Router) {
        super(dialogService);
    }

    ngOnInit() {
  	 	this._categoryService
        	.getAll<Category[]>()
        	.subscribe((data: Category[]) => this.categories = data,
        	error => (err) => {
	        	console.log('categories error - ' + err)
	        },
	        () => {
	            console.log('categories fetched')
	    });
  	}

  	categorySelected(){
  		this._categoryService.setCategory(this.categorySelected);
  		this.router.navigate(['/game']);
  	}
}
