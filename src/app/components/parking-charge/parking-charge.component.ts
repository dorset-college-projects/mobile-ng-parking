import { Component, OnInit } from '@angular/core';
import { ParkedCar } from 'src/app/models/parked-car';

@Component({
  selector: 'app-parking-charge',
  templateUrl: './parking-charge.component.html',
  styleUrls: ['./parking-charge.component.css']
})
export class ParkingChargeComponent implements OnInit {

  runningTotal = 0;
  minimumCharge = 2;

  listOfCharges: ParkedCar[] = [];

  selectedRegistration: string = 'abcd';
  selectedHours: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  CalculateCharge(): void {

    if (isNaN(this.selectedHours) || this.selectedHours <= 0) {
      return;

    }

    
    if (this.selectedRegistration?.length == 0) {
      return;
    }

    if ( this.listOfCharges.filter(charge => charge.registration == this.selectedRegistration).length > 0 ) {

      return;
    }



    let newCar = { registration: this.selectedRegistration, hoursParked: this.selectedHours };
    this.listOfCharges.push(newCar);
    this.runningTotal += this.minimumCharge;
  }

  ResetButton(): void {

    this.runningTotal = 0;
    this.listOfCharges = [];
    this.selectedRegistration = '';

  }

}
