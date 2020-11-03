---
title: "Working with Navigation Layouts"
category: "Front-End"
menu_order: 12
description: "This guide will teach you to use navigation layouts."
tags: "Atlas UI", "User Experience", "Navigation", "Responsive Design", "Sidebar";
---

## 1 Introduction

This document will cover the basics of how you work with Navigation Layouts. 

**This how-to will teach you how to do the following:**

* Select the right Navigation Layout
* Understanding the decision between top vs left navigation
* Configure the Sidebar Toggle


## 2 Selecting the right Navigation Layout

When building a app in Mendix, the first thing you have to decide on is which naviagtion layout to choose. These layouts are the frame within which your dynamic pages are housed, and provide consistent structure through your app.  

Layouts specify what goes where. Each page is based on a layout. The layout contains widgets and structures that return on every page based on that layout. 

Mendix's Atlas UI provides two distinct web for you to choose from: Atlas Default and Atlas Topbar.


### 2.1 Atlas Default

The default layout of Atlas, it is a responsive layout which can be used across web, tablet and mobile devices. 

![](attachments/2.1_atlasdefault.png)

It has three regions: top, left and center. The top region contains the brand logo of your application, the left region your navigation menu and the center region your dynamic content. 

![](attachments/2.1_atlasdefaultregions.png)

The navigation menu of Atlas Default, is a toggled menu. Options for this toggled menu are to shrink content (initially open) or to shrink content (initially closed).

Shrink content (initially open) - with this option the navigation menu will initially start open, at its maximum width displaying both the menuitem's description and icon. When toggled it will move to its minimum width and display just the menuitem's icon. The page's content (center region) also starts shrunk to make space for the open menu. 

![](attachments/2.1_shrinkingcontentopenoption.gif)

Shrink content (initially closed) - with this option the navigation menu will initially start closed, at its minimum width displaying just the menuitem's icon. When toggled it will move to its maximum width and display both the menuitem's icon and description. The page's content (center region) doesn't not start shrunk, but will shrink when sidebar is toggled. 

![](attachments/2.1_shrinkingcontentclosedoption.gif)

### 2.2 Atlas TopBar

The TopBar layout of Atlas, is also a responsive layout which can be used 
across web, tablet and mobile devices. 

![](attachments/2.1_atlastopbar.png)

It has three regions: top, left and center as well. The top region though contains both the brand logo and the navigation menu. The left region does contain a navigation menu, but it is only visible at the phone screen size. At that screen size the navigation menu in the top region will be hidden and replaced with a hamburger toggle which triggers the  opening and closing of the left region. The center region again houses the dynamic content of your app. 

![](attachments/2.1_atlastopbarregions.png)

The options for the sidebar unlike the Atlas Default are only applicable when the screen is at the phone size. You then have two options for how the sidebar is toggled: slide over content and push content aside. 

Slide over content - with this option the sidebar will move to overlay ontop of the content, hiding a portion (depends on the width of the sidebar) of the content. 

![](attachments/2.2_slideovercontent.gif)

Push content aside - with this option the sidebar will push the content off-screen. 

![](attachments/2.2_pushcontentaside.gif)

### 2.3 Choosing between layouts

Choosing between the two layouts: Atlas Default and Atlas Topbar, comes down to a decision of top navigation vs left navigation and which approach is better for your users. 

When it comes down to deisgning for your users, context is king. A navigation that works well in one context, may not as well in another. To figure out which navigation is best for your app, it’s important to understand the different contexts where the top and left navigation work best.

![](attachments/2.3_topvsleftnavigation.png)

### 2.3.1 Scanning

A left navigation is faster and more efficient for users to scan. In just three visual fixations, users scan six items in the left navigation compared to the three items scanned in the top navigation. The left navigation also facilitates a vertical scanning direction that is natural for people, while the top navigation forces a horizontal scanning direction that people often use when they’re reading.

### 2.3.2 Page space

A top navigation conserves more vertical page space than a left navigation. With a left navigation, the navigation links occupy the left column of your page. This shrinks and narrows the content area of your page, which means you will have less space for your content. A top navigation, however, uses minimal vertical space, which allows you to occupy the content area of your page with content only.

### 2.3.3 Item priority

Items in a top navigation do not have equal weight. The leftmost items carry more visual weight than other items because of its placement in the primary optical area (top left). Items in the top left area get more exposure and are often seen as more important than other items. The items in a left navigation, however, do have equal weight because they are all placed on the left with no other items in its opposing direction on the right. Because users read items from left to right, the priority direction for reading items is stronger horizontally than vertically.

### 2.3.4 Visibility

Top navigation items are more visible because they are always above the fold and are easier to find. Left navigation items are not always above the fold because sometimes if you have too many items, some of them can get pushed below the fold. Top navigations are also easier to find because they are usually accompanied by the header and logo, both of which are visually dominant objects on a web page.

## 3 Configuring the Sidebar

### 3.1 Set the toggled sidebar to Shrinking content (initially open)

