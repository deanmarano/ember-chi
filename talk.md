# Intro
Hi! I'm Dean Marano. I'm an engineer at Groupon and I'm here to blow your mind about HTML prototyping.

I want to move fast!

HTML prototyping is the hotness, and has been for a while. Why?

# Next Slide

Get to use express your ideas in the medium they are destined for
It's the easiest way to try out a design on a bunch of different screen sizes at once.
Easier for yourself and others to get a feel for what it will be like in the browser
Super fast feedback cycle - just reload and it's there.

So you buy in, you start prototyping in HTML/CSS. Everyone convinced you that it's the right thing to do, and then... and then you realize it sorta feels like this.

# Next Slide

## So what parts about it suck?
Change code in one place, have to go to the browser and refresh to actually see changes. Less immediate response feedback that photoshop - you can't drag and play with sizes as easily. You can in web inspector, but then you have to copy those changes to your code, and refresh. Maybe you miss something and it doesn't look the same. It's frustrating.

Reusability - copy/pasting code between pages, changing layout across a bunch of different files.
Anything interactive - hard showing states without two copies of the file.

## So how do we move faster?

Suddenly, it feels like you're scrambling to be as productive as you used to be.

# Next Slide

Some things feel better, but some things feel worse. But we're engineers, so we can find a way. Here are three things you can start using today to stop walking and start sprinting.

# Next Slide

## Chrome Workspaces

Simple concept - edit in Chrome Inspector, and your changes are persisted. Basically, the Chrome devs heard your cries of pain and responded. Pretty awesome of them. Best part? As long as you have your source maps set up correctly, it let's you edit whatever you want. Sass? Less? Stylus? Whatever you want, you got it. You add your workspace folder, link up your files, and you're ready to go. It's a pretty excellent workflow. This is in Chrome now, so you can go ahead and start using it today.

## Live Reloading

# Next Slide

It's nice to have a little web server to serve your HTML/CSS when doing prototyping. Live Reload is a plugin that let's you hit save on your HTML and it automatically reloads the browser. So no more bouncing back and forth to see what your changes are doing, they are just there. Immediately. It honestly took me some time to stop mashing Command-R, but now I never want to go back.

# Next Slide

Oh - and it works for CSS and your pre-processor too. You edit your CSS, you get changes in the browser. Tighter feedback loops means you get a better understanding and better visibility into your changes. All around awesome sauce.

## So you want this?

# Next Slide

You might be thinking, "Whoa, hold up. I don't know Ember, and I don't want to learn it. I just want to use HTML and CSS!" This is just the little server part that will allow you to do that. You don't have to know any Ember, you can just edit your files and get LiveReload for free. Prototype away.

For me, though, we haven't solved the biggest problem. I want a good way to break up my HTML, reuse layouts, have some more dynamic content with writing as little Javascript as possible.

Let's hop into an example app. Here we have a wireframe with a few components. Some header nav, some sidebar nav, a list of articles and a detail view of one of those articles. The content in the middle should change out - sometimes it's articles, sometimes it's docs, sometimes videos. Let's give this 'content in the middle' a name. We're going to call it an outlet. How do we decide what to show in the outlet?

In a real app, this is tied to a URL - /articles, /docs, /videos. So if you're willing to write a little bit of JS, we can do this easily.

What tools do we have to make it better?

# Demo Application

# Article View

# Router

named routes, resources, routes, urls
template structure

# Portal

# Partials

# Link-tos

# Demo

# Thanks

Ember-cli
I don't want to learn Ember! How does this help me?
Ember cli allows you to easily use partials and layouts. You set up the routes in the router and properly name the templates. You write the tiniest amount of Javascript and everything else just happens.

Handlebars
Handlebars is HTML with some special tags that let you easily nest other views.
Partials
Outlets
Link-tos


Chrome Workspaces

