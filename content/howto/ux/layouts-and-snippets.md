---
title: "Use Layouts and Snippets"
category: "UX"
tags: []
---

## 1 Introduction

This document will cover the basics of how to create pages using layouts and snippets.

**This how-to will teach you how to do the following:**

* Create and style layouts
* Create snippets

## 2 Prerequisites

None.

## 3 Layouts

This section describes what a layout consists of and what its value is.

### 3.1 Page Components

When you look at a page, you can see that a page consists of two important components:

* Layout - the structure of the page (just like PowerPoint has one or more layout presets)
* Content - what is displayed within the structure of the page

![](attachments/18448710/18581449.jpg)

While modeling the pages, you select a layout when a page is created and accept its presence.

### 3.2 The Value of Layouts

Layouts are used to structure the user interface. They allow us to define a default page structure, which can be reused as a template for pages. With this structure, you can design the way the application is presented to the end-user. The best practice is to predefine the UI structure before you start modeling the app. There was a blank layout, although this is a basic setup for layouts and there are some predefined layout structures available.

These are some available predefined layout structures:
* DesktopLayout
    * For presenting a header with a logo and menu bar
    * Content placeholder used
    * A footer with text used
* PopupLayout
    * Contains only a content placeholder

Most users start by creating an application interface for the desktop user, but it's easy to unlock the app for mobile and tablet users. For each device, you can create a set of layouts that fit the specific layout needs for the device. When device-specific layouts have been created, they can be used as templates for creating device-specific pages: 

![](attachments/18448710/18581465.png)

## 4 Styling

In addition to layouts, the application should have a certain look and feel, such as a color scheme matching the customer brand. This is accomplished with CSS/Bootstrap and with a set of predefined classes that are connected to the Mendix page elements through the CSS file. This part of the application design allows for a lot of flexibility, though it is an advanced process and requires specific CSS and HTML knowledge. For the current scope of this how-to, you will use the default styling.

### 4.1 Creating a New Layout

As already mentioned, a set of predefined layouts is available that fits basic needs encountered while developing a basic app. However, when you want a more sophisticated app, a more advanced setup of layouts may be needed. The following sections will explain the basics of creating a new layout.

### 4.2 Layout Widgets

In this section, the main elements used for the creation of a new layout are discussed. Thereafter, basic design approaches will be discussed.

#### 4.2.1 Layout Container

A layout container is used to divide the layout into regions such as the header, sidebar, and footer. A layout container must be the only top-level widget. In addition, a layout container can only be placed directly in another layout container.

#### 4.2.2 Regions

With regions, you divide the layout container into sections in order to position the layout elements in specific fixed positions. Each region contains either a placeholder or a specific widget.

#### 4.2.3 Placeholders

A placeholder can be used in a layout to define an area that can be filled in in a page based on that layout or in another layout defining that layout as the master layout.

![](attachments/18448710/18581463.png) 

When the area is filled in a page, this will be the content area of that page, showing the dynamic data as specified in that page. When a layout inherits from another layout, the area can filled with a new layout container in order to define this specialized layout. It can also be kept empty, and then it will be filled in a page.

#### 4.2.4 Inheritance

A layout can also be based on another layout, which is called the "master layout" in this context. If a layout is based on a master layout, the layout can fill the areas defined by the master layout and define new area using placeholders. Pages that use a layout based on a master layout will only see the areas defined by the layout, not those of the master layout.

## 5 Desktop, Tablet, or Mobile?

All pages can be opened on all device types, because the generated HTML for the pages is HTML5.  However, each device has its own specific UI design needs. Therefore, it is logical for you to define a set of layouts per device type that serves the needs of that specific device type.

By default, the desktop and phone layouts are available out-of-the-box, and the design of the layouts can be customized to your needs. You can change and extend the default layouts as wel as create new layouts as needed. 

Be careful with how you design these layouts. For example, in the mobile apps, you do not want to have too many regions, or the design will look crowded and confusing to the end-user. On the other hand, a desktop application might require different regions that allow for more content to be shown and details to be displayed.

### 5.1 Layout Examples

These are some layout examples:

![](attachments/18448710/18581462.png)

![](attachments/18448710/18581461.png)

{{% alert type="info" %}}

By adjusting the canvas width, you can emulate the end-user's view of the page in the Modeler. For example, the desktop layout has a canvas width of 800, and the default phone layouts have a width of 500. The property canvas width only applies to the view in the Modeler, and the actual width of the page depends on the opened browser or the optional pop-up window size.

{{% /alert %}}

After defining the structure of the layout with the layout container(s), the region's content must be defined. This can either be done per page, with page-specific elements (for example, by adding data widgets in the empty areas), or within the layout in order to define the elements that will be used on each page with this layout. It is common that this will be the general app navigation or specific navigation for a specific function. All the widgets can be used, except data and input widgets, since they need a source. 

