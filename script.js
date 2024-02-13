// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.getElementById('links-container');
    const addLinkBtn = document.getElementById('add-link-btn');

    function createLinkCard(title, url) {
        const linkCard = document.createElement('div');
        linkCard.classList.add('link-card');

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        linkCard.appendChild(titleElement);

        const urlElement = document.createElement('a');
        urlElement.textContent = url;
        urlElement.href = url;
        linkCard.appendChild(urlElement);

        return linkCard;
    }

    function addLink(title, url) {
        const newLinkCard = createLinkCard(title, url);
        linksContainer.appendChild(newLinkCard);
    }

    addLinkBtn.addEventListener('click', () => {
        const title = prompt('Enter the title of the link:');
        const url = prompt('Enter the URL of the link:');

        if (title && url) {
            addLink(title, url);
        }
    });

    // You can pre-populate the dashboard with some example links
    addLink('Example 1', 'https://github.com/MANU-de/CARDS');
    addLink('Example 2', 'https://github.com/MANU-de/CARDS');
});