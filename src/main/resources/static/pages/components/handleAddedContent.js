import { handleNiñosPage } from "./niñosPage/handleNiñosPage.js";
import { handlePadresPage } from "./padresPage/handlePadresPage.js";
export function handleAddedContent() {
    const addedBody = document.getElementById("addedBody");
    const pageToHandle = addedBody.className;

    


    switch(pageToHandle) {
        case 'niñosPage':
            handleNiñosPage();
            break;
        case 'padresPage':
            handlePadresPage();
            break;
    }
}