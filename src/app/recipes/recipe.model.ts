// creating a model for the recipe
export class recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}

// we could still use interface here
// export interface IRecipe {
//   name: string;
//   description: string;
// }
