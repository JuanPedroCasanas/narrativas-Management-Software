export function navigation(recordsContainerId) {
    const recordsPerPage = 10;
    const recordsContainer = document.getElementById(recordsContainerId);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentPage = 0;

    function updateButtons() {
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage >= Math.ceil(recordsContainer.children.length / recordsPerPage) - 1;
    }

    function updatePage() {
        //const offset = -currentPage * recordsContainer.offsetWidth;
        //recordsContainer.style.transform = `translateX(${offset}px)`;
    }

    function renderPage(page) {
        const start = page * recordsPerPage;
        const end = start + recordsPerPage;
    
        for (let i = 0; i < recordsContainer.children.length; i++) {
            const record = recordsContainer.children[i];
            const recordClasses = record.classList;
    
            if (i >= start && i < end) {
                // Show the record
                recordClasses.add('d-flex');
                recordClasses.remove('d-none');
            } else {
                // Hide the record
                recordClasses.remove('d-flex');
                recordClasses.add('d-none');
            }
        }
    }

    prevBtn.addEventListener('click', function () {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
            updateButtons();
            renderPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', function () {
        if (currentPage < Math.ceil(recordsContainer.children.length / recordsPerPage) - 1) {
            currentPage++;
            updatePage();
            updateButtons();
            renderPage(currentPage);
        }
    });

    // Initial rendering
    renderPage(currentPage);
    updateButtons();
}