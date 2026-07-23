import { Stay } from "./Stay.js";
import { Vehicle } from "./Vehicle.js";
import { Parking } from "./Parking.js";
import { NonResidentVehicle } from "./NonResidentVehicle.js";
import { OfficialVehicle } from "./OfficialVehicle.js";
import { ResidentVehicle } from "./ResidentVehicle.js";





/*

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

        case 6:
            let report =`MATRÍCULA       TIEMPO ESTACIONADO       IMPORTE\n`;
            parking.registeredVehicles.forEach(v=>{
                if (v instanceof ResidentVehicle) report+=`${v.plate}      ${v.parkedTimeCurrentMonth}           ${v.calculatePayment()}\n`;
            });
            break;
    }

} while(optionChoosed!=0);
*/