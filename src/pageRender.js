import './style.css';
import octocat from './Octocat.png';
import { homeContent } from './content.js'

function initialPageLoad() {
    
    // Create Title
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Manchurian Delight';

    // Create Navigation Bar with Tabs
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    navBar.appendChild(createTab('Home'));
    navBar.appendChild(createTab('Menu'));
    navBar.appendChild(createTab('Contact'));

    // Append Title and Navigation Bar to Header
    document.querySelector('header').append(title, navBar);

    // Create footer
    createFooter();

    // Load Home
    loadContent('Home');

}

function createTab(tabName) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = tabName;
    tab.addEventListener('click', event => loadContent(event.target.textContent));
    return tab;
}

function loadContent(page) {
    
    const content = document.getElementById('content');
    
    switch(page) {
        case 'Home':
            // Create and add home content
            content.appendChild(createContainer(homeContent));
            break;
        case 'Menu':

            //load menu content
            console.log('Menu content!');
            break;
        case 'Contact':

            //load contact content
            break;
    }
}

function createContainer(content) {
    const container = document.createElement('div');
    container.classList.add('container');
    content.forEach(obj => {
        const item = document.createElement(obj.el);
        item.textContent = obj.text;
        item.classList.add(obj.class);
        container.appendChild(item);
    })
    return container;
}

function createFooter() {
    const footer = document.querySelector('footer');
    const text = document.createElement('small');
    const link = document.createElement('a');
    const img = document.createElement('input');
    
    text.textContent = `\u00A9 Copyright `;
    text.textContent += new Date().getFullYear();
    text.textContent += ', sumedh-inamdar';

    link.href = 'https://github.com/sumedh-inamdar';
    link.target = '_blank';
    link.title = 'Link to personal Github';

    img.type = "image";
    img.alt = "Github";
    img.src = octocat;
    link.appendChild(img);

    footer.append(text, link);
}

export { initialPageLoad };