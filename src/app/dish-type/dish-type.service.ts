import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DishType } from '../dishType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishTypeService {

  constructor(private http: HttpClient) { }


  getDishTypes(): Observable<DishType[]> {
    return this.http.get<DishType[]>('http://localhost:8080/v1/dish-type');
  }

  addDishType(dish: DishType) {

    this.http.post<string>('http://localhost:8080/v1/dish-type', dish).subscribe(response => {
        console.log(response);
      }
    );
  }

}
