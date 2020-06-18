import { Component, OnInit } from '@angular/core';
import { Reservation } from '../newReservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  newReservation: Reservation = new Reservation();

  constructor() { }

  ngOnInit(): void {
  }

  add() {

  }

  reset() {
    this.newReservation = new Reservation();
  }

}
