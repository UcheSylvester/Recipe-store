import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  url = "https://ng-recipe-book-b5e10.firebaseio.com/";

  constructor(
    private http: HttpClient,
    private recipeService: RecipesService,
    private authService: AuthService
  ) {}

  storeRecipes(): Observable<Recipe[]> {
    const token = this.authService.getToken();
    return this.http.put<Recipe[]>(
      `${this.url}recipes.json?auth=${token}`,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http
      .get(`${this.url}/recipes.json?auth=${token}`)
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
