import { Ingredient } from '../shared/ingredient.model';
export class Recipe {
  //  Add static counter to assign ID on constructor??
  //! ISSUE WITH ID ASSIGNMENT
  public static countID = 2;
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(id: number, name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {

    this.id = id ? id : Recipe.countID++;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
