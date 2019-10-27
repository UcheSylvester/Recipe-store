import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  url = "https://ng-recipe-book-b5e10.firebaseio.com/";

  constructor(
    private http: HttpClient,
    private recipeService: RecipesService
  ) {}

  storeRecipes(): Observable<Recipe[]> {
    return this.http.put<Recipe[]>(`${this.url}recipes.json`, this.recipeService.getRecipes());
  }
}
