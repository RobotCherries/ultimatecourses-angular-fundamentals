import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import Passenger from "./models/passenger.model";

const API_ENDPOINT: string = "https://607d6204184368001769d99a.mockapi.io/api/";
const LOCAL_ENDPOINT: string = "/assets/db.json";

@Injectable({
  providedIn: "root"
})
export class PassengerService {
  apiBaseUrl: string = API_ENDPOINT;

  constructor(private httpClient: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient
      .get(`${this.apiBaseUrl}/passengers`)
      .pipe(map((passengers: Passenger[]) => passengers));
  }

  getPassenger(id: string): Observable<Passenger> {
    return this.httpClient
      .get(`${this.apiBaseUrl}/passengers/${id}`)
      .pipe(map((passenger: Passenger) => passenger));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient
      .put(`${this.apiBaseUrl}/passengers/${passenger.id}`, passenger)
      .pipe(map((passenger: Passenger) => passenger));
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient
      .delete(`${this.apiBaseUrl}/passengers/${passenger.id}`)
      .pipe(map((passenger: Passenger) => passenger));
  }
}
