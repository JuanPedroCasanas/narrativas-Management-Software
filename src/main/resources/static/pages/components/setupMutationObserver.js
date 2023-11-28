import { handleAddedContent } from "./handleAddedContent.js";
export function setupMutationObserver(targetElement) {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                handleAddedContent();
            }
        });
    });

    const observerOptions = { childList: true, subtree: true };
    observer.observe(targetElement, observerOptions);
}