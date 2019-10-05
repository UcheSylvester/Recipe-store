import { Injectable, EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      name: "A Test Recipe 1",
      description: "this is a test recipe",
      imagePath:
        "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn"
    },
    {
      name: "A Test Recipe 2",
      description: "this is a test recipe",
      imagePath:
        "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn"
    },
    {
      name: "A Test Recipe 3",
      description: "this is a test recipe",
      imagePath:
        "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn"
    }
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
