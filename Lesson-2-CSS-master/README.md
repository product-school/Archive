# CSS Styling


### File Structure & Syntax

**Linking your css file to your html file**
```html
<link rel=”stylesheet” href=”/style.css”>
```

**Syntax**
```css
h1 {
  property: value; 
  color: red; 
  font-size: 16px; 
  text-align: center;
}
```

### CSS Selector Types

**HTML Tags:**
-Here’s a list of common style properties to get you started: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

-Feel free to use this triangle generator: http://apps.eky.hk/css-triangle-generator/ 
 
```css
h1, p, div{ color: red; }
```

**Classes & Id’s:** 
HTML tag attributes used for CSS & JavaScript targeting

Classes: Assigned to one or more HTML elements on a page.
```css
.my-class {
text-align: center; margin: 0 auto;
}
```

IDs: Assigned to only ONE HTML element on a page
```css
#my-Id {
color: green;
}
```

Pseudo Selectors: styling that is assigned to a state of a page element or specific subset of elements:

`a:hover { color: red;}` => Links will turn red when a mouse hovers over them

`p:first-child { background-color: gray;}` => The first paragraph element on a page will have a gray background color

`div:nth-child(3) { text-align: center; }` => Text in the 3rd div on the page will be centered
 
**Selectors based off of relationships**

- A E {}: Any E element that is a descendant of an A element (that is: a child, or a child of a child, etc.)
- A > E {}: Any E element that is a child of an A element
- E:first-child {}: Any E element that is the first child of its parent
- B + E {}: Any E element that is the next sibling of a B element (that is: the next child of the same parent)


### Chrome developer tools
• Elements + CSS
• Console


## Responsive Styling:

Responsive styling enables you to customize how a page is displayed at different browser sizes. With media queries, you can set custom CSS for any browser with you’d like to target.

#### Typical Viewport Sizes

• Smartphones: 680 x 960 pixels

• Tablets: 768 x 1024 pixels

• Laptops: 1440 x 900 pixels

• Desktops: 1920 x 1080 pixels

#### Responsive media queries

```css
@media (max-width: 767px) and (min-width: 480px) { h2 {
   font-size: 12px;

 }
nav {
display: none; }
}
```

#### Head Meta-tags:

Add this to the head of your file to let your mobile browser know your site is optimized for mobile: 

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Homework:
Finishing Up The HTML + CSS For Your Sample Page:  https://github.com/product-school/site-recreation

**Resources:**

- For more information on CSS selectors: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

- For an example of a styleguide: https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/CSS_style_guide

**Other Resource for Practice**

- https://www.codecademy.com/
