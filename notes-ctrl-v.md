# The Vue Instance

Throughout this course you will learn the fundamentals of Vue while we build this product page together.

![](screens/sock-store.gif)

## Prerequisites:

This course assumes a foundational knowledge in HTML, CSS and JavaScript.

Our Goal
In this lesson, we’ll show you how to use Vue to display data onto a webpage.

Our Starting Code
We’re going to start with some very simple HTML and JS code, which looks like this:

Problem
We need a way to take the variable product from our JavaScript and have it show up in the h1 of our HTML.

Our first step is to include Vue in our project, which we’ll do by adding this line at the bottom of our index.html file.

Next in our main.js we’ll write the following:

And then in our index.html we’ll use our first JavaScript expression:

When we save this, we’ll see “Socks” appear on our webpage.

It worked. Data from our JavaScript is showing up in our HTML. But what did we just do? Let’s break it down:

The Vue Instance

A Vue instance is the root of our application. It is created by passing an options object into it. Just like it sounds, this object has a variety of optional properties that give the instance the ability to store data and perform actions.

Plugging in to an Element

The Vue instance is then plugged into an element of your choosing, forming a relationship between the instance and that portion of the DOM. In other words, we’re activating Vue on the div with the id of app by setting '`#app`' as the element ( el ) that our instance is plugged into.

Putting our data in its place
A Vue instance has a place for data, in its data property.

The instance’s data can be accessed from inside the element that the instance is plugged into.

Using an Expression
If we want our product to appear in our h1, we can put product inside these double curly braces.

See? It works. Simple huh?

How does it work? Inside the double curly braces, we’re using a JavaScript expression.

Important Term: Expression
Expressions allow us to utilize existing data values, together with logic, to produce new data values.

When Vue sees the expression {{ product }}, it recognizes that we are referencing the associated Vue instance’s data, and it replaces that expression with the value of product instead, in this case: “Socks”.

Some other ways expressions can be used:

Introducing Reactivity
The reason Vue is able to display product ‘s value immediately is because Vue is reactive. In other words, the instance’s data is linked to every place that data is being referenced. So not only can Vue make its data appear within the HTML that references it, but that HTML will be updated to display new values any time that referenced data changes.

To prove that, let’s open the console and change the value of our product string. Look what happens.

See how easy that was?

What have we learned?
How to begin writing a Vue application with a Vue instance, and how to load basic data onto the webpage.
The Vue instance is the root of every Vue application
The Vue instance plugs into an element in the DOM
The Vue instance’s data can be displayed using the mustache-like syntax {{ }} called an expression.
Vue is reactive
Learn by doing
Challenge
Add a description key to our existing data object with the value “A pair of warm, fuzzy socks”. Then display description using an expression in an p element, underneath the h1.
