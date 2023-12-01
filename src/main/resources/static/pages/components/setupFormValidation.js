import { createChildRecord } from "./niñosPage/createChildRecord.js";
import { sendChildPostRequest } from "./niñosPage/sendChildPostRequest.js";
import { createParentRecord } from "./padresPage/createParentRecord.js";
import { fetchParentByDni } from "./fetchParentByDni.js";

export function setupFormValidation(submitBtn, form, page) {

    submitBtn.addEventListener("click", (event) => {

        event.preventDefault(); // Prevent form submission for now

        if (form.checkValidity()) {
            
            alert('Datos agregados correctamente');

            let e;

            switch(page) {
                case "niños":
                    e = form.elements;

                    let birthDate = new Date(e.birthdayField.value);

                    let parent1Dni;
                    let parent2Dni;

                    parent1Dni = e.parent1.value.split(":")[1].trim();

                    parent2Dni = (e.parent2.value) ?  e.parent2.value.split(":")[1].trim() : null;

                    let parent2 = (e.parent2.value) ?  e.parent2.value : "( ninguno )";

                    sendChildPostRequest(e.lastNameField.value, e.firstNameField.value, e.dniField.value, birthDate, parent1Dni, parent2Dni); //I send the null value in parent 2 as this is the way it should be stored in the db

                    createChildRecord(e.lastNameField.value, e.firstNameField.value, e.dniField.value, birthDate, e.parent1.value, parent2);

                    form.reset();
                    break;

                case "padres":
                    e = form.elements;
                    let child2 = (e.child2.value) ? e.child2.value : '( ninguno )';

                    createParentRecord(e.firstNameField.value, e.lastNameField.value, e.dniField.value, e.child1.value, child2);

                    form.reset();
                    break;

                case "profesionales":
                    //
                    break;
                    
            }
        } else {
            // If the form is not valid, highlight the invalid fields

            for (const element of form.elements) {
                if (( element.tagName === 'INPUT' || element.tagName === 'SELECT' ) && !element.validity.valid )  {
                    
                    element.classList.add('is-invalid');
                }
            }
        }
    });

    // Add an event listener to remove the 'is-invalid' class when the user interacts with the field
    form.addEventListener('input', (event) => {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT') {
            event.target.classList.remove('is-invalid');
        }
    });
}