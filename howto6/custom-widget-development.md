---
title: "Custom Widget Development"
space: "Mendix 6 How-to's"
---

## 1. Introduction

A Mendix custom widget is a part of the user interface in your Mendix app. It enables functionality and interaction with the end-users of your app. The custom widget can alter the interface, data, and images of the app as well as the way the app works. Custom widgets bridge the cap between using standard Mendix components (like buttons, list-views etcetera) and creating very specific components yourself.

Custom widget development can be difficult to start with. These pages will help you start your widget development.

## 2. Prerequisites

In order to create widgets, you need a good understanding on how Javascript works. These reading tips might help you get started:

 * Javascript: The Good Parts - Douglas Crockford
 * [You don't know JS](https://github.com/getify/You-Dont-Know-JS)
 * [Learning Javascript Design Patterns - Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

## 3. Widgets specific topics

We have some resources that help you understand how widgets are build. These topics are covered here:

### 3.1 Introduction videos

 * [Expert webinar: Custom widget creation](https://www.youtube.com/watch?v=Jy_BnR06hwk) _Note: this video explains how a widget is created using Brackets. With the release of our Yeoman widget generator, this way of building a widget is considered deprecated._
 * [Expert webinar: Kickstart your Widget Development](https://www.youtube.com/watch?v=Jy_BnR06hwk)

### 3.2 Dojo

Custom widgets are Dojo widgets. In order to understand the widget lifecycle and how these are structured, you need to have knowledge on how Dojo widgets are built.

 * [Dojo documentation](http://dojotoolkit.org/documentation/#tutorials), this is a quick introduction.

Understanding a widget life cycle

 * [Writing Your Own Widget](http://dojotoolkit.org/reference-guide/1.10/quickstart/writingWidgets.html)
 * [dijit.\_WidgetBase](https://dojotoolkit.org/reference-guide/1.10/dijit/_WidgetBase.html)
 * [Tutorial: Widget Lifecycle](https://apidocs.mendix.com/6/client/tutorial-widget-lifecycle.html)

### 3.3 Widget scaffolding

In the past we created widgets using Brackets and a plugin. With new Javascript/Node.JS tools that have come out in recent times, we deprecated this way of creating widgets. The new way of creating widgets is done by using Yeoman and a generator. This how-to will give you a quick tutorial on how to use the widget generator. (It is also covered in the [Expert webinar: Kickstart your Widget Development](https://www.youtube.com/watch?v=Jy_BnR06hwk))

### 3.4 Understanding each step in a simple Mendix widget

Parts of this (old) tutorial will give you a basic understanding which steps a widget will go through in it's lifecycle and how a Mendix widget is structured: [Create a Basic Hello World Widget](/howto6/create-a-basic-hello-world-custom-widget).

### 3.5 Interacting with Mendix Runtime

Widgets have the ability to get data from the Runtime, manipulate objects, show validation, set references, etcetera. This is done through the Client API. Our latest version of the client API is documented at [https://apidocs.mendix.com/6/client](https://apidocs.mendix.com/6/client).

### 3.6 Configuring the widget in Mendix

Mendix uses a specific way of configuring your widget, using an XML file. An example can be found in the [AppStoreWidgetBoilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate/blob/master/src/WidgetName/WidgetName.xml). The full reference for writing a widget XML can be found in the [XML Reference Guide](/refguide6/xml-reference-guide).

### 3.7 Boilerplate

The Yeoman widget generator ships two versions of a boilerplate that we created. The source code for this boilerplate is available on [Github](https://github.com/mendix/AppStoreWidgetBoilerplate).

## 4. Further reading

In the How-to section for Widget development we go in-depth on how you can build your own widgets. Here are a few more tips:

 * **Learn by example**

   Most of the widgets that are in the [AppStore](https://appstore.home.mendix.com/index3.html) are Open Source and available on Github. You can find the link on the right side of the screen:

   ![](attachments/custom-widget-development/appstore-github-link.png)

 * **Learn by doing**

   Using the widget generator, you get a test-project. Together with the test-project (or your own project), you can quickly start creating widgets. By debugging your widgets, you quickly learn where you make mistakes and how the widget lifecycle works.

 * **Ask the community**

   Within the community of developers there are widget developers. The [forum](https://forum.mendixcloud.com/index3.html) is the place to go to when you have questions.
