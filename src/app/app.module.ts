import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShoppingList } from "./shopping-list/shopping-list.component";
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { EditShoppingListComponent } from './edit-shopping-list/edit-shopping-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-item/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [AppComponent, ShoppingList, RecipeListComponent, EditShoppingListComponent, RecipeItemComponent, RecipeDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
