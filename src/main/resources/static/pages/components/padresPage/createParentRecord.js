export function createParentRecord(lastName, name, dni, age, child1, child2) {
    const container = document.getElementById('parentsRecords');

    // Create the main row
    const mainRow = document.createElement('div');
    mainRow.className = 'row d-flex align-middle pt-1 pb-1';

    // Data columns
    const dataColumns = [lastName, name, dni, child1, child2];

    dataColumns.forEach((data, index) => {
        const col = document.createElement('div');
        if(index <= 2) {
            col.className = 'col-md-1';
        } else {
            col.className = 'col-md-2'; //leaves two spaced columns for child values
        }
        
        col.textContent = data;
        
        mainRow.appendChild(col);
    });

    // Buttons column
    const buttonCol = document.createElement('div');
    buttonCol.className = 'col-md-4 d-flex gap-2';

    const buttonIcons = ['search', 'pencil', 'x'];
    const buttonColors = ['primary', 'warning', 'danger'];

    buttonIcons.forEach((icon, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `btn btn-${buttonColors[index]}`;
        button.title = getButtonTitle(index);
        
        const iconElement = document.createElement('i');
        iconElement.className = `bi bi-${icon}`;

        addEventListeners(button, buttonIcons[index]);
        
        button.appendChild(iconElement);
        buttonCol.appendChild(button);
    });

    mainRow.appendChild(buttonCol);
    container.appendChild(mainRow);
}

// Helper function to get button titles
function getButtonTitle(index) {
    const titles = ['Ver en detalle', 'Editar Padre', 'Eliminar Registro'];
    return titles[index];
}
// Helper function to set button event listeners
function addEventListeners(button, action) {
    switch(action) {
        case "search":
            button.addEventListener("click", () => {console.log("search")})
            break;
        case "pencil":
            button.addEventListener("click", () => {console.log("edit")})
            break;
        case "x":
            button.addEventListener("click", () => {console.log("delete")})
            break;
        
    }
}