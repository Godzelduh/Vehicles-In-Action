// Importing Vehicle and Wheel classes
import { log } from 'console';
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {

  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
 
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
override printDetails(): void {
  // TODO: Override the printDetails method from the Vehicle class
  super.printDetails();
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
  console.log(`VIN: ${this.vin}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight} lbs`);
  console.log(`Color: ${this.color}`);
  console.log(`Top Speed: ${this.topSpeed} mph`);

  console.log(
    `Wheels: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
  );
  console.log(
    `Wheels: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
  );
  }
};
// Export the Motorbike class as the default export
export default Motorbike;
