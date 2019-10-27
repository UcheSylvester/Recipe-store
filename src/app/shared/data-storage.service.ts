import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  url = "https://ng-recipe-book-b5e10.firebaseio.com/";

  constructor(
    private http: HttpClient,
    private recipeService: RecipesService
  ) {}

  storeRecipes(): Observable<Recipe[]> {
    return this.http.put<Recipe[]>(
      `${this.url}recipes.json`,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    this.http
      .get(`${this.url}/recipes.json`)
      .pipe(
        map((response: Recipe[]) => {
          let recipes = response;
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        })
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
          console.log("fetching data", recipes);
        },
        err => console.log(err)
      );
  }
}
