import template from './templateCard.hbs'
import menu from './menu.json'

import './styles.css';

const menuRef = document.querySelector('.js-menu');
const themeToggle = document.querySelector('.theme-switch__toggle')
const body = document.querySelector('body');

const createMenu =(menu) => {
    return menu.map(template).join('');
};

const menuMarcUp = createMenu(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarcUp);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
body.classList.add(Theme.LIGHT)
const reload = () => {
    const check = localStorage.getItem('theme');
    if (check === Theme.DARK) {
        themeToggle.checked = true
        body.classList.add(Theme.DARK);
    }
};

reload();

const changeTheme = (click) => {
    if (themeToggle.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK)
    }
    else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT)
    }        
}
themeToggle.addEventListener('click', changeTheme);