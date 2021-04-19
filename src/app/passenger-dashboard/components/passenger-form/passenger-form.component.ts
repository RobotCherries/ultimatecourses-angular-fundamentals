import { Component, Input } from "@angular/core";
import Passenger from "../../models/passenger.model";

@Component({
  selector: "app-passenger-form",
  templateUrl: "./passenger-form.component.html",
  styleUrls: ["./passenger-form.component.scss"]
})
export class PassengerFormComponent {
  @Input() passenger: Passenger;

  constructor() {}
}
