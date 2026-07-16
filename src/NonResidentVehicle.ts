import { Vehicle } from "./Vehicle.js";
import { Stay } from "./Stay.js";

export class NonResidentVehicle extends Vehicle{

    constructor(plate:string){
        super(plate);
    }

    manageExit(stay:Stay):void{
        const priceMinute = 0.02;
        stay.exitDateTime = new Date();
        console.log(`El importe que debes abonar es de ${stay.calculateStayMinutes()*priceMinute}`);
    }
}