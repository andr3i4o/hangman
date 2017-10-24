import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';
import { Category } from "../../models/category";
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-game-category',
	templateUrl: './game-category.component.html',
	styleUrls: ['./game-category.component.css']
})
export class GameCategoryComponent extends DialogComponent<Category, string> implements OnInit, OnDestroy {
	public categories: Array<Category> = [];
	public selectedCategory: number;
	public subscription: Subscription;

	constructor(dialogService: DialogService, private categoryService: CategoryService, private router: Router) {
		super(dialogService);
	}

	ngOnInit() {
		this.subscription = this.categoryService
		.getAll<Category[]>()
		.subscribe((data: Category[]) => this.categories = data,
			error => (err) => {
				console.log('categories error - ' + err)
			},
			() => {
				console.log('categories fetched')
			});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	categorySelected(){
		this.categoryService.setCategory(this.selectedCategory);
		this.router.navigate(['/game']);
	}
}
