import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";
// import { IRecipe } from "./recipe";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipesService.recipeChanged.subscribe(
      (recipe: Recipe[]) => (this.recipes = recipe)
    );
    this.recipes = this.recipesService.getRecipes();
  }

  newRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
