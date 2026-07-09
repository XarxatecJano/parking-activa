// Vehicle, OfficialVehicle, ResidentVehicle, NonResidentVehicle
// Parking, Stay

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
       
    manageExit():void{//le paso como parametro una estancia
        //añadir los minutos
        //registrar hora de salida en las estancia
    }

}

//proceso nueva entrada de vehiculo -> Parking
//tendremos que registrar el vehiculo: crear una nueva entrada al que tendremos que pasarle el objeto vehiculo y la hora de entrada
//añadiremos esa estancia recién creada a la lista de estacias del parking