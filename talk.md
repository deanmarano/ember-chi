# Slide - Intro

# Slide - About Me.
Hi! My name is Dean Marano, and I've supported IE6.
Now, I'm an UI engineer at Groupon. I've been doing that for
the past three years, and now I'm on the UI Engineering team.
I've been working in Ember for about a year.

Today I'm here to share how I begin a new Ember app, doing
a HTML and CSS prototype first, and then filling in the data later.
It allows me to focus on one thing at a time.
If you are familiar with Ember, it's possible you've used this style before.

If you aren't familiar with Ember, it's intended that you should
be able to keep up, so by all means ask questions. I'm gonna start with
some tips at tricks, and then deep dive into my workflow.

I want to move fast!

HTML prototyping is the hotness, and has been for a while. Why?

# Additions

why photoshop is bad
my experiences dealing with photoshop designers

talk about roles, who would want to use this
when they would want to use this
talk about how easy it is to go forward

TURN OFF PHONE

Static - mockups are just static, unclickable images, which leave all the interactions and effects to the viewer’s imagination.
Working on Responsive Design
Duplicating Work - People expect real thing to look like mocks, and making HTML look exactly like photoshop is hard
Reusing layouts and components Building things from scratch every time
Easy to use web-native design tools - grids, typography, gradients, rounded corners, shadows, inputs, radio buttons, forms

# Slide - HTML Prototyping is awesome

You get to use express your ideas in the medium they are destined for -
It's the easiest way to try out a design on a bunch of different screen sizes at once.
Easier for yourself and others to get a feel for what it will be like in the browser
Super fast feedback cycle - just reload and it's there.
Also, if you do it the Ember way, you have a mostly functional Ember app skeleton waiting to be animated.

So you buy in, you start prototyping in HTML/CSS.
Everyone convinced you that it's the right thing to do, and then... and then you realize it sorta feels like this.

# Slide - Unsupported

## So what parts about it suck?
Change code in one place, have to go to the browser and refresh to actually see changes.
Less immediate response feedback that photoshop - you can't drag and play with sizes as easily.
You can in web inspector, but then you have to copy those changes to your code, and refresh.
Maybe you miss something and it doesn't look the same. It's frustrating.

Reusability - copy/pasting code between pages, changing layout across a bunch of different files.
Anything interactive - hard showing states without two copies of the file.

Suddenly, it feels like you're scrambling to be as productive as you used to be.

Some things feel better, but some things feel worse.
But we're engineers, so we can find a way.
Here are three things you can start using today to stop walking and start sprinting.

# Slide - Chrome Workspaces

Simple concept - edit in Chrome Inspector, and your changes are persisted.
Basically, the Chrome devs heard your cries of pain and responded.
Pretty awesome of them.
Best part? As long as you have your source maps set up correctly, it let's you edit whatever you want.
Sass? Less? Stylus? Whatever you want, you got it.
You add your workspace folder, link up your files, and you're ready to go.
It's a pretty excellent workflow.
This is in Chrome now, so you can go ahead and start using it today.

# Slide - Live HTML Reloading

It's nice to have a little web server to serve your HTML/CSS when doing prototyping.
Live Reload is a plugin that let's you hit save on your HTML and it automatically reloads the browser.
So no more bouncing back and forth to see what your changes are doing, they are just there.
Immediately. It honestly took me some time to stop mashing Command-R, but now I never want to go back.

# Slide - Live CSS Reloading

Oh - and it works for CSS and your pre-processor too.
You edit your CSS, you get changes in the browser.
Tighter feedback loops means you get a better understanding and better visibility into your changes.
All around awesome sauce.
So you want this?

# Slide - Install ember-cli

You might be thinking, "Whoa, hold up.
I don't know Ember, and I don't want to learn it.
I just want to use HTML and CSS!" This is just the little server part that will allow you to do that.
You don't have to know any Ember, you can just edit your files and get LiveReload for free.
Prototype away.

For me, though, we haven't solved the biggest problem.
I want a good way to break up my HTML, reuse layouts, have some more dynamic content with writing as little Javascript as possible.

# Slide - Example Application

Let's hop into an example app.
Here we have a wireframe with a few components.
Some header nav, some sidebar nav, a list of articles and a detail view of one of those articles.

# Slide - Article View

Even within that article, it probably has multiple states - an edit view, a schedule view, a show view.
You could imagine that even inside of that article view, maybe you have a tab for comments, a tab for retweets or linkbacks, and a tab for information about the author.

The structure of this content often reflects the structure of the data server side.
A blog has multiple posts, which in turn have multiple comments.
In server side rendering, that heirarchy is lost in everything but the URL - all of the data is rendered at once, regardless of the data heirarchy.
Since we're prototyping, we can not worry about this constraint.
Also, if you're planning on using Ember for your final app, this is the ideal way to structure your application, as this is the optimal case for an Ember app.

That content in the middle should change out - sometimes it's articles, sometimes it's docs, sometimes videos.
Let's give this 'content in the middle' a name.
We're going to call it an outlet. How do we decide what to show in the outlet?

In a real app, this is tied to a URL - /articles, /docs, /videos.
So if you're willing to write a little bit of JS, we can do this easily.

# Slide - Router

Here's an example router.
While this only covers a portion of the previous page, it highlights all of the key points of the Ember Router.
If you've used Rails before, it may look slightly familiar, although with some definite changes.
If you haven't, this is a nested DSL that allows you to define URLs in a nested way.

