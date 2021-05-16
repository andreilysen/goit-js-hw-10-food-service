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
    else {
        body.classList.add(Theme.LIGHT)

    }
};

reload();

const replaceTheme = (oldTheme, newTheme) => {
    body.classList.remove(oldTheme);
    body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme)
}

const changeTheme = (click) => {
    if (themeToggle.checked) {
        replaceTheme(Theme.LIGHT, Theme.DARK)
    }
    else {
        replaceTheme(Theme.DARK, Theme.LIGHT)
    }        
}

themeToggle.addEventListener('click', changeTheme);