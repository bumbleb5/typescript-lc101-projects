import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        // I needed to initialize empty arrays right?????
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass(items: Payload[]): number {
        // Returns the sum of all items using each item's massKg property
        let sum: number = 0;
        // console.log(items);
        // for (let i: number = 0; i < items.length; i++) {
        //     sum+=items[i].massKg;
        // }
        items.forEach((item) => {
            sum+=item.massKg;
        });
        return sum;
    }
    currentMassKg(): number {
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let astroMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        return astroMass + cargoMass;
    }
    canAdd(item: Payload): boolean {
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }
    addCargo(cargo: Cargo): boolean {
        // Uses this.canAdd() to see if another item can be added.
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
    }
}