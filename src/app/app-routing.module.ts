import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishesComponent } from './dishes/dishes.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BillsComponent } from './bills/bills.component';
import { EmployeeComponent } from './employee/employee.component';
import { StoreroomComponent } from './storeroom/storeroom.component';
import { DishTypeComponent } from './dish-type/dish-type.component';
import { AddDishTypeComponent } from './add-dish-type/add-dish-type.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'empl', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dishes', component: DishesComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'bills', component: BillsComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'storeroom', component: StoreroomComponent},
  { path: 'dishtype', component: DishTypeComponent},
  { path: 'adddishtype', component: AddDishTypeComponent},
  { path: 'addemployee', component: AddEmployeeComponent},
  { path: 'reservations', component: ReservationsComponent},
  { path: 'adddish', component: AddDishComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
