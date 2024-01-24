import { datosCita, nuevaCita } from "../funciones.js";
import {
    mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario 
} from "../selectores.js"

export class App {
    constructor(){
        this.initApp(); // Ejecuta el metodo
    }
    initApp(){
        mascotaInput.addEventListener('input', datosCita);
        propietarioInput.addEventListener('input', datosCita);
        telefonoInput.addEventListener('input', datosCita);
        fechaInput.addEventListener('input', datosCita);
        horaInput.addEventListener('input', datosCita);
        sintomasInput.addEventListener('input', datosCita);

        //Formulario para nuevas citas
        formulario.addEventListener('submit', nuevaCita);
    }
}

