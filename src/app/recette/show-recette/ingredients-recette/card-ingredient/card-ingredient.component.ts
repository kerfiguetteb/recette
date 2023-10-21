import { Component, Input } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-card-ingredient',
  templateUrl: './card-ingredient.component.html',
  styleUrls: ['./card-ingredient.component.scss']
})
export class CardIngredientComponent {

  @Input()
  recette!: Recette

}
