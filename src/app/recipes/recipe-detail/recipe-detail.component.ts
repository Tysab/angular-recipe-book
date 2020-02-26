import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.recipe =
    const id = this.route.snapshot.params['id'];
    const singleRecipe = this.recipeService.showSingleRecipe(id);
    this.recipe = singleRecipe;

    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.showSingleRecipe(+params['id']);
    });
  }

  toShoppingList(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }
}
