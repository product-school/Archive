# JavaScript

JavaScript allows us to interact with, and modify, the web page.

### Concepts

* Console - A browser tool that allows us to execute JavaScript code on the current page.
* Variable - A keyword that will reference an element or other JS value. Allows that element or value to be used again throughout the code as needed.
* Functions - A way to store a block of code to be executed later. The code is executed either when the name of the function is followed by parenthesis (eg, `alert()`), or as a callback, such as with event listeners (eg, `.addEventListener('click', changeColor)`).

### Commands

* `document.getElementById` - Finds an element based on its ID property.
* `alert` - Opens a pop-up box with a message.
* `prompt` - Opens a pop-up box with a message, and allows the user to input data that can be stored in JS.
* `console.log` - Output a message, element, value or other object to the browser console.

## DOM Elements

DOM (Document Object Model) Elements represent the elements on the page, and allow us to interact with them.

### Commands

* `<element>.style.<property> [= <value>]` - Allows us to look up a style property of the element, or set it to a value of our choice.
* `<element>.innerHTML [= <value>]` - Allows us to look up the HTML content of the element, or set it to a value of our choice.
* `<element>.innerText [= <value>]` - Allows us to look up the text content of the element, or set it to a value of our choice.
* `<element>.addEventListener(<event>, <callback function>)` - Allows us to add a function that gets executed whenever the given event happens to the element (such as clicking on it).
