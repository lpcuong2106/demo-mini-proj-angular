import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { RecipesComponent } from './client/recipes/recipes.component';
import { ShoppingListComponent } from './client/shopping-list/shopping-list.component';
import { NotFoundComponent } from './client/not-found/not-found.component';
import { EditRecipeComponent } from './client/edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './client/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ShoppingListComponent,
    HomeComponent,
    NotFoundComponent,
    AdminComponent,
    // BaseLayoutComponent,
    DashboardComponent,
    UserComponent,
    EditRecipeComponent,
    RecipeDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
