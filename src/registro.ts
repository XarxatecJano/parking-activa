import { ResidentVehicle } from "./ResidentVehicle.js";
import { OfficialVehicle } from "./OfficialVehicle.js";
import { Vehicle } from "./Vehicle.js";
import { Parking } from "./Parking.js";

const parking = new Parking();

const residentVehicles = localStorage.getItem("residentVehicles");
let residentVehiclesList: Vehicle[] = [];
if (residentVehicles) {residentVehiclesList = JSON.parse(residentVehicles)};
const officialVehicles = localStorage.getItem("officialVehicles");
let officialVehiclesList: Vehicle[] = [];
if (officialVehicles) {officialVehiclesList= JSON.parse(officialVehicles)};
residentVehiclesList.forEach(vehicle=>{ parking.registeredVehicles.push(vehicle)});
officialVehiclesList.forEach(vehicle=>{ parking.registeredVehicles.push(vehicle)});

document.querySelector("#registro_residente")?.addEventListener("click", e => {
    const plate = (document.querySelector("#plate_input") as HTMLInputElement).value;
    const vehicle = new ResidentVehicle(plate);
    parking.registeredVehicles.push(vehicle);
    localStorage.setItem("residentVehicles", JSON.stringify(parking.registeredVehicles.filter(vehicle => {vehicle instanceof ResidentVehicle})));
    console.log(parking);
});

document.querySelector("#registro_oficial")?.addEventListener("click", e=>{
    const plate = (document.querySelector("#plate_input") as HTMLInputElement).value;
    const vehicle = new OfficialVehicle(plate);
    parking.registeredVehicles.push(vehicle);
    localStorage.setItem("officialVehicles", JSON.stringify(parking.registeredVehicles.filter(vehicle => {vehicle instanceof OfficialVehicle})));
    console.log(parking);
});

