import { Vehical } from "./verhical.interface";

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  password: string;
  status: boolean;
  name: string;
  gender: boolean;
  birthday:  string;
  phoneNumber: string;
  class: string;
  facultyId: string,
  falcultyName: string,
  vehicals: Vehical[]
}
