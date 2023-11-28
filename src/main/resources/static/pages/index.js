import { addNavbarListeners } from "./components/addNavbarListeners.js";
import { updateSearchBy } from "./components/updateSearchBy.js";
import { setupMutationObserver } from "./components/setupMutationObserver.js";


window.addEventListener('DOMContentLoaded', () => {
    addNavbarListeners();

    window.updateSearchBy = updateSearchBy;

    const dynamicContainer = document.getElementById('contentContainer');
    setupMutationObserver(dynamicContainer);



  });
