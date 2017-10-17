import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../game-category/category.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

}
