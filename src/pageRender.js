import './style.css';
import octocat from './Octocat.png';
import { homeContent, menuContent, contactContent } from './content.js';

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
    
    // Clear content
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    switch(page) {

        case 'Home':
            // Create and add home content
            content.appendChild(createContainer(homeContent));
            break;

        case 'Menu':
            //Create and add menu content
            content.appendChild(createMenuContainer(menuContent.Appetizers));
            content.appendChild(createMenuContainer(menuContent.Mains));
            content.appendChild(createMenuContainer(menuContent.Desserts));
            content.appendChild(createMenuContainer(menuContent.Cocktails));
            break;
        case 'Contact':

            //load contact content
            content.appendChild(createContactContainer(contactContent));
            break;
    }
}

// Returns container with food items listed in array
function createMenuContainer(foodItems) {
    const menuCont = document.createElement('div');
    menuCont.classList.add('container');

    //Add menu section title and line <hr> 
    menuCont.appendChild(makeElement(foodItems[0])).appendChild(makeElement(foodItems[1]));

    //Add food items 
    const gridCont = document.createElement('div');
    gridCont.classList.add('menuContainerRow');
    foodItems.slice(2).forEach(item => {
        gridCont.appendChild(createFoodItem(item));
    });
    menuCont.appendChild(gridCont);

    return menuCont;
}

function createFoodItem(item) {
    // container for food item
    const foodItem = document.createElement('div');
    foodItem.classList.add('menuItem');
    
    // picture element
    const foodPic = new Image(300, 250);
    foodPic.classList.add('foodPic');
    foodPic.src = item.pic;

    // add name
    const foodName = document.createElement('h2');
    foodName.textContent = item.name;

    // add description
    const foodDesc = document.createElement('p');
    foodDesc.textContent = item.description;

    // add price
    const foodPrice = document.createElement('h3');
    foodPrice.textContent = item.price;

    foodItem.append(foodPic, foodName, foodDesc, foodPrice);

    return foodItem;
}
function createContactContainer(contactObj) {
    const container = document.createElement('div');
    container.classList.add('container');

    const subCont = document.createElement('div');
    subCont.classList.add('menuContainerRow');
    
    // Add location info (left)
    const left = document.createElement('div');
    left.classList.add('contactSection');
    contactObj.Location.forEach(obj => {
        left.appendChild(makeElement(obj));
    });
    // left.appendChild(makeElement(contactObj.Location[0]));
    // left.appendChild(makeElement(contactObj.Location[1]));
    const locImg = new Image(300, 300);
    locImg.src = contactObj.pic;
    left.appendChild(locImg);

    // Add Hours, phone number, email (right)
    const right = document.createElement('div');
    right.classList.add('contactSection');
    contactObj.Hours.forEach(obj => {
        right.appendChild(makeElement(obj));
    });
    
    subCont.append(left, right);
    container.appendChild(subCont);
    return container;
}
// Returns container with objects contained in array 'content'
function createContainer(content) {
    const container = document.createElement('div');
    container.classList.add('container');
    content.forEach(obj => {
        container.appendChild(makeElement(obj));
    })
    return container;
}

function makeElement(item) {
    const element = document.createElement(item.el);
    if (item.text) element.textContent = item.text;
    if (item.class) element.classList.add(item.class);
    if (item.child) item.child.forEach(child => {
        element.appendChild(makeElement(child));
    });
    return element;
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