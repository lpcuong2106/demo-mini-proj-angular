import { Injectable } from '@angular/core';

export type Recipe = { id: number; name: string };

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes = [
    {
      id: 1,
      name: 'Best Ever Banana Bread',
    },
    {
      id: 2,
      name: 'Cheeseburger Soup',
    },
  ];

  constructor() {}

  getAll() {
    return this.recipes;
  }

  getRecipeById(id: string) {
    const recipeId = parseInt(id);
    const recipeIndex = this.recipes.findIndex(
      (recipe) => recipe.id === recipeId
    );
    if (recipeIndex != -1) {
      return this.recipes[recipeIndex];
    }
    return null;
  }
}