Similar to Rails, there is the concept of resources.
A resource is traditionally tied to an object, in this case an article.

By default, a resource comes with one route, named index.
Whenever a resource loads, it (unless specified) loads the index route.

The distiction between routes and resources is subtle - resources traditionally correspond to objects, while routes will more likely correspond to modes or states of that object - in this example, we have displaying, editing, and scheduling as different ways to interact with a single object.

In practice (and for our prototyping case), the biggest difference between the two is that resources have outlets, and routes do not.
So if you want to nest a template within another template, you will want to use a resource.
If you think you've hit the end of your nesting, it's safe to do a route.
If you want, you can always use resources.
The only downside would be that routes reflect their nesting in the name, so it's easier to differentiate between the template names.

As shown below, resources are at the first level in the app/templates directory.
Routes get nested underneath them.
If you decide to use resources for everything, just ensure that your names are unique.

The main thing to note, however, is resources can be 'infinitely' nested.
Each time you nest, you're given complete control of what you want to go there, based on the URL.
In practice, you'll only go a few levels deep, however there is no limit as to how far you go.
Once you solidify your understanding of the router, your development quickly becomes this.

## Paths

One thing to note is that the url and the name of the route or resource do not have to match, although they can.
For example the show route is not named /show, and is just the default for article/:id.
The schedule route is implicitly named, since a path is not provided.
For routes, path is optional, although for resources it is required.
Whenever you use a colon, everything from the colon to the next slash is considered dynamic.

# Handlebars

Ember uses a version of HTML called Handlebars.
Handlebars is an HTML templating language that is usable outside of Ember, so if you're new to Ember you may have already come across it.
It uses curly braces for interpolation, and has some nice helpers that aid us in speeding up our prototyping.
The part of Handlebars that we'll be using today are mostly functions - some take arguments, some are different, but just functions.

# Slide - Outlet

So nesting allows us to use framed contexts to reuse layout code, which for me was one of the main pain points.
There are a few other places that can be improved however.

# Partials

Sometimes you want to reuse a portion of HTML on a bunch of different pages.
Because reuse is good.
We call this a partial.
The syntax is partial and the partial name.
The partial file should be named with an underscore first, and then whatever you want to name it.
If you want to put your partials in a folder, for example articles/comment, you can do `templates/articles/_comment.hbs`.

# Link-tos

When we talked about the router, we tied outlets to URLs.
While you can just use hrefs if you'd like, you can skip handwriting your urls and use the route names you provided in the router.
Link to helpers are block style, meaning they require an open and close - the start tag will include an octothorpe at the beginning, and the closing tag will start with a forward slash.
One of the benefits of using link-tos is that an 'active' class will be automatically added to each parent link in the route hierarchy.
This becomes really nice when working with nav bars to show the current page.
You just determine what 'active' means and your links will just highlight for you.

# Demo

## Front Page (Slide - Application.hbs)

Here's a small demo app I whipped up for this presentation.
It allowed me to forget about the backend, the JS, and just work on my HTML and CSS.
The actual site only took me a few hours.
The site has some basic nav along the top.
This page has one outlet, and two partials - the header and the footer.
Although these aren't necessarily reused, it allows for a cleaner organization of your HTML.

## Weather

If you go to the Weather tab, you'll notice that it also has a side nav, and tabs in the middle.
This is a total of three outlets working together - one is the outer application layout, one is the weather layout, and the last is the today details.
The active tabs are persisted and highlighted using CSS and link to-s, as described.
In this case Today is a resource, but tomorrow and 7 Day are routes since they don't have nested outlets.
These are all parent child routes.

## News

Looking at news we have a different example.
Siblings replacing each other.
Although the News tab is an outlet, all of the content displayed is shown in the index, not the external template.
In practice this means that the entire template is switched out when we navigate to a specific article.
If you click on the different articles, you can see that each one has a different slug - this is by passing a string for the dynamic portion of the url.

## Contact Us

On the contact us tab, I'm using a link to display different states.
Often on forms, you want to design an unfilled and filled state.
Using two routes, I'm able to achieve a decent mock of this.
If you hit send, you'll see the alternate route.

# Deploying

When you're ready to share with people, maybe you don't want to have them install npm, bower, ember-cli, and run a server.
Sometimes, you need to share with people who are more comfortable with a link.
Ember-cli comes with a nice build tool, which just means running `ember build` and it will generate your HTML/CSS/JS in the dist folder.
You can copy this folder wherever you'd like and just serve it with any old static server.

If you don't have a static server lying around, you can also use Github as your deploy destination with the project pages feature.
Unfortunately, this requires a few steps.
The first step is changing the location type in Ember.
This is because Ember by default uses push state, but the Github server does not support this.
To fix this, go into your config/environment.
js file and change the location type to hash.
You will need to rebuild and specify an environment.

Next, the way the Github pages API works is that you have a branch in your repo named pages.
Anything within that branch will be served as HTML/CSS/JS.
To do this, I've found it easier to check out the repo twice and have a folder for each version.
To do this:

* Clone your repo to a second location with pages name
* Checkout the pages branch and remove everything
* Go back to the project directory and build
* Copy the contents of /dist to the pages branch
* Push!

The first time you push, it will take a few minutes for Github to pick it up. When it has, it will be available at your github username dot github dot io slash repo name. You'll be able to navigate aroundand everything should look good!

# Thanks

Ember-cli
Handlebars
Handlebars is HTML with some special tags that let you easily nest other views.
Partials
Outlets
Link-tos

named routes, resources, routes, urls
template structure
