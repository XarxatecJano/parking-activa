import { Vehicle } from "./Vehicle.js";

export class Stay {
    #vehicle: Vehicle;
    #entryDateTime: Date;
    #exitDateTime?: Date;

    constructor(vehicle: Vehicle){
        this.#vehicle = vehicle;
        this.#entryDateTime = new Date();
    }

    get vehicle() {
        return this.#vehicle;
    }

    get entryDateTime() {
        return this.#entryDateTime;
    }

    get exitDateTime():Date|undefined {
        return this.#exitDateTime;
    }

    set exitDateTime(exitTime: Date){
        this.#exitDateTime = exitTime;
    }

    calculateStayMinutes():number {
        let stayTime = 0;
        if (this.#exitDateTime) {
            stayTime =  parseFloat(((this.#exitDateTime.getTime() - this.#entryDateTime.getTime())/(1000*60)).toFixed(2));
        }
        return stayTime; 
    }
}

