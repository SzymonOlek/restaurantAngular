import { Injectable } from '@angular/core';
import { Reservation } from '../newReservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }


getReservations(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>('http://localhost:8080/v1/reservation');
}

addReservation(reservation: Reservation) {

  this.http.post<string>('http://localhost:8080/v1/reservation', reservation).subscribe(response => {
      console.log(response);
    }
  );
}

}
