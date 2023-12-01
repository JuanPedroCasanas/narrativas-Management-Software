export function deletePreviousParentRecords(querySelector) {
    let elements = document.getElementsByClassName(querySelector);
    while(elements.length > 0) {
        elements[0].remove();
    }
}