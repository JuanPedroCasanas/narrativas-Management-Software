import { fetchParentByDni } from "../fetchParentByDni.js";

export function sendChildPostRequest(lastName, firstName, dni, birthDate, parent1, parent2) {




    const childData = { 
        lastName: lastName, 
        firstName: firstName,
        dni: dni,
        birthDate: birthDate,
        parent1: fetchParentByDni(parent1),
        parent2: fetchParentByDni(parent2)
    };





    const requestOptions = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(childData) };
        fetch("/addChild", requestOptions)
        .then(response => response.ok ? response.text() : Promise.reject(new Error("Fallo en la conexión")))
        .then(childData => console.log("Objeto añadido:", childData))
        .catch(error => console.error("Fallo en la carga del niño:", error.message));
}