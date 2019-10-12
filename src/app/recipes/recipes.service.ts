import { Injectable, EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      name: "Jellof Rice",
      description: "this is a test recipe",
      imagePath:
        "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn",
      ingredients: [
        new Ingredient("rice", 1),
        new Ingredient("tomato paste", 10)
      ]
    },
    {
      name: "Chicken Stew",
      description: "this is a test recipe",
      imagePath:
        "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn",
      ingredients: [
        new Ingredient("Chicken", 1),
        new Ingredient("Tomato paste", 20)
      ]
    },
    {
      name: "Burger",
      description: "this is a test recipe",
      imagePath:
        "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn",
      ingredients: [new Ingredient("buns", 15), new Ingredient("butter", 2)]
    }
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
