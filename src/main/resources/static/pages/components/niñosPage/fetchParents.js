import { createParentOption } from "./createParentOption.js";
import { deletePreviousParentRecords } from "./deletePreviousParentRecords.js";
export async function fetchParents() {
    deletePreviousParentRecords("parentOption");
    fetch("/getParents")
    .then(response => response.ok ? response.text() : Promise.reject(new Error("Fallo en la conexión")))
    .then(responseText => JSON.parse(responseText))
    .then(parentsArray => parentsArray.forEach( ( parent ) => createParentOption(parent)))
    .catch(error => console.error("Fallo en la carga del niño:", error.message));

}