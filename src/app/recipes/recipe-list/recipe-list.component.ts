import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://realfood.tesco.com/media/images/RFO-1400x919-AsianSalmon-9a9cf566-eaad-4107-aa79-886ec53e6b31-0-1400x919.jpg'),
    new Recipe('A Test Recipe 2', 'This is a simple test 2', 'https://realfood.tesco.com/media/images/RFO-1400x919-Salmon-green-beans-and-peas-a96904c0-1d49-4142-b217-49a0f03e24dd-0-1400x919.jpg')
  ];

   constructor() { }

  ngOnInit(): void {
  }

}
