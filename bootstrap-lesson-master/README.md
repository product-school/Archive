# <img src="https://cloud.githubusercontent.com/assets/8397980/19818474/bd21af4c-9d04-11e6-8df6-1ed154718dce.png" height="60"> 
# Intro to Bootstrap
| Objectives |
| :--- |
| Describe what Bootstrap is and explain how the grid system works |
| Place different Bootstrap components onto a static page |
| Manipulate different Bootstrap elements with custom CSS |
| Design and create webpages using Bootstrap elements and styling |

### How important is style to web development?

1. Along with writing elegant code we as developers want to be able to present our pages in a beautiful and user-friendly manner.

2. Great presentation and user experience through styling creates a site that users will want to repeatedly visit.

3. Finally, many employers will use a challenge for front-end developers to recreate a site using views and specifications of their site.

### Wireframing

Wireframing is a great way to organize the look of your website before you begin programming.

![alt text](http://urlnextdoor.com/content-include-images/wireframe-gridded.jpg "Logo Title Text 1")

### Why you might want to use Bootstrap

1. <b>Speed of Development</b><br>
The use of Bootstrap really increases the speed at which a developer can stylize their webpage.  There are a lot of prewritten tools that allow the developer to put together a page without coding from scratch.

2. <b>Responsiveness</b><br>
Bootstrap comes with a responsive design pattern that allows programmers to create pages that respond to the different screen sizes of phones, tablets, and computer monitors.

3. <b>Customization</b><br>
While Bootstrap comes with a lot of built in features, a developer can customize the different components of Bootstrap to create a look that fits the needs of the site.

4. <b>Support</b><br>
There is a large community of developers that use Bootstrap in their personal projects and on the professional landscape.  Because of this, there is a large and well-documented community of support throughout the web whenever a developer has a question or runs into a problem.

### How to use Bootstrap

Add the viewport meta tag and the <a href="http://getbootstrap.com/getting-started/#download">Bootstrap CDN</a> to the ```<head></head>``` of your HTML file.

```
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
```

### Bootstrap Grid System

1.  `.container` class holds `.row` classes
2.  Rows create horizontal groups of columns
3.  Site content lives in columns
```
<body>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <p>This column takes up half the page.</p>
        </div>
        <div class="col-sm-6">
          <p>And so does this one!</p>
        </div>
      </div>
    </div>
</body>
```
4.  `xs-*`, `sm-*`, `md-*`, `lg-*` refer to targeted device sizes  
5.  The best way to learn about the Bootstrap grid system is to see it in action.

## Bootstrap FTW!!!

<b><a href="https://www.instacart.com/">Instacart</a></b><br>
<b><a href="https://www.lyft.com/">Lyft</a></b><br>
<b><a href="https://www.meteor.com/">Meteor</a></b>

## Challenges

1. Create an ```index.html``` file and add the Bootstrap CDN (or use this boilerplate to get started).
2. Add one container, one row, and three col-** classes (your columns can be any width that add up to 12).
3. Make sure your three columns stack vertically when you are on mobile (xs) devices.
4. Add content to your columns.
5. Add some buttons!!

## Further Reading

* <a href="https://scotch.io/tutorials/understanding-the-bootstrap-3-grid-system">Understanding the Bootstrap System</a><br>

* <a href="http://expo.getbootstrap.com/">Inspiring Uses of Bootstrap</a><br>

* <a href="http://www.creativebloq.com/wireframes/top-wireframing-tools-11121302">Some Wireframing Tools</a>

* <a href="https://startbootstrap.com/bootstrap-resources/">Some Bootstrap Resources</a>

* <a href="http://www.w3schools.com/bootstrap/">W3 Schools Bootstrap Tutorial</a>

* <a href="https://www.youtube.com/watch?v=gqOEoUR5RHg">YouTube Bootstrap Tutorial</a>

## Evening Lab (Site Re-Creation)

As we’ve emphasized today, styling plays a very important role in web development. Some of you will run into interview questions in which you will have to re-create the layout and/or design of a particular company's website.

With that in mind, we want you to take what you've learned and use that knowledge towards re-creating the layout of your favorite website.

You can pick any site that you want and re-create the landing page (i.e. homepage) of the site.
