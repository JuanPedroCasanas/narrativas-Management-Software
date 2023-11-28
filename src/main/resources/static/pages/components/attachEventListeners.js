import { updateSearchBy } from "./updateSearchBy.js";

export function attachEventListeners(container) {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(function (element) {
        element.addEventListener('click', () => {
            updateSearchBy(element.dataset.value);
        });
    });
}