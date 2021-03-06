import { Ingredient } from '../shared/ingredient.model';

// creating a model for the recipe
// export class Recipe {
//   public name: string;
//   public description: string;
//   public imagePath: string;

//   constructor(name: string, desc: string, imagePath: string) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//   }
// }

export interface Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[]
}

