---
title: "Implement Classes"
url: /howto/front-end/styles/
description: "Describes details on using class names for text colors, buttons, and other style elements."
weight: 45
---

## Introduction

This page contains useful class names that can be used to make your app more beautiful without writing CSS. Class names can be added to the properties of page widgets. Several classes can be added to the same widget by separating the class names with a space.

Class names can be entered in two locations:

* The **Properties** panel of Studio Pro
* The **Properties** pop-up window for the widget

This how-to teaches you how to do the following:

* Use class names to implement text and background colors, typography, buttons, list views, alerts, and other elements

## Text Colors

Add these classes to an element to change the text color to your theme colors:

* `text-default`: default text color
* `text-primary`: primary brand color
* `text-info`: info brand color
* `text-success`: success brand color
* `text-warning`: warning brand color
* `text-danger`: danger brand color

These are standard useful text colors:

* `text-white`: white text
* `text-black`: black text
* `text-gray-primary`: primary gray text
* `text-gray`: gray text
* `text-gray-dark`: dark gray text
* `text-gray-darker`: darker gray text
* `text-gray-light`: light gray text
* `text-gray-lighter`: lighter gray text

## Background Colors

The background colors are based on your theme colors. These are the same colors as for the buttons:

* `background-primary`: primary background color
* `background-info`: info background color
* `background-success`: success background color
* `background-warning`: warning background color
* `background-danger`: danger background color

A lighter variant of the background color also sets the matching foreground color:

* `bg-primary`: primary background color
* `bg-info`: info background color
* `bg-success`: success background color
* `bg-warning`: warning background color
* `bg-danger`: danger background color

These are background colors for your layout:

* `background-layout`: default layout background
* `background-layout-secondary`: alternative layout background
* `background-default`: default layout background
* `background-default-dark`: dark layout background
* `background-default-darker`: darker layout background
* `background-default-light`: light layout background
* `background-default-lighter`: lighter layout background

## Typography

These are useful classes for text items:

* `text-normal`: normal text
* `text-bold`: bold text
* `text-spacing`: adds spacing to the text bottom and top
* `text-lined`: underlines the text-lined
* `text-break`: breaks text over multiple lines
* `text-uppercase`: transforms the text to upper case
* `text-lowercase`: transforms the text to lower case
* `text-capitalize`: capitalizes every word

To align texts, add these to the container holding the text:

* `text-right`: aligns the text to the right
* `text-center`: aligns the text to the center
* `text-left`: aligns the text to the left (default)

Other:

* `nowrap`: don't wrap texts

## Buttons

You can change the appearance of a button:

* `btn-lg`: large button
* `btn-sm`: small button
* `btn-block`: spans the full width of the parent
* `btn-bordered`: bordered button
* `btn-transparent`: transparent background
* `btn-image`: transparent button with image nicely align
* `pull-right` or `btn-right`: aligns the button to the right
* `btn-attached-right`: adds left margin
* `btn-attached-left`: adds right margin
* `btn-attached-bottom`: adds top margin
* `btn-attached-top`: adds bottom margin

## Layout Grid

You can change the appearance of a layout grid:

* `v-center`: vertically aligns elements in a Bootstrap row; add this class on a row in a layout grid
* `no-gutter`: removes padding for Bootstrap columns; add this class on a row in a layout grid

{{% alert color="info" %}}**Phones:**

For phones, also add `col-xs-N` (where `N` is the size of the column) to the layout grids to make the columns appear next to each other. 

{{% /alert %}}

For more information on grid options, including suggestions and examples, see [Bootstrap CSS Grid Options](https://getbootstrap.com/docs/3.3/css/#grid-options).

## List View

Change the way items appear in a list:

* `listview-lined`: list view widget with only a bordered bottom in a list view item
* `listview-striped`: list view widget with striped list view items
* `listview-seperated`: list view widget with list view items separated
* `listview-stylingless`: list view widget without spacing and background

## Alerts

Create alerts with standard containers.

* `alert`: makes an alert of a container; use in combination with the next classes
* `alert-success`: creates a success alert
* `alert-info`: creates an info alert
* `alert-warning`: creates a warning alert
* `alert-danger`: creates a danger alert

Also see [Bootstrap Alert Component](https://getbootstrap.com/docs/3.3/components/#alerts).

## Other

Change the way tabs appear:

* `tab-mobile`: makes the tab full width and stick to the header

## More Bootstrap

Many of these classes are part of Bootstrap. For more information about classes and Bootstrap, see [Bootstrap CSS](https://getbootstrap.com/docs/3.3/css/).

## Read More

* [Mendix Atlas UI](https://www.mendix.com/atlas/)
