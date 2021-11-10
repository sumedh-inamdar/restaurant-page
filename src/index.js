import { initialPageLoad } from './pageRender.js';

// setup html
document.body.appendChild(document.createElement('header'));
const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);
document.body.appendChild(document.createElement('footer'));

initialPageLoad();


