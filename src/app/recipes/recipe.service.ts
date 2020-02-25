import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://tinyurl.com/u8u2m8a'
    ),
    new Recipe(
      'A Second Recipe',
      'This is a second test',
      'https://tinyurl.com/u8u2m8a'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
