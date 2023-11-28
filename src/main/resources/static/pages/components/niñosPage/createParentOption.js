export function createParentOption(parent) {

    const firstName = parent.firstName;
    const lastName = parent.lastName;
    const dni = parent.dni;

    const select1 = document.getElementById("parent1");
    const select2 = document.getElementById("parent2");



    const newOption = document.createElement("option");
    newOption.textContent = lastName + ", " + firstName +", DNI: " + dni;
    newOption.value = lastName + ", " + firstName +", DNI: " + dni;

    const newOptionClone = newOption.cloneNode();
    newOptionClone.textContent = lastName + ", " + firstName +", DNI: " + dni;
    newOptionClone.value = lastName + ", " + firstName +", DNI: " + dni;

    select1.appendChild(newOption);
    select2.appendChild(newOptionClone);


}