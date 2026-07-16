import { Stay } from "./Stay.js";

export abstract class Vehicle {

    #plate: string;

    constructor(plate: string){
        this.#plate = plate;
    }

    get plate() {
        return this.#plate;
    }

    abstract manageExit(stay:Stay):void;

}