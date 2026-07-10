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

    calculateStayMinutes():number {
        let stayTime = 0;
        if (this.#exitDateTime) {
            stayTime =  parseFloat(((this.#exitDateTime.getTime() - this.#entryDateTime.getTime())/6000).toFixed(2));
        }
        return stayTime; 
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

    manageExit(stay:Stay):void{
        stay.exitDateTime = new Date();//añadir los minutos
        this.addTimeOfCurrentStay(stay.calculateStayMinutes());//registrar hora de salida en las estancia
    }

}

//proceso nueva entrada de vehiculo -> Parking
//tendremos que registrar el vehiculo: crear una nueva entrada al que tendremos que pasarle el objeto vehiculo y la hora de entrada
//añadiremos esa estancia recién creada a la lista de estacias del parking