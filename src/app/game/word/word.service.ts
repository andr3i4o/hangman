import { Injectable } from '@angular/core';
import { Word } from '../../models/word';
import { LetterComponent } from '../../letter/letter.component';
import { Observable, Subject } from 'rxjs';
import { Configuration } from '../../app.constants';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable()
export class WordService {
	public url: string;
	private letterValueSource = new Subject<string>();

	letterValue$ = this.letterValueSource.asObservable();

	constructor( private _configuration: Configuration, private http: HttpClient) {
		this.url = _configuration.Server + 'word';
	}

	public getWord<T>(category: string): Observable<T> {
		let params = new HttpParams().set('category_id', category);
		return this.http.get<T>(this.url, {params});
	}

	checkLetter(value: string) {
		this.letterValueSource.next(value.toLowerCase());
	}
}
