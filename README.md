<h1 align="center">Simple-Legend</h1>

<p align="center"><img src="https://entagir.ru/img/simpleLegend.png"></p>

<h2 align="center"><a  href="https://simple-legend.entagir.ru">Live Demo</a></h2>
Simple legend for web-map.

## Installation

### In browser
Download files (simpleLegend.js, simpleLegend.css):
```html
  <link href="simpleLegend.css" rel="stylesheet">
  <script src="simpleLegend.js" charset="utf-8"></script>
```

Or use CDN:
```html
  <link href="https://cdn.jsdelivr.net/gh/entagir/simple-legend@main/simpleLegend.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/gh/entagir/simple-legend@main/simpleLegend.js" charset="utf-8"></script>
```

## Usage

Create a legend and add it to some DOM element.

```js
  let myLegend = simpleLegend.gradient(['low','middle','high'], ['rgb(0,255,0)','rgb(255,255,0)','rgb(255,0,0)'], 'title');
	
  document.body.appendChild(myLegend);
```
