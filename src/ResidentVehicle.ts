import { Stay } from "./Stay.js";
import { Vehicle } from "./Vehicle.js";


export class ResidentVehicle extends Vehicle{

    #parkedTimeCurrentMonth: number = 0;
    #priceMinuteParking: number = 20;

    constructor(plate:string){
        super(plate);
    }

    get parkedTimeCurrentMonth() {
        return this.#parkedTimeCurrentMonth;
    }

    addTimeOfCurrentStay(minutes:number):void{
        this.#parkedTimeCurrentMonth += minutes;
    }

    manageExit(stay:Stay):void{
        stay.exitDateTime = new Date();
        this.addTimeOfCurrentStay(stay.calculateStayMinutes());
    }

    restartParkingTime():void{
        this.#parkedTimeCurrentMonth = 0;
    }

    calculatePayment():number{
        return parseFloat((this.#parkedTimeCurrentMonth * this.#priceMinuteParking).toFixed(2));
    }
    
}