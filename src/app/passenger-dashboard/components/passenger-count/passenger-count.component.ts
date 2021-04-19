import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Passenger from "../../models/passenger.model";

@Component({
  selector: "app-passenger-count",
  templateUrl: "./passenger-count.component.html",
  styleUrls: ["./passenger-count.component.scss"]
})
export class PassengerCountComponent implements OnInit {
  @Input() passengers: BehaviorSubject<Passenger[]>;

  constructor() {}

  ngOnInit() {}

  checkInCount(): number {
    return this.passengers.value?.filter((p: Passenger) => p.isCheckedIn)?.length;
  }
}
