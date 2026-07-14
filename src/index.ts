
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
            stayTime =  parseFloat(((this.#exitDateTime.getTime() - this.#entryDateTime.getTime())/(1000*60)).toFixed(2));
        }
        return stayTime; 
    }
}

abstract class Vehicle {

    #plate: string;

    constructor(plate: string){
        this.#plate = plate;
    }

    get plate() {
        return this.#plate;
    }

    abstract manageExit(stay:Stay):void;

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
        stay.exitDateTime = new Date();
        this.addTimeOfCurrentStay(stay.calculateStayMinutes());
    }

    restartParkingTime():void{
        this.#parkedTimeCurrentMonth = 0;
    }

}

class OfficialVehicle extends Vehicle{

    constructor(plate:string){
        super(plate);
    }

    manageExit(stay:Stay):void{
        stay.exitDateTime = new Date();
    }
}

class NonResidentVehicle extends Vehicle{

    constructor(plate:string){
        super(plate);
    }

    manageExit(stay:Stay):void{
        const priceMinute = 0.02;
        stay.exitDateTime = new Date();
        console.log(`El importe que debes abonar es de ${stay.calculateStayMinutes()*priceMinute}`);
    }
}

class Parking {
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
    }/* findVehicle(plate:string):Vehicle|undefined{
        let response: Vehicle|undefined;
        for(let i=0; i<=this.#registeredVehicles.length; i++){
            if (this.#registeredVehicles[i].plate == plate){
                response = this.#registeredVehicles[i];
                break;
            }
        }
        return response
    }*/

    findStayToManageExit(plate: string):Stay|undefined{
        return this.#stays.find(s=>s.vehicle.plate == plate);
    }

    removeOfficialStays(): void {
      this.#stays = this.#stays.filter(s => !(s.vehicle instanceof OfficialVehicle));
    }
}

let optionChoosed: number;
const parking = new Parking();

do {
    console.log("===== APARCAMIENTO =====\n1. Registrar entrada\n2. Registrar salida\n3. Dar de alta vehículo oficial\n4. Dar de alta vehículo de residente\n5. Comienza mes\n6. Generar informe de pagos de residentes\n0. Salir\nElige una opción:");
    optionChoosed = parseInt(prompt("Elige una opción(0-6)")??"0");
    let plate: string|null;
    let vehicle: Vehicle|undefined;
    switch (optionChoosed) {
        case 1:
            plate = prompt("Dame la matrícula");
            vehicle = parking.findVehicle(plate!);
            if(!vehicle) vehicle = new NonResidentVehicle(plate!) 
            parking.addStay(new Stay(vehicle));
            break;
        
        case 2:
            plate = prompt("Dame la matrícula");
            const stay: Stay|undefined = parking.findStayToManageExit(plate!);
            if (stay) stay.vehicle.manageExit(stay);
            else console.log(`No hay ningún coche aparcado con esa matrícula en el Parking`);
            break;

        case 3: 
           plate = prompt("Dame la matrícula");
           vehicle = new OfficialVehicle(plate!);
           parking.addVehicle(vehicle);
           break;
        
        case 4: 
           plate = prompt("Dame la matrícula");
           vehicle = new ResidentVehicle(plate!);
           parking.addVehicle(vehicle);
           break;
        
        case 5:
            parking.removeOfficialStays();
            parking.registeredVehicles.forEach(v=>{
                if(v instanceof ResidentVehicle) v.restartParkingTime();
            });
            break;

    }

} while(optionChoosed!=0);

//proceso nueva entrada de vehiculo -> Parking
//tendremos que registrar el vehiculo: crear una nueva entrada al que tendremos que pasarle el objeto vehiculo y la hora de entrada
//añadiremos esa estancia recién creada a la lista de estacias del parking