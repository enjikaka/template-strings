const fetch = require('node-fetch');

String.template = require('./index.js');

const template = '<div>Hello ${this.name}!</div>';
const json = { name: 'World' };

const html = String.template(template, json);

console.log(html);

const menuItems = [
  'Home',
  'About',
  'Portfolio',
  'Contact'
];

const menuItemTemplate = '<div class="item" itemprop="name"><a href="${this.menuItem}" itemprop="url">${this.menuItem}</a></div>';
const menuItemsHTML = menuItems.map(menuItem => String.template(menuItemTemplate, { menuItem })).join('');

console.log(menuItemsHTML);

const url = 'https://api.saoir.se/track/tidal/66522953';
const mediaItemTemplate = '${this.artist} - ${this.name}';

fetch(url).then(response => response.json())
  .then(json => String.template(mediaItemTemplate, json))
  .then(html => console.log(html));

/* Result: Eva Weel Skram - Selmas sang (fra Snøfall) */
