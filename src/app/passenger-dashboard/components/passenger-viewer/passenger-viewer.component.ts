import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import Passenger from "../../models/passenger.model";
import { PassengerService } from "../../passegner.service";

@Component({
  selector: "app-passenger-viewer",
  templateUrl: "./passenger-viewer.component.html",
  styleUrls: ["./passenger-viewer.component.scss"]
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private passengerService: PassengerService) {}

  ngOnInit(): void {
    this.getPassenger(1);
  }

  getPassenger(id: number): void {
    this.passengerService.getPassenger(id).subscribe({
      next: (passenger: Passenger) => {
        this.passenger = passenger;
      },
      error: (error: HttpErrorResponse) => Observable.throw(error)
    });
  }
}
