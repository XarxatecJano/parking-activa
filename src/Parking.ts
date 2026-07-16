import { Vehicle } from "./Vehicle.js";
import { Stay } from "./Stay.js";
import { OfficialVehicle } from "./OfficialVehicle.js";

export class Parking {
    #registeredVehicles: Array<Vehicle> = [];
    #stays: Array<Stay> = [];

    get registeredVehicles() {
       return this.#registeredVehicles;
    }
    
    get stays(){
        return this.#stays;
    }

    addVehicle(newVehicle: Vehicle){
        this.#registeredVehicles.push(newVehicle);
    }

    addStay(newStay: Stay){
        this.#stays.push(newStay);
    }

    findVehicle(plate: string): Vehicle|undefined{
        return this.#registeredVehicles.find(v => v.plate == plate)
    }

    findStayToManageExit(plate: string):Stay|undefined{
        return this.#stays.find(s=>s.vehicle.plate == plate);
    }

    removeOfficialStays(): void {
      this.#stays = this.#stays.filter(s => !(s.vehicle instanceof OfficialVehicle));
    }
}