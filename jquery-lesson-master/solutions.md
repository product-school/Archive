1. Draw the structure of the following HTML document:

  * How many children does the `<div>` with class `header` have?
    * 7 total children (`<ul>`, all `<li>`'s, all `<a>`'s)
    * 1 direct child (`<ul>`)
  * What is the direct child of the `<p>` element?
    * `<a>` element
  * What is the direct parent of the `<p>` element?
    * `<div>` with class `section`

### CSS Selectors

For the following code blocks, come up with as many CSS selectors as you can think of to select the HTML elements in **red**, and *only* the elements in red.

#### Code Block #1:

* `#fancy`
* `p#fancy`
* `div p#fancy`
* `.page #fancy`
* `.page p#fancy`
* `div.page p#fancy`

#### Code Block #2:

* `.small`
* `div .small`
* `div a.small`
* `div.page a.small`

#### Code Block #3:

* `p a`
* `div p a`
* `.page p a`
* `div.page p a`

#### Code Block #4:

* `.mad-favs li`
* `ul.mad-favs li`
* `.page .mad-favs li`
* `div.page ul.mad-favs li`

#### Code Block #5:

* `.sparkles`
* `p.sparkles`
* `div p.sparkles`
* `div.page p.sparkles`

### jQuery Selectors

1. Use jQuery to select the element containing the words "Hello There" with as many different selectors as you can think of:

  ```js
  var $el = $('#greeting');
  var $el = $('div');
  var $el = $('div#greeting');
  // note that using the "$" in the variable name "$el" is just a naming convention
  // it indicates to you, dear reader, that the value of "$el" is a jQuery "object"
  // and therefore has special jQuery methods
  ```

2. How would you *get* the value "Hello There"?

  ```js
  $('#greeting').text();
  ```

3. How would you change (or *set*) the value to "Hola"?

  ```js
  $('#greeting').text('Hola');
  ```

4. How would you add an `<h1>` to the page that says "A Spanish Greeting"?

  ```js
  $('body').prepend('<h1>A Spanish Greeting</h1>');
  ```

5. How would you add a second greeting ("Que tal?") below the first?

  ```js
  $('body').append('<div>Que tal?</div>');
  ```

6. How would you add the class "section" to both greetings?

  ```js
  $('div').addClass('section');
  ```
