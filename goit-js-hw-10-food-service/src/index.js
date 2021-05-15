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

const reload = () => {
    const check = localStorage.getItem('theme');
    if (check === Theme.DARK) {
        themeToggle.checked = true
        body.classList.add(Theme.DARK);
    }
};

body.classList.add(reload());

const saveTheme = () => {
    if (themeToggle.checked) {
        console.log(themeToggle.checked)
        localStorage.setItem('theme', Theme.DARK)
    }
    else {
        localStorage.removeItem('theme')
    }
}

const changeTheme = (click) => {
    if (themeToggle.checked) {
        // body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        saveTheme()
    }
    else {
        // body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        saveTheme()
    }        
}
themeToggle.addEventListener('click', changeTheme);