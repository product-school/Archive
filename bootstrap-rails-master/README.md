# Adding Bootstrap to Rails

|Objectives|
|----------|
|Searching for different templates|
|Adding Bootstrap to a Rails Application|
|Implementing Bootstrap Style to your application|

## How to add Bootstrap to your existing application:
In this lesson we will explore two ways with which you can import Bootstrap into your code.  The first way is by integrating Bootstrap itself.  The second way is by using the `bootswatch-rails` gem in order to bring in different themes to your website.

1. Add the necessary gems to our Gemfile.

Much like in our last lesson, we will be making use of installing gems into our application.  In order to use Bootstrap for our blogs in this class we will be adding two different gems:  `bootstrap-sass` and `autoprefixer-rails`.  The `bootstrap-sass` gem will integrate all of the components of Bootstrap.  The `autoprefixer-rails` gem will automatically add the proper vendor prefixes when our CSS code is compiled.

```rails
  # Gemfile
  gem 'bootstrap-sass', '~> 3.2.0'
  gem 'autoprefixer-rails'
```

Follow this with the `bundle install` command in your C9 terminal.

2. Import Bootstrap CSS and Javascript Assets.

At this point we will want to import the various CSS and Javascript assets into our applications.  This will allow us to customize the Bootstrap style.  The Javascript assets will help make our page more dynamic and user friendly.  For this we will need to alter two existing files into our application.

First, you will rename `app/assets/stylesheets/application.css` to `app/assets/stylesheets/application.css.scss`.

Then, you will add this code to the bottom of your renamed file:
```rb

@import "bootstrap-sprockets";
@import "bootstrap";
```
This will help render the assets needed for your Bootstrap components to work.

Next, you will add the following code to `app/assets/javascripts/application.js`:
```rb
//= require bootstrap-sprockets
```

It is important to note that placement of this line is extremely important.  You will want the structure of the file to look like this:
```rb
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .
```

Once you have completed the alteration of these files you should save your changes and open your project in your browser.  In order to know that you have Bootstrap implemented you should see a change in the font of your page and potentially a flash message!

It could look like this:
![bootstrap](https://cloud.githubusercontent.com/assets/8397980/21191761/3194529e-c1f4-11e6-82b8-504ee9a0210c.png)



### Using different themes for inspiration:

From here I would go to a website like: https://bootswatch.com/ in order to look at different styling elements.  I usually will follow the source code and integrate it into my application.  I tend to go piece by piece as far as integrating the content of the code into my individual page.  

Luckily, Bootswatch has a gem for us to use to easily implement different themes into our page.  I will use the initial steps from http://stackoverflow.com/questions/14796962/mongoose-schema-reference as a guide for how to use that gem.

1. Install `gem 'bootswatch-rails'` into your Gemfile.
2. Edit your `application.css.scss` to look like this:
```rb
// Example using 'Cerulean' bootswatch

//Import bootstrap-sprockets
@import "bootstrap-sprockets";

// Import cerulean variables
@import "bootswatch/cerulean/variables";

// Then bootstrap itself
@import "bootstrap";

// Bootstrap body padding for fixed navbar
body { padding-top: 60px; }

// And finally bootswatch style itself
@import "bootswatch/cerulean/bootswatch";
```
In this case we're using the 'Cerulean' theme by Bootswatch.

3. You can easily change the theme within your `application.css.scss` file to adjust the look of your application.
4. Once you have the them you want you will be able to use the source code in the examples provided by Bootswatch in order to customize you page.


### Resources:
https://www.railstutorial.org/book/filling_in_the_layout
https://bootswatch.com/
https://github.com/maxim/bootswatch-rails

## Where we are going from here:

Up to this point you have now created your application, added the associated models, routes, and views.  You have also integrated authentication and authorization for the users of your application.  Now your application has the elements of style that you can edit to give it a more personal and professional touch.  In our next lesson we will be integrating JQuery into our application for dynamic interaction with the user.

