import { Vehicle } from "./Vehicle.js";
import { Stay } from "./Stay.js";


export class OfficialVehicle extends Vehicle{

    constructor(plate:string){
        super(plate);
    }

    manageExit(stay:Stay):void{
        stay.exitDateTime = new Date();
    }
}