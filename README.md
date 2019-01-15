# Template Strings

Depedency free and easy way to use ES6 template literals with JSON, just like you hoped they'd be in the real specification!

The method takes 2 arguments, template and data. The data will be available on `this` in the template.

Example template; `<div>Hello ${this.name}!</div>`

Example data: `{ name: 'World' }`

*Note:* The "name" property of the JSON object is refered to as `this.name` in the template string.

Usage example (Node);

```
String.template = require('template-strings');

const template = '<div>Hello ${this.name}!</div>';
const json = { name: 'World' };

const html = String.template(template, json);

console.log(html);
```

Usage example (Node ESM);

```
import stringTemplator from 'template-strings';

const template = '<div>Hello ${this.name}!</div>';
const json = { name: 'World' };

const html = stringTemplator(template, json);

console.log(html);
```

Usage example (Browser ESM);

```
import stringTemplator from 'https://unpkg.com/template-strings?module';

const template = '<div>Hello ${this.name}!</div>';
const json = { name: 'World' };
const html = stringTemplator(template, json);
const div = document.createElement('div');

div.innerHTML = html;

document.body.appendChild(div);
```

( Live demo: https://codepen.io/enjikaka/pen/wRNNpr?editors=0010 )

## Why?

To get modular and reusable templates with ES6 template litterals. The template variable in the
example above could have easily been imported from a collection of templates, a HTML-file or just
about anything.

The "vanilla" way of doing this, with the angled quotes, required you to define the variables
before the template. Here that limitation is gone. You can safetly fetch you data and grab your
template and merge them together.

## Where does this work?

This will work in both node and in the browser.

## More examples

### Generating a menu

```
String.template = require('template-strings');

const menuItems = [
  'Home',
  'About',
  'Portfolio',
  'Contact'
];

const menuItemTemplate = '<div class="item" itemprop="name"><a href="${this.name}" itemprop="url">${this.name}</a></div>';
const menuItemsHTML = plugins.map(plugin => String.template(menuItemTemplate, { plugin })).join('');

console.log(menuItemsHTML);
/*

Result:

<div class="item" itemprop="name"><a href="Home" itemprop="url">Home</a></div>
<div class="item" itemprop="name"><a href="About" itemprop="url">About</a></div>
<div class="item" itemprop="name"><a href="Portfolio" itemprop="url">Portfolio</a></div>
<div class="item" itemprop="name"><a href="Contact" itemprop="url">Contact</a></div>

*/
```

### Fetching data and rendering it

```
const fetch = require('node-fetch');

String.template = require('template-strings');

const url = 'https://api.saoirse.audio/track/tidal/66522953';
const mediaItemTemplate = '${this.artist} - ${this.name}';

fetch(url).then(response => response.json())
  .then(json => String.template(mediaItemTemplate, json))
  .then(html => console.log(html));

/* Result: Eva Weel Skram - Selmas sang (fra Snøfall) */
```
