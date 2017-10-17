import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../../app.constants';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CategoryService {
	public url: string;
	public selectedCategory: string;

  	constructor(private _configuration: Configuration, private http: HttpClient) {
  		this.url = _configuration.Server + 'categories';
  	}

  	public getAll<T>(): Observable<T> {
  		return this.http.get<T>(this.url);
  	}

  	setCategory(category){
  		this.selectedCategory = category;
  	}

  	getCategory(){
  		return this.selectedCategory;
  	}
}