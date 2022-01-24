import Header from './header.js';

function app() {
  console.log('Index loaded');
  new Header('.header');
}

document.addEventListener('DOMContentLoaded', app);
