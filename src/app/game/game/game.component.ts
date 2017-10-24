import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../game-category/category.service';
import { WordComponent } from '../word/word.component'
import { Router } from '@angular/router';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	@ViewChild(WordComponent) wordComponent: WordComponent

	constructor(private categoryService: CategoryService, private router: Router) { }

	ngOnInit() {
	}
}
