import { RecipeService } from 'src/app/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  recipeId = '';
  recipe = {
    id: 1,
    name: '',
  };
  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id') || '';
    console.log('snapshot: ' + this.recipeId);
    const recipe = this.recipeService.getRecipeById(this.recipeId);
    if (recipe) {
      this.recipe = {
        id: recipe.id,
        name: recipe.name,
      };
    }
    // this.route.params.subscribe((param) => {
    //   const id = param['id'];
    //   console.log('subscript: ' + id);
    //   const recipe = this.recipeService.getRecipeById(id);
    //   if (recipe) {
    //     this.recipe = {
    //       id: recipe.id,
    //       name: recipe.name,
    //     };
    //   }
    // });
  }
}
