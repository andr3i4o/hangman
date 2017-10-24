import { Injectable } from '@angular/core';
import { Word } from '../../models/word';
import { Observable } from 'rxjs';
import { Configuration } from '../../app.constants';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable()
export class WordService {
	public url: string;

	constructor( private _configuration: Configuration, private http: HttpClient) {
		this.url = _configuration.Server + 'word';
	}

	public getWord<T>(category: string): Observable<T> {
		let params = new HttpParams().set('category_id', category);
		return this.http.get<T>(this.url, {params});
	}
}
