import { Injectable } from '@angular/core';
import { Dish } from '../dish';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private http: HttpClient) { }

  getDish(): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://localhost:8080/v1/dish');
  }

  addDish(dish: Dish) {
    this.http.post<string>('http://localhost:8080/v1/dish', dish).subscribe(response => {
        console.log(response);
      }
    );
  }

}
