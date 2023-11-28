export function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('contentContainer');
            container.innerHTML = html;
            // You might want to add more logic here if needed
        })
        .catch(error => console.error('Error loading content:', error));
}