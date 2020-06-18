import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DishesService } from '../dishes/dishes.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  constructor(private serviceDishe: DishesService) { }

  newDish: Dish = new Dish();

  ngOnInit(): void {
  }


  add() {
    console.log(this.newDish);
    this.serviceDishe.addDish(this.newDish);
    // this.newDish =  new Dish();
  }

  reset() {
    this.newDish = new Dish();
  }


}