To configure the toggled sidebar to shrinking content (initially open), follow these steps:

1. Open the page properties of the Home_Web page
![](attachments/3.1_pageproperties.png)

2. In the tab General, select Atlas_Default as the layout. 
![](attachments/3.1_layoutselection.png)

3. Then in the breadcrumb, navigate to the Atlas_Default navigation layout.
![](attachments/3.1_breadcrumb.png)

4. Open the region properties of the left sidebar
![](attachments/3.1_regionproperties.png)

5. In the tab General, select Shrinking content (initially open) as the toggle mode.
![](attachments/3.1_shrinkcontentopen.png) 

### 3.2 Toggling the sidebar for Shrinking content (initially open)

To toggle the sidebar for Shrinking content (initially open), follow these steps:

1. Run the project. 
![](attachments/3.2_runningproject.png)

2. In your browser, click the toggle button.
![](attachments/3.2_toggleshrinkingcontentopenoption.gif)

### 3.3 Set the toggled sidebar to Shrinking content (initially closed)

To configure the toggled sidebar to Shrinking content (initially closed), follow these steps:

1. Open the page properties of the Home_Web page
![](attachments/3.3_pageproperties.png)

2. In the tab General, select Atlas_Default as the layout. 
![](attachments/3.3_layoutselection.png)

3. Then in the breadcrumb, navigate to the Atlas_Default navigation layout.
![](attachments/3.3_breadcrumb.png)

4. Open the region properties of the left sidebar
![](attachments/3.3_regionproperties.png)

5. In the tab General, select Shrinking content (initially closed) as the toggle mode. 
![](attachments/3.3_shrinkcontentclosed.png) 

### 3.4 Toggling the sidebar for Shrinking content (initially closed)

1. Run the project. 
![](attachments/3.4_runningproject.png)

2. In your browser, click the toggle button.
![](attachments/3.4_toggleshrinkingcontentclosedoption.gif)

### 3.5 Set the toggled sidebar to Pushing content aside

To configure the toggled sidebar to Push content aside, follow these steps:

1. Open the page properties of the Home_Web page
![](attachments/3.5_pageproperties.png)

2. In the tab General, select Atlas_Topbar as the layout. 
![](attachments/3.5_layoutselection.png)

3. Then in the breadcrumb, navigate to the Atlas_Topbar navigation layout.
![](attachments/3.5_breadcrumb.png)

4. Open the region properties of the left sidebar
![](attachments/3.5_regionproperties.png)

5. In the tab General, select Push content aside as the toggle mode. 
![](attachments/3.5_pushcontentaside.png) 

6. (Optional) Change the Width to Percentage and enter 80 as the Width value. 
![](attachments/3.5_changewidth.png) 

### 3.6 Toggling the sidebar for Pushing content aside

To toggle the sidebar for Pushing content aside, follow these steps:

1. Run the project. 
![](attachments/3.6_runningproject.png)

2. In your browser, Inspect your Web Page (Right-click). 
![](attachments/3.6_inspector.png)

3. Click Toggle device toolbar. 
![](attachments/3.6_toggledevicetoolbar.png)

4. Change Emulated Device to iPhoneX or to an equivalent mobile device. 
![](attachments/3.6_selectdevicesize.png)

5. In your Emulated Device's browser window, click the toggle button.
![](attachments/3.6_pushingcontentaside.gif)

### 3.7 Set the toggled sidebar to Slide over content

To configure the toggled sidebar to Slide over content, follow these steps:

1. Open the page properties of the Home_Web page
![](attachments/3.7_pageproperties.png)

2. In the tab General, select Atlas_Topbar as the layout. 
![](attachments/3.7_layoutselection.png)

3. Then in the breadcrumb, navigate to the Atlas_Topbar navigation layout.
![](attachments/3.7_breadcrumb.png)

4. Open the region properties of the left sidebar
![](attachments/3.7_regionproperties.png)

5. In the tab General, select Slide over content as the toggle mode. 
![](attachments/3.7_slideovercontent.png) 

6. (Optional) Change the Width to Percentage and enter 80 as the Width value. 
![](attachments/3.7_changewidth.png) 

### 3.8 Toggling the sidebar for Slide over content

To toggle the sidebar for Slide over content, follow these steps:

1. Run the project. 
![](attachments/3.8_runningproject.png)

2. In your browser, Inspect your Web Page. 
![](attachments/3.8_inspector.png)

3. Click Toggle device toolbar. 
![](attachments/3.8_toggledevicetoolbar.png)

4. Change Emulated Device to iPhoneX or to an equivalent mobile device.
![](attachments/3.8_selectdevicesize.png)

5. In your Emulated Device's browser window, click the toggle button.
![](attachments/3.8_slidingovercontent.gif)

## 4 Read More

* Atlas UI {https://atlas.mendix.com/} - For more information on the Atlas UI framework. 
* Use Layouts & Snippets {https://docs.mendix.com/howto/front-end/layouts-and-snippets#4-1-layout-examples} - For information on how to create your own navigation layouts. 