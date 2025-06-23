---
title: "Accessibility Helper"
url: /appstore/widgets/accessibility-helper/
description: "Describes the Accessibility Helper widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Accessibility Helper](https://marketplace.mendix.com/link/component/114803/) widget allows a user to add a list of HTML properties to elements in the HTML `page.carousel`.

### Features

* Target elements via CSS selectors for easy usage
* Multiple CSS selectors are allowed
* HTML attributes can be dynamic values
* HTML attributes can be conditionally added or removed

## Usage

The widget acts like a container and alters the elements inside it. In order to change elements, HTML attributes act in ways described in the sections below.

### Dragging Widgets into Accessibility Helper

Since Accessibility Helper is a containment widget it will try to change the widgets inside it. Thus the user must drag the widgets they want to change into Accessibility Helper.

### Specifying the Target Selector

Target selector is a basic CSS selector, and more information can be found in Mozilla's [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

### Adding New Accessibility Properties

Every HTML attribute consists of a `name` and a `value`. The user can add any attribute by filling the HTML attributes list. However, the following attribute names are not allowed since they will interfere with Mendix's core mechanism: `class`, `style`, `widgetid`, and `data-mendix-id`.

After selecting a `name` for the attribute, the user can determine what kind of value the attribute will get via `Source Type` (`Text` or `Expression`). `Text` can be used for static values, while `Expression` can be used for dynamic values. 

The user may can select how this HTML attribute can be set using `Condition`.
