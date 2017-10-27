import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { WordService } from '../game/word/word.service';

@Component({
	selector: 'app-letter',
	templateUrl: './letter.component.html',
	styleUrls: ['./letter.component.less']
})
export class LetterComponent implements OnInit {
	public clicked: Boolean = false;

	@Input() value: string;

	constructor(private wordService: WordService) {}

	ngOnInit() {
	}

	press(){
		if(!this.clicked){
			this.wordService.checkLetter(this.value);
			this.clicked = true;
		}
	}

}
