import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import Passenger from "../passenger-dashboard/models/passenger.model";
import { PassengerService } from "../passenger-dashboard/passegner.service";

@Component({
  selector: "app-passenger-viewer",
  templateUrl: "./passenger-viewer.component.html",
  styleUrls: ["./passenger-viewer.component.css"]
})
export class PassengerViewerComponent implements OnInit {
  passenger: Observable<Passenger>;

  constructor(private passengerService: PassengerService) {}

  ngOnInit() {}

  getPassenger(): void {
    this.passenger = this.passengerService.getPassenger("1");
  }
}
