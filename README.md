# JCSS

CSS only Framework utilizing CSS Variables and Flexbox

## Purpose of the app:

JCSS is birthed from the desire to create a CSS framework that allows for easily customizable themes, without the need of a CSS Pre-processor such as Sass or Less.

## How to use:

JCSS can be used in one of two ways: importing the [CSS](https://github.com/jon-cundiff/jcss) into HTML and using appropriate class names, or installing the [JCSS React Component Library](https://github.com/jon-cundiff/jcss-components) and importing the needed components in your React components.

### Importing into an html document

```html
<link rel="stylesheet" href="https://jcss-static.pages.dev/jcss.min.css" />
```

### Installing JCSS React Component Library

Installing

```zsh
npm i @jon-cundiff/jcss-components
```

Importing needed components.

```js
import { Row, Column, Button } from "@jon-cundiff/jcss-components";
```

For full documentation regarding usage, refer to the [documentation site](https://jcss.pages.dev/)

## Features of the App

The [documentation site](https://jcss.pages.dev/) frontend was created using the JCSS React Component Library. The documentation site also features a theme generator that allows users to create new themes and get live previews of how the theme looks across the entire site. Themes can be saved to the user's account or can be downloaded as a separate CSS file to be used in conjunction with JCSS in a different website.

## Live Link

https://jcss.pages.dev/

## Featured Technologies

HTML, CSS (including CSS Variables and Flexbox), JavaScript, React, Redux, Node.js, Socket.IO

## Database:

PostgreSQL using Sequelize ORM 
