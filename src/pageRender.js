import './style.css';

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

            //load home content
            console.log('Home Content!');

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

export { initialPageLoad, loadContent };