Two of the most useful widget types are menu widgets and snippets. You will learn more about those two types below.

## 6 Menu Widgets

### 6.1 Menu Bar

The menu bar widget shows a configured menu in the form of a horizontal bar with items. The items can have sub-items, and the main item in the menu can be expanded. Sub-items can go only one level deep (a sub-item cannot have its own sub-item). The menu item points to either the page or the microflow that will open or start when the item is clicked. 

![](attachments/18448710/18581460.png)

### 6.2 Navigation Tree

The navigation tree widget shows a configured menu in the form of a tree. Items can have sub-items when the main item is expanded. The menu structure of the navigation tree can have up to three levels. In the end, a menu item points to either the page or the microflow that will open or start when the item is clicked.

![](attachments/18448710/18581459.png)

### 6.3 Simple Menu Bar

The simple menu bar widget shows a configured menu in the form of a horizontal bar with images and captions. Items cannot have sub items (the menu structure can only have one level). The menu item points to either the page or the microflow that will open or start when the item is clicked.

![](attachments/18448710/18581458.png)

### 6.4 Menu Source

The items that are shown in the menu widget are determined by the menu source. A menu widget is either filled from a menu configured in the **Navigation** document or a **Menu** document. 

![](attachments/18448710/18581457.png)

When you have selected the project navigation as source, the type device must be determined for the the correct navigation menu.

![](attachments/18448710/18581456.png)

![](attachments/18448710/18581455.png)

### 6.5 Project Navigation

The **Navigation** document defines the main navigation structure of the application for end-users. It allows you to set the home page of your application as well as define menu structures for use in menu widgets. The home page can vary based on the roles a user has. If security is enabled, the menu will only show the items to which the user has access.

### 6.6 Device Profiles

At the heart of the navigation model in Mendix, are three device types: Desktop, Tablet, and Phone. You can define separate home pages and menus for each of these three devices. The Desktop device type is always enabled, while Tablet and Phone can be disabled if you do not want to use them. When a user visits a Mendix application, she is automatically redirected to the home page of the appropriate device type (for details, see [6.8 Redirection to Device Types](#RedirectiontoDeviceTypes)).

![](attachments/18448710/18581454.png)

### 6.7 Menu Document

A menu document defines a navigation menu that can be used by a menu widget. Typically, the main menus for your application are defined in device types, while you use menu documents for auxiliary menus (for example, a side bar). A menu consists of a list of menu items, which optionally contain sub-items. Depending on the widget a number of levels are allowed.

![](attachments/18448710/18581453.png)

### 6.8 Redirection to Device Types<a name="RedirectiontoDeviceTypes"></a>

The Mendix runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the `User-Agent` string that is sent by the device's browser. The default configuration for the redirection is highlighted here:

![](attachments/18448710/18581452.png)

The string for specific user interphases can also be configured within the server custom settings (this is more advanced and not covered here).

If a device type is not enabled, it falls back to another device type as shown here:

![](attachments/18448710/18581451.png)

It is also possible to force the client to use a specific device type by adding a `profile` query string parameter to the URL when visiting a Mendix application. The possible values are `Desktop`, `Tablet`, and `Phone`.

## 7 Snippets

Snippets are reusable interface parts that can be used on pages and layouts. Using snippets requires Mendix business engineers to modify fewer places in the interface and allows for a smoother transition as well as a user-friendly experience. For example, you can have a snippet that is used both in the contents area of a template grid and in a data view. Changes you make to the snippet will be applied in all places where the snippet is used.

In addition, a snippet can define an entity that serves as a context for the widgets placed in it. For example, if you set the *Course* entity for a snippet, you could place a text box that shows the *Course Title* on the snippet without having to define a data view first. When an entity is defined on a snippet, it needs to be placed inside a context for that entity in each place that you use the snippet (for example, a data view).

### 7.1 Example

![](attachments/18448710/18581449.jpg)

## 8 Related Content

* [How to Perform the Scout and Windows 10 Workaround](perform-scout-and-windows-10-workaround)
* [How to Use Layouts and Snippets](layouts-and-snippets)
* [How to Filter Data on an Overview Page](filtering-data-on-an-overview-page)
* [How to Set Up the Mendix UI Framework with Scout](setup-mendix-ui-framework-with-scout)
* [How to Set Up the Mendix UI Framework with Koala](setup-mendix-ui-framework-with-koala)
* [How to Set Up the Mendix UI Framework with Just CSS](setup-mendix-ui-framework-with-just-css)
* [How to Set Up the Navigation Structure](setting-up-the-navigation-structure)
* [How to Create Your first Two Overview and Detail Pages](create-your-first-two-overview-and-detail-pages)
* [How to Find the Root Cause of Runtime Errors](../monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors)
