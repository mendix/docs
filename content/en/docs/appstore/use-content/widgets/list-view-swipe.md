---
title: "List View Swipe"
deprecated: true
url: /appstore/widgets/list-view-swipe/
description: "Describes the configuration and usage of the List View Swipe widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This widget is deprecated.
{{% /alert %}}

## Introduction

The [List View Swipe](https://marketplace.mendix.com/link/component/47781/) widget makes it possible for the app end-user to perform a swipe action on a list view.

### Features

* Open a page after an item is swiped
* Execute a microflow after an item is swiped
* Show button behind a list view item
* Make item gradually transparent during swiping
* Animate the hiding of an item after a swipe (for deletion) or reset it to its original position (for an open page)
* Add a background in a list view item
* Add a background to be shown after swipe
* Items swiped out less 30% are canceled
* The list-view click action and button on the foreground can be used as normal

### Limitations

* This widget cannot handle a list view in a list view
* The opened page should contain a data view of the **Item entity** type, but this is not checked for the widget in runtime.
* Swiping should be horizontal – when the swiping involves too much movement, the swipe is canceled

## Configuration

Follow these steps to configure this widget at a basic level:

1. Place the widget directly underneath the list view.
2. Provide the name of the list view in **General** > **Target list view** in the widget editor.
3. Configure a **Swipe to left** or **Swipe to right** action on those respective editor tabs.

## Styling

Use the following details for styling:

* The styling base class is `.widget-listview-swipe`
* This is the default style, which can be overwritten in CSS:
    * The `widget-listview-swipe-foreground` is white (#FFFFF)
    * The `widget-listview-swipe-background` is light light gray (#d3d3d3)
    * The `widget-listview-swipe-background-after` is gray (#808080)
* You can apply a custom style for the whole swipe widget to the following:
    * `.widget-listview-swipe-foreground`
    * `.widget-listview-swipe-background-left`
    * `.widget-listview-swipe-background-right`
    * `.widget-listview-swipe-background-shared`
    * `.widget-listview-swipe-background-after-left`
    * `.widget-listview-swipe-background-after-right`
    * `.widget-listview-swipe-background-after-shared`
* To disable classes, use the following:
    * `.widget-listview-swipe-disabled`
    * `.widget-listview-swipe-disabled-left`
    * `.widget-listview-swipe-disabled-right`
* These interactive classes are attached during an action: 
    * `.will-accept-swipe`
    * `.swiping-right`
    * `.swiping-left`

### Designing the Background

To design the background of the view, follow these steps:

1. Create one to four containers inside the list view item:
    * The "swipe" container is shown as the foreground and is swiped away – add the `widget-listview-swipe-foreground` class to place this over the background containers
    * The  "hide" container is shown after swiping, during the hide animation
    * It is possible to create a container for left and right swiping, or to share the containers
2. Add the container names to their respective fields in the widget editor (as in, **Swipe container** and **Hide container** as configured on the **Swipe to left** or **Swipe to right** tabs).

### Disabling the Swipe

In some scenarios, swiping should be (conditionally) disabled. To disable a single swipe item, add the `.widget-listview-swipe-disabled`, `.widget-listview-swipe-disabled-left`, or `.widget-listview-swipe-disabled-right` CSS class to the list view item. To disable all the swipe actions, add the class to the list view .

You can use other custom widgets (for example, [EnumClass](https://marketplace.mendix.com/link/component/2641/)) to change the classes dynamically at runtime. 
