import Child from "./child.model";

export default class Passenger {
  id: number;
  fullName: string;
  isCheckedIn: boolean;
  children: Child[] | null;
  checkInDate: number | null;
}
