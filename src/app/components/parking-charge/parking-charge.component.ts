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

  constructor() { }

  ngOnInit(): void {
  }

  CalculateCharge() : void {


    let newCar = {registration: this.selectedRegistration, hoursParked: 5};
    this.listOfCharges.push(newCar);
    this.runningTotal+= this.minimumCharge;
  }

}
