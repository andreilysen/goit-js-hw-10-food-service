import template from './templateCard.hbs'
import menu from './menu.json'

import './styles.css';

const menuRef = document.querySelector('.js-menu');
    console.log(menuRef)

function createMenu(menu){
    return menu.map(template).join('');
}
const menuMarcUp = createMenu(menu)
console.log(menuMarcUp)
menuRef.insertAdjacentHTML('beforeend', menuMarcUp)