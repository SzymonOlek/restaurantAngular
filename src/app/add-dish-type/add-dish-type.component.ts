import { Component, OnInit } from '@angular/core';
import { DishType } from '../dishType';
import { DishTypeService } from '../dish-type/dish-type.service';

@Component({
  selector: 'app-add-dish-type',
  templateUrl: './add-dish-type.component.html',
  styleUrls: ['./add-dish-type.component.css']
})
export class AddDishTypeComponent implements OnInit {

  constructor(private dishTypeService: DishTypeService) { }

  newDishType: DishType = new DishType();

  ngOnInit(): void {
  }

  add() {
    console.log(this.newDishType);
    this.dishTypeService.addDishType(this.newDishType);
    this.newDishType =  new DishType();
  }

  reset() {
    this.newDishType = new DishType();
  }

}
