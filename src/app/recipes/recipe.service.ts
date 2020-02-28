import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'This is a schnitzel',
      'https://tinyurl.com/qw24g4q',
      [new Ingredient('Meat', 1), new Ingredient('Lemon', 2)]
    ),
    new Recipe('Salad', 'This is a salad', 'https://tinyurl.com/u8u2m8a', [
      new Ingredient('Tomato', 2),
      new Ingredient('Leafs', 5)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  showSingleRecipe(index: number) {
    // return this.recipes.find(el => el.id === id);
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
