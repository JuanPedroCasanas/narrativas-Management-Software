import { fetchParentByDni } from "../fetchParentByDni.js";

export async function sendChildPostRequest(lastName, firstName, dni, birthDate, parent1Dni, parent2Dni) {

    const childData = {
        lastName: lastName,
        firstName: firstName,
        dni: dni,
        birthDate: birthDate,
    };

    try {
        // Fetch parent data concurrently
        const parent1Data = await fetchParentByDni(parent1Dni);
        const parent2Data = (parent2Dni == null) ? null : await fetchParentByDni(parent2Dni);

        childData.parent1 = parent1Data;
        childData.parent2 = parent2Data;

        // Now you can make your POST request with childData
        await fetch('/addChild', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(childData)  // Fix the object name here
        });

        console.log('Objeto añadido');
    } catch (error) {
        console.error('Fallo en la carga del niño:', error.message);
    }
};