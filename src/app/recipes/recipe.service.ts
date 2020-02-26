import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Schnitzel',
      'This is a schnitzel',
      'https://tinyurl.com/qw24g4q',
      [new Ingredient('Meat', 1), new Ingredient('Lemon', 2)]
    ),
    new Recipe(2, 'Salad', 'This is a salad', 'https://tinyurl.com/u8u2m8a', [
      new Ingredient('Tomato', 2),
      new Ingredient('Leafs', 5)
    ])
  ];

  getRecipes() {
    // this.showSingleRecipe(2);
    return this.recipes.slice();
  }

  showSingleRecipe(id: number) {
    return this.recipes.find(el => el.id === id);
  }
}
