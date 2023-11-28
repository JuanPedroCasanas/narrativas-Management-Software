import { sendChildDeleteRequest } from "./sendChildDeleteRequest.js";

export function createChildRecord(lastName, name, dni, birthday, parent1, parent2) {
        const container = document.getElementById('childrenRecords');

        // Create the main row
        const mainRow = document.createElement('div');
        mainRow.className = 'row d-flex align-middle pt-1 pb-1';

        const age = getAge(birthday);

        // Data columns
        const dataColumns = [lastName, name, dni, age, parent1, parent2];

        dataColumns.forEach((data, index) => {
            const col = document.createElement('div');
            if(index <= 3) {
                col.className = 'col-md-1';
            } else {
                col.className = 'col-md-2'; //leaves two spaced columns for parent values
            }
            
            col.textContent = data;
            
            mainRow.appendChild(col);
        });

        // Buttons column
        const buttonCol = document.createElement('div');
        buttonCol.className = 'col-md-4 d-flex gap-2';

        const buttonIcons = ['search', 'pencil', 'folder-plus', 'archive', 'x'];
        const buttonColors = ['primary', 'warning', 'success', 'info', 'danger'];

        buttonIcons.forEach((icon, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `btn btn-${buttonColors[index]}`;
            button.title = getButtonTitle(index);
            
            const iconElement = document.createElement('i');
            iconElement.className = `bi bi-${icon}`;

            addEventListeners(button, buttonIcons[index], dni);
            
            button.appendChild(iconElement);
            buttonCol.appendChild(button);
        });

        mainRow.appendChild(buttonCol);
        container.appendChild(mainRow);
    }

    // Helper function to get button titles
    function getButtonTitle(index) {
        const titles = ['Ver en detalle', 'Editar Niño', 'Agregar Informe', 'Ver informes', 'Eliminar Registro'];
        return titles[index];
    }

    // Helper function to set button event listeners
    function addEventListeners(button, action, dni) {
        switch(action) {
            case "search":
                button.addEventListener("click", () => {console.log("search")})
                break;

            case "pencil":
                button.addEventListener("click", () => {console.log("edit")})
                break;

            case "folder-plus":
                button.addEventListener("click", () => {console.log("añadir informe")})
                break;

            case "archive":
                button.addEventListener("click", () => {console.log("Abrir informes")})
                break;

            case "x":
                button.addEventListener("click", () => {
                    if(confirm("¿Seguro que quiere borrar este registro?")) {
                        sendChildDeleteRequest(dni);
                    }
                })
                break;
            
        }
    }

    //helper function to get age
    function getAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }