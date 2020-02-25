import { Ingredient } from '../../shared/ingredient.model';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) name: ElementRef;
  @ViewChild('amountInput', { static: false }) amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addIngredient() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;

    const newIngredient = new Ingredient(name, amount);

    this.shoppingListService.addIngredient(newIngredient);
  }
}
