import Child from "./child.model";

export default class Passenger {
  id: number;
  fullName: string;
  isCheckedIn: boolean;
  checkInDate: number | null;
  children: Child[] | null;
  baggage: string;
}
