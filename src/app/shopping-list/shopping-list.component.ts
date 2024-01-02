import { Component } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients :Ingredients[]=[
    new Ingredients('sugar','10 gm'),new Ingredients('milk','1/2 cup'),new Ingredients('Water','1 cup'),new Ingredients('Tea leaf','1 tbsp')
  ];

  constructor(){

  }
}
