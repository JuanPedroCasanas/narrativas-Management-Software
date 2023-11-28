import { updateSearchBy } from "../updateSearchBy.js";
import { setupFormValidation } from "../setupFormValidation.js";
import { navigation } from "../navigation.js";
export function handleNiñosPage() {
                const searchOptions = document.querySelectorAll(".dropdown-item"); //Sets up the search options changing on click
                searchOptions.forEach(option => {
                    option.addEventListener("click", () => updateSearchBy(option.dataset.value, document.querySelector(".searchOptions")));
                })

                setupFormValidation(document.getElementById("submitButton"), document.getElementById("newChildForm"), "niños");
              
                navigation('childrenRecords');
}