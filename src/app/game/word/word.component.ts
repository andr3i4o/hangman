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
	private word: string;
	private secret: string;
	private wrongAttempts: number = 0;
	private maxWrongAttempts: number = 8;

	constructor(private wordService: WordService, private categoryService: CategoryService) {
		wordService.letterValue$.subscribe(
			letter => {
				this.checkLetter(letter);
			});
	}

	ngOnInit() {
		let category = this.categoryService.getCategory();
		this.wordService.getWord<Word[]>(category)
		.subscribe((data: Word[]) => this.words = data,
			error => (err) => {
				console.log('categories error - ' + err)
			},
			() => {
				this.word = this.words[0].word;
				this.transformWord();
			});
	}

	transformWord(){
		this.secret = this.word.replace(/\S/g, '*');
	}

	checkLetter(letter: string){
		let pos = this.word.indexOf(letter),
		result = this.secret.split('');

		if(pos == -1){
			this.wrongAttempts++;
			this.checkResult();
			return;
		}

		while(pos > -1) {
			result[pos] = letter;
			pos = this.word.indexOf(letter, pos+1);
		}

		this.secret = result.join('');
		this.checkResult();
	}

	checkResult(){
		if(this.maxWrongAttempts == this.wrongAttempts){
			this.gameLost();
		}

		if(this.secret == this.word){
			this.gameWinned();
		}
	}

	gameLost(){
		console.log('lost');
	}

	gameWinned(){
		console.log('win');
	}
}
