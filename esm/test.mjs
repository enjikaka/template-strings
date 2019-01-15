import fetch from 'node-fetch';
import stringTemplator from './index.mjs';

const template = '<div>Hello ${this.name}!</div>';
const json = { name: 'World' };

const html = stringTemplator(template, json);

console.log(html);

const menuItems = [
  'Home',
  'About',
  'Portfolio',
  'Contact'
];

const menuItemTemplate = '<div class="item" itemprop="name"><a href="${this.menuItem}" itemprop="url">${this.menuItem}</a></div>';
const menuItemsHTML = menuItems.map(menuItem => stringTemplator(menuItemTemplate, { menuItem })).join('');

console.log(menuItemsHTML);

const url = 'https://api.saoir.se/track/tidal/66522953';
const mediaItemTemplate = '${this.artist} - ${this.name}';

fetch(url).then(response => response.json())
  .then(json => stringTemplator(mediaItemTemplate, json))
  .then(html => console.log(html));

/* Result: Eva Weel Skram - Selmas sang (fra Snøfall) */
