---
title: "Build Custom Widgets"
url: /howto8/extensibility/widget-development/
weight: 30
no_list: false
description_list: true 
---

## Introduction

A Mendix custom widget is a part of the user interface in your Mendix app that enables functionality and interaction with the users of the app. A custom widget can alter the interface, data, and images of the app as well as the way the app works. These custom widgets bridge the gap between using standard Mendix components (for example, buttons and list views) and creating very specific components yourself.

Custom widget development can be difficult at the beginning. The resources below will help you start your widget development.

## Prerequisites

In order to create widgets, you need a good understanding of how JavaScript works. These texts can help you get started:

* [JavaScript: The Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
* [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

## Specific Widget Topics

The sections below describe the Mendix resources that can help you understand how widgets are built.

### Introduction Videos

* [Expert Series: Kickstart Your Widget Development](https://www.youtube.com/watch?v=MZ0Ihu2QGYY)

### Dojo {#dojo}

Custom widgets are Dojo widgets. In order to understand how widgets are structured and what their lifecycle is, you need to know how Dojo widgets are built. You can consult this quick introduction:

* [Dojo Documentation Tutorials](https://dojotoolkit.org/documentation/#tutorials)

For details on the widget lifecycle, reference this documentation:

* [Writing Your Own Widget](https://dojotoolkit.org/reference-guide/1.10/quickstart/writingWidgets.html)
* [dijit.\_WidgetBase](https://dojotoolkit.org/reference-guide/1.10/dijit/_WidgetBase.html)
* [Tutorial: Widget Lifecycle](https://apidocs.rnd.mendix.com/6/client/tutorial-widget-lifecycle.html)

### Widget Scaffolding

In the past we created widgets using Brackets and a plugin. With the new JavaScript/Node.js tools that have recently come out, we deprecated this way of creating widgets. The new way of creating widgets is done using Yeoman and a generator.

This information is covered in [Expert Series: Kickstart Your Widget Development](https://www.youtube.com/watch?v=MZ0Ihu2QGYY).

### Interacting with Mendix Runtime

Widgets have the ability to get data from the Runtime, manipulate objects, show validations, and set references. This is done through the Client API. For the latest version of the this API, see [Client API](/apidocs-mxsdk/apidocs/client-api/).

### Configuring the Widget in Mendix

Mendix has a specific way of configuring your widget through the use of an XML file. For more information and an example, see [WidgetName](https://github.com/mendix/AppStoreWidgetBoilerplate/blob/master/src/WidgetName/WidgetName.xml) in the AppStoreWidgetBoilerplate repository.

For the full reference on writing a widget XML, see the [Build Widgets with XML](/howto8/extensibility/use-xml-widget/).

### Boilerplate

The Yeoman widget generator ships two versions of a boilerplate created by Mendix. The source code for this boilerplate is available in the [AppStoreWidgetBoilerplate repository](https://github.com/mendix/AppStoreWidgetBoilerplate).

## Further Reading

This category of how-tos presents in-depth information on how to build your own widgets. A few more tips are below.

### Learn by Example

Most of the widgets in the [Mendix Marketplace](https://marketplace.mendix.com/) are open-source and available on GitHub. You can find the **View on GitHub** link on the right side of the Marketplace screen:

{{< figure src="/attachments/howto8/extensibility/widget-development/appstore-github-link.png" class="no-border" >}}

### Learn by Doing

Using the widget generator, you get a test project. With the test project (or your own project), you can quickly start creating widgets.

By debugging your widgets, you will quickly learn where you make mistakes and how the widget lifecycle works.

### Ask the Community

Within the Mendix community of developers, there are plenty of widget developers. The [Mendix Community](https://community.mendix.com/) is the place to go to when you have questions.

## Documents in This Category
