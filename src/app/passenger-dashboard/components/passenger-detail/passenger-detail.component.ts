import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from "@angular/core";
import Passenger from "../../models/passenger.model";

@Component({
  selector: "app-passenger-detail",
  templateUrl: "./passenger-detail.component.html",
  styleUrls: ["./passenger-detail.component.scss"]
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input() passenger: Passenger;

  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  @Output() remove: EventEmitter<Passenger> = new EventEmitter();

  isEditable: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.passenger) {
      this.passenger = Object.assign({}, changes.passenger.currentValue);
    }
  }

  ngOnInit(): void {
    // this.passenger = Object.assign({}, this.passenger);
  }

  toggleEdit(): void {
    if (this.isEditable) this.onEdit(this.passenger);

    this.isEditable = !this.isEditable;
  }

  onChange(newName: string): void {
    this.passenger.fullName = newName;
  }

  onEdit(passenger: Passenger): void {
    this.edit.emit(passenger);
  }

  onRemove(passenger: Passenger): void {
    this.remove.emit(passenger);
  }
}
