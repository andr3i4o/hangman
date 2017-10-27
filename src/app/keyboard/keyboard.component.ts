import { Component, OnInit } from '@angular/core';
import { StringValues } from '../stringValues.constants';
import { LetterComponent } from '../letter/letter.component'

@Component({
	selector: 'app-keyboard',
	templateUrl: './keyboard.component.html',
	styleUrls: ['./keyboard.component.less']
})
export class KeyboardComponent implements OnInit {
	public letters: string[] = [];

	constructor(stringValues: StringValues) {
		this.letters = stringValues.letters;
		console.log(this.letters)
	}

	ngOnInit() {
	}

}
