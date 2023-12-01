export async function sendChildPostRequest(lastName, firstName, dni, birthDate, parent1Dni, parent2Dni) {




    const childData = {
        lastName: lastName,
        firstName: firstName,
        dni: dni,
        birthDate: birthDate,
        parent1Dni: parent1Dni,
        parent2Dni: parent2Dni
    };

    try {
        await fetch('/addChild', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(childData)
        });
        console.log('Objeto añadido');
    } catch (error) {
        console.error('Fallo en la carga del niño:', error.message);
    }
};