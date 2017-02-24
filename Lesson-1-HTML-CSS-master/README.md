# <img src="https://cloud.githubusercontent.com/assets/8397980/19818474/bd21af4c-9d04-11e6-8df6-1ed154718dce.png" height="60">

# Unit 1 - HTML, CSS, & Responsive Styling

### 1.1 HTML

#### Introduction:

HTML (Hyper-text Markup Language) and CSS (Cascading Style Sheets) represent the skeleton and outer-facade of any page that you see on the Internet. Any front-end or full-stack developer will be working with these daily. The basic concepts within HTML and CSS can be learned quickly and you’ll have time to deepen your knowledge of specific attributes, tricks, and resources over time.

** Check out the blog you’ll be building  <a href="https://p-school-blog.herokuapp.com/" target="_blank">here</a>. **


#### HTML page structure, head & body

```html
<!DOCTYPE Html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    [Page’s HTML content]
  </body>
</html>
```
**HTML body tags (full list: https://developer.mozilla.org/en-US/docs/Web/HTML/Element)**


Most Commonly Used Tags:

• Full Width HTML Tags
- Headings: `<h1> - <h6> <h1>Hello World</h1>`
- Paragraph: `<p>Copy text <p>`
- Div (aka ‘box’):
`<div> [content to be placed inside] </div>`
- Ordered (numbered) & Unordered (bulleted) Lists: `<ul> & <ol> <ul>`

```html
<ul>
  <li><a href="about.html">About Us</a></li>
  <li><a href="privacy.html">Privacy</a></li>  
  <li><a href="contact.html">Contact Us</a></li>
  <li>Point one</li>
  <li>Point two</li>
  <li>Point three</li>
</ul>
```
#### Blockquote:
`<blockquote>Copy worth quoting</blockquote>`
- Horizontal Rule (aka: horizontal divider line): `<hr>`
- Line break: `<br>`
- Nav: `<nav> </nav>`

```html
<nav>
<a href="html.html">HTML</a> | <a href="css.html">CSS</a> |
<a href="js.html">JavaScript</a> |
</nav>
```
#### Footer:
`<footer> <ul> </ul> </footer>`

#### Form:
```html
<form>
  <div>
    <label for="post_title">Title</label> <input required="required" type="text">
  </div>
  <div>
    <label for="post_image">Image</label> <input required="true" type="file">
  </div>
  <div>
    <label for="post_show_image">Show Photo?</label>
    <input type="checkbox" name="post_show_photo" value="1">
  </div>
  <div>
    <label for="post_category">Category</label> <select>
    <option value="1">Product School</option>
    <option value="2">Travel</option>
  </div>
  <div class="actions">
    <label for="post_submit">Submit</label> <input type="submit" value="Create Post">
  </div>
</form>
```
- Common form text field types: text, email, password, search, URL
- Form field types without text field ‘input’: checkbox, radio, number range
- Form buttons: button, image, reset, submit


#### In-Line HTML Tags

• Image: `<img src=”linked-file-path” alt=”alternative title”>`

• Anchor (aka: ‘link’): `<a href=”/link-url”>Linked copy</a>`

#### Formatting HTML Tags

• Bold: `<b>bolded text</b>` ; alternate: `<strong>bolded text</strong>`

• Underline: `<u>underlined text</u>`

• Italics: `<i>Italicized text<i>`

#### In-line Styling
`<tag style=”attribute: value;”>`

Starter styles: width (px or %), height (px or %), text-align (left, center, right), color (hex), background-
color, border (px color solid/dashed).


#### Box Positions
- Read: http://learnlayout.com/position.html

• Static:
- Default, ‘unstyled’ position

• Relative:
- Behaves the same as static unless you add some extra properties.
- Setting right, left, top, bottom, will adjust the position of a relative box.
- Other elements will not fill open gaps (eg: if the width of a relatively positioned box is only 40% of the
line, the other 60% of the line will be empty).

• Fixed:
- A fixed position element is positioned relative to the viewport and will stay in the same place in the browser as you scroll.
- Does not leave a gap in the page where it would have otherwise been placed.

• Absolute:
- Behaves like a fixed position element, but is fixed relative to it’s nearest parent rather than the viewport

#### Box Display Types:

• Inline Element: has no line break before or after it, and it tolerates HTML elements next to it.  Respect left & right margins and padding, but not top & bottom.

- Cannot have a width and height set
- Allows other elements to sit to their left and right.
- Block Element: Owns the full width of the page
- Respects height and width
- Forces a line break after the block element

• Inline-block Element: is placed as an inline element (on the same line as adjacent content), but it behaves as a block element.

- Allows other elements to sit to their left and right
- Respects top & bottom margins and padding
- Respects height and width


#### Floats
- Read up on floats: http://css.maxdesign.com.au/floatutorial/introduction.htm

• Floated boxes will move to the left or right until their outer edge touches the containing block edge or the outer edge of another float.

• If there isn't enough horizontal room on the current line for the floated box, it will move downward, line-by- line, until a line has room for it.

• Block level elements above a floated element will not be affected by it. However, elements below will wrap around the floated element.


### In Class Exercise
-We're going to test our new found HTML skills in order to create a basic page with minimal styling.
-Here is where you can find the base code: https://github.com/product-school/site-recreation
