// Vehicle, OfficialVehicle, ResidentVehicle, NonResidentVehicle
// Parking, Stay

class Stay {
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
}

class Vehicle {

    #plate: string;

    constructor(plate: string){
        this.#plate = plate;
    }

    get plate() {
        return this.#plate;
    }

}

class ResidentVehicle extends Vehicle{

    #parkedTimeCurrentMonth: number = 0;

    constructor(plate:string){
        super(plate);
    }

    get parkedTimeCurrentMonth() {
        return this.#parkedTimeCurrentMonth;
    }

    addTimeOfCurrentStay(minutes:number):void{
        this.#parkedTimeCurrentMonth += minutes;
    }

    calculateStayMinutes(stay:Stay):number {
        return stay.exitDateTime!.getTime() - stay.entryDateTime.getTime();
    }
       
    manageExit(stay:Stay):void{
        stay.exitDateTime = new Date();//añadir los minutos
        this.addTimeOfCurrentStay(this.calculateStayMinutes(stay));//registrar hora de salida en las estancia
    }

}

//proceso nueva entrada de vehiculo -> Parking
//tendremos que registrar el vehiculo: crear una nueva entrada al que tendremos que pasarle el objeto vehiculo y la hora de entrada
//añadiremos esa estancia recién creada a la lista de estacias del parking