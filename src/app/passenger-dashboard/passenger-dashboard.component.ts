import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import Passenger from "./models/passenger.model";
import { PassengerService } from "./passegner.service";

@Component({
  selector: "app-passenger-dashboard",
  templateUrl: "passenger-dashboard.component.html",
  styleUrls: ["passenger-dashboard.component.scss"]
})
export class PassengerDashboardComponent implements OnInit, OnDestroy {
  passengers: BehaviorSubject<Passenger[]> = new BehaviorSubject([]);
  getPassengersSubscription: Subscription;
  updatePassengerSubscription: Subscription;
  deletePassengerSubscription: Subscription;

  constructor(private passengerService: PassengerService) {}

  ngOnInit(): void {
    this.getPassengers();
  }

  getPassengers(): void {
    this.getPassengersSubscription = this.passengerService
      .getPassengers()
      .subscribe({
        next: (passengers: Passenger[]) => {
          this.passengers.next(passengers);
          console.log("GET Response passengers:", this.passengers);
      },
        error: (error : HttpErrorResponse) => Observable.throw(error)
      });
  }

  editPassenger(event: Passenger): void {
    this.updatePassengerSubscription = this.passengerService.updatePassenger(event).subscribe({
      next:(data: Passenger) => {
        this.passengers.next(
          this.passengers.value?.map((passenger: Passenger) => {
            if (passenger.id === event.id) passenger = Object.assign({}, passenger, event);
            return passenger;
          })
        );
        console.log("Updated passenger:", event);
      },
      error: (error: HttpErrorResponse) => Observable.throw(error)
    });
  }

  removePassenger(event: Passenger): void {
    this.deletePassengerSubscription = this.passengerService.deletePassenger(event).subscribe({
      next: (data: Passenger) => {
        this.passengers.next(
          this.passengers.value?.filter(
            (passenger: Passenger) => passenger.id !== event.id
          )
        );

      console.log("Removed passenger:", event);
    },
      error: (error: HttpErrorResponse) => Observable.throw(error)
    });
  }

  ngOnDestroy(): void {
    this.getPassengersSubscription?.unsubscribe();
    this.updatePassengerSubscription?.unsubscribe();
    this.deletePassengerSubscription?.unsubscribe();
  }
}
