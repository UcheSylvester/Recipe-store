import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  ElementRef,
  Output
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const ingName = nameInput.value;
    const ingAmount = +amountInput.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    // adding new ingredient to ingredients
    this.shoppingListService.addIngredient(newIngredient);
  }
}
