---
title: "Use Navigation Layouts"
url: /howto/front-end/use-navigation-layouts/
weight: 12
description: "Describes how to choose, design, and configure your navigation layouts."
---

## Introduction

This document will cover the basics of how you work with navigation layouts. 

This how-to teaches you how to do the following:

* Select the right navigation layout
* Understand the difference between top and left navigation
* Configure the sidebar toggle

## Selecting the Correct Navigation Layout

When building an app with Mendix, the first thing you have to decide is which navigation layout to choose. These layouts are the frames within which your dynamic pages are housed, and provide consistent structure throughout your app. 

Layouts specify what goes where. Each page is based on a layout. The layout contains widgets and structures that return on every page based on that layout. 

Mendix's Atlas UI provides two distinct web layouts for you to choose from: Atlas Default and Atlas Topbar.

### Atlas Default

The default layout of Atlas is a responsive layout which can be used across web, tablet, and mobile devices:

{{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.1_atlasdefault.png"   width="350"  class="no-border" >}}

It has three regions: top, left, and center. The top region contains the brand logo of your application, the left region your navigation menu, and the center region your dynamic content:

{{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.1_atlasdefaultregions.png"   width="350"  class="no-border" >}}

The navigation menu of Atlas Default is a toggled menu. Options for this toggled menu are to **shrink content (initially open)** or to **shrink content (initially closed)**:

* **Shrink content (initially open)** — the navigation menu will initially start open at its maximum width, displaying both the menu item's description and icon. When toggled it will move to its minimum width and display just the menu item's icon. The page's content (center region) also starts shrunk to make space for the open menu:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.1_shrinkingcontentopenoption.gif"   width="350"  class="no-border" >}}

* **Shrink content (initially closed)** — the navigation menu will initially start closed at its minimum width displaying just the menu item's icon. When toggled it will move to its maximum width and display both the menu item's icon and description. The page's content (center region) does not start shrunk, but will shrink when sidebar is toggled:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.1_shrinkingcontentclosedoption.gif"   width="350"  class="no-border" >}}

### Atlas TopBar

The TopBar layout of Atlas a responsive layout which can be used 
across web, tablet and mobile devices:

{{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.2_atlastopbar.png"   width="350"  class="no-border" >}}

It has three regions: top, left, and center. The top region contains both the brand logo and the navigation menu. The left region does contain a navigation menu, but it is only visible at phone screen size. At that screen size the navigation menu in the top region will be hidden and replaced with a hamburger toggle which triggers the opening and closing of the left region. The center region houses the dynamic content of your app:

{{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.2_atlastopbarregions.png"   width="350"  class="no-border" >}}

The options for the sidebar (unlike the Atlas Default) are only applicable at phone screen size. You then have two options for how the sidebar is toggled: **slide over content** and **push content aside**: 

* **Slide over content** — the sidebar will move to overlay on top of the content, hiding a portion (depends on the width of the sidebar) of the content:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.2_slidingovercontent.gif"   width="350"  class="no-border" >}}

* **Push content aside** — the sidebar will push the content off-screen: 

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.2_pushingcontentaside.gif"   width="350"  class="no-border" >}}

### Comparing the Two Layouts

Choosing which of the two layouts (Atlas Default and Atlas Topbar) is right for you comes down to choosing between top navigation versus left navigation, The information below will help you determine which approach better suits your users. The sections below assume your app is designed for users who read left to right, but Mendix may release more design guidance and options for other language cultures in the future.

When it comes down to designing for your users, context is key. A navigation that works well in one context might not in another. To determine which navigation is best for your app, it is important to understand the different contexts where the top and left navigation work best:

{{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.3_topvsleftnavigation.png"   width="350"  class="no-border" >}}

#### Scanning

Left navigation is faster and more efficient for users to scan. In just three visual fixations, users scan six items in the left navigation compared to the three items scanned in the top navigation. Left navigation also facilitates a vertical scanning direction that is natural for people, while top navigation forces a horizontal scanning direction that people often use when they are reading.

#### Page Space

Top navigation conserves more vertical page space than left navigation. With left navigation, the navigation links occupy the left column of your page. This shrinks and narrows the content area of your page, which means you will have less space for your content. Top navigation, however, uses minimal vertical space which allows you to fill your page's content area with content only.

#### Item Priority

Items in top navigation do not have equal weight. The leftmost items carry more visual weight than other items because of their placement in the primary visual area (top left). Items in the upper-left area get more exposure and are often seen as more important than other items. The items in left navigation, however, do have equal weight because they are all placed on the left with no other items in their opposing direction on the right. Because users read items from left to right, the priority direction for reading items is stronger horizontally than vertically.

#### Visibility

Top navigation items are more visible because they are always above the fold and are easier to find. Left navigation items are not always above the fold; sometimes if you have too many items a few of them can get pushed below the fold. Top navigations are also easier to find because they are usually accompanied by the header and logo, both of which are visually dominant objects on a web page.

## Configuring the Sidebar

### Setting Toggled Sidebar to Shrinking Content (Initially Open):

To configure the toggled sidebar to shrinking content (initially open), follow these steps:

1. Open the page properties of the **Home_Web** page:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.1_pageproperties.png"   width="350"  class="no-border" >}}

2. In the **General** tab, select **Atlas_Default** as the layout:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.1_layoutselection.png"   width="350"  class="no-border" >}}

3. In the breadcrumb, navigate to the **Atlas_Default** navigation layout:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.1_breadcrumb.png"   width="350"  class="no-border" >}}

4. Open the region properties of the left sidebar:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.1_regionproperties.png"   width="350"  class="no-border" >}}

5. In the **General** tab, select **Shrinking content (initially open)** as the toggle mode:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.1_shrinkcontentopen.png"   width="350"  class="no-border" >}}

### Toggling the Sidebar for Shrinking Content (Initially Open)

To toggle the sidebar for **Shrinking content (initially open)**, follow these steps:

1. Click **Run Locally** ({{% icon name="controls-play" %}}) to run your app.
2. In your browser, click the toggle button:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.2_toggleshrinkingcontentopenoption.gif"   width="350"  class="no-border" >}}

### Setting Toggled Sidebar to Shrinking Content (Initially Closed)

To configure the toggled sidebar to **Shrinking content (initially closed)**, follow these steps:

1. Open the page properties of the **Home_Web** page:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.3_pageproperties.png"   width="350"  class="no-border" >}}

2. In the **General** tab, select **Atlas_Default** as the layout:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.3_layoutselection.png"   width="350"  class="no-border" >}}

3. In the breadcrumb, navigate to the **Atlas_Default** navigation layout:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.3_breadcrumb.png"   width="350"  class="no-border" >}}

4. Open the region properties of the left sidebar:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.3_regionproperties.png"   width="350"  class="no-border" >}}

5. In the tab **General**, select **Shrinking content (initially closed)** as the toggle mode:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.3_shrinkcontentclosed.png"   width="350"  class="no-border" >}}

### Toggling the Sidebar for Shrinking Content (Initially Closed)

1. Click **Run Locally** ({{% icon name="controls-play" %}}) to run your app.
2. In your browser, click the toggle button:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.4_toggleshrinkingcontentclosedoption.gif"   width="350"  class="no-border" >}}

### Setting Toggled Sidebar to Pushing Content Aside

To configure the toggled sidebar to **Push content aside**, follow these steps:

1. Open the page properties of the Home_Web page:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.5_pageproperties.png"   width="350"  class="no-border" >}}

2. In the **General** tab, select **Atlas_Topbar** as the layout:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.5_layoutselection.png"   width="350"  class="no-border" >}}

3. In the breadcrumb, navigate to the **Atlas_Topbar** navigation layout:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.5_breadcrumb.png"   width="350"  class="no-border" >}}

4. Open the region properties of the left sidebar:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.5_regionproperties.png"   width="350"  class="no-border" >}}

5. In the **General** tab, select **Push content aside** as the toggle mode:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.5_pushcontentaside.png"   width="350"  class="no-border" >}}

6. Optionally, you can change the **Width to Percentage** and enter *80* as the **Width value**:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.7_changewidth.png"   width="350"  class="no-border" >}}

### Toggling the Sidebar for Pushing Content Aside

To toggle the sidebar for Pushing content aside, follow these steps:

1. Click **Run Locally** ({{% icon name="controls-play" %}}) to run your app.
2. In your browser, right-click your web page and click **Inspect**:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.6_inspector.png"   width="350"  class="no-border" >}}

3. Click the toggle device toolbar:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.6_toggledevicetoolbar.png"   width="350"  class="no-border" >}}

4. Change the emulated device to an **iPhoneX** or an equivalent mobile device: 

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.6_selectdevicesize.png"   width="350"  class="no-border" >}}

5. In your emulated device's browser window, click the toggle button:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.2_pushingcontentaside.gif"   width="350"  class="no-border" >}}

### Setting Toggled Sidebar to Slide Over Content

To configure the toggled sidebar to **Slide over content**, follow these steps:

1. Open the page properties of the **Home_Web** page:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.7_pageproperties.png"   width="350"  class="no-border" >}}

2. In the **General** tab, select **Atlas_Topbar** as the layout:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.7_layoutselection.png"   width="350"  class="no-border" >}}

3. In the breadcrumb, navigate to the **Atlas_Topbar** navigation layout:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.5_breadcrumb.png"   width="350"  class="no-border" >}}

4. Open the region properties of the left sidebar:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.7_regionproperties.png"   width="350"  class="no-border" >}}

5. In the **General** tab, select **Slide over content** as the toggle mode:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.7_slideovercontent.png"   width="350"  class="no-border" >}}

6. Optionally, change the **Width** to **Percentage** and enter *80* as the **Width value**: 

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.7_changewidth.png"   width="350"  class="no-border" >}}

### Toggling the Sidebar for Slide Over Content

To toggle the sidebar for **Slide over content**, follow these steps:

1. Click **Run Locally** ({{% icon name="controls-play" %}}) to run your app.
2. In your browser, right-click your web page and click **Inspect**:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.8_inspector.png"   width="350"  class="no-border" >}}

3. Click the toggle device toolbar:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.8_toggledevicetoolbar.png"   width="350"  class="no-border" >}}

4. Change the emulated device to an **iPhoneX** or an equivalent mobile device:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/3.8_selectdevicesize.png"   width="350"  class="no-border" >}}

5. In your emulated device's browser window, click the toggle button:

    {{< figure src="/attachments/howto/front-end/use-navigation-layouts/2.2_slidingovercontent.gif"   width="350"  class="no-border" >}}

## Read More

* Check the [Atlas UI](https://www.mendix.com/atlas/) page for more information on the Atlas UI framework
* See the [Layout Examples](/howto/front-end/layouts-and-snippets/#layout-examples) section of *How to Use Layouts and Snippets* for more information on creating your own navigation layouts
