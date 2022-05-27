import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { BaseClientLayoutComponent } from './base-client-layout/base-client-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaseClientLayoutComponent,
    children: [
      {
        path: 'recipes',
        component: RecipesComponent,
        children: [
          { path: ':id', component: RecipeDetailComponent },
          { path: ':id/edit', component: EditRecipeComponent },
        ],
      },
      { path: 'shopping-list', component: ShoppingListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [BaseClientLayoutComponent],
})
export class ClientRoutingModule {}
