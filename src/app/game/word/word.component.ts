import { Component, OnInit } from '@angular/core';
import { Word } from '../../models/word';
import { WordService } from './word.service';
import { CategoryService } from '../game-category/category.service';

@Component({
	selector: 'app-word',
	templateUrl: './word.component.html',
	styleUrls: ['./word.component.less']
})
export class WordComponent implements OnInit {
	public words: Word[];

	constructor(private wordService: WordService, private categoryService: CategoryService) { }

	ngOnInit() {
		let category = this.categoryService.getCategory();
		this.wordService.getWord<Word[]>(category)
		.subscribe((data: Word[]) => this.words = data,
			error => (err) => {
				console.log('categories error - ' + err)
			},
			() => {
				console.log('word fetched')
		});
	}
}
