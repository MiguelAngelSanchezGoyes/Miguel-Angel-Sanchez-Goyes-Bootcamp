import Header from './header.js';
import Main from './main.js';

function app() {
  console.log('Index loaded');
  new Header('.header');
  new Main('.main');
}

document.addEventListener('DOMContentLoaded', app);
