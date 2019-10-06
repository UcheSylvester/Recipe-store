import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("peper", 10),
    new Ingredient("tomatoes", 40)
  ];

  ingredientAdded = new EventEmitter<Ingredient>();

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const ingName = nameInput.value;
    const ingAmount = +amountInput.value;

    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
