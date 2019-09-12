import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
// import { IRecipe } from "./recipe";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a test",
      "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn"
    )
  ];

  // using interface

  constructor() {}

  ngOnInit() {}
}
