export interface Checkin {
      id : number;
      staffId : number;
      customerId : number;
      vehicalId : number;
      staffName : string;
      customerName : string;
      vehicalLicensePlate : string;
      vehicalDescription : string;
      isCheckOut : boolean;
      dateOfCheckIn : Date;
}
