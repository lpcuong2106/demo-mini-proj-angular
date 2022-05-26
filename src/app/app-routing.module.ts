import { RecipeDetailComponent } from './client/recipe-detail/recipe-detail.component';
import { NotFoundComponent } from './client/not-found/not-found.component';
import { ShoppingListComponent } from './client/shopping-list/shopping-list.component';
import { RecipesComponent } from './client/recipes/recipes.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './client/edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // redirect to `recipes` when match full path
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: EditRecipeComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', component: NotFoundComponent }, // will render when all path not match
];

// const routes: Routes = [
//   // { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // redirect to `recipes` when match full path
//   {
//     path: 'admin',
//     loadChildren: () =>
//       import('./admin/admin-route.module').then((m) => m.AdminRoutingModule),
//   },
//   { path: '**', component: NotFoundComponent }, // will render when all path not match
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
