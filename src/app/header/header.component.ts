import { Component, OnInit } from "@angular/core";

import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "../recipes/recipe.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService) {}

  ngOnInit() {}

  onSaveRecipes() {
    this.dataStorage
      .storeRecipes()
      .subscribe(
        (response: Recipe[]) => console.log(response),
        error => console.log(error)
      );
  }
}
