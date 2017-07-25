---
title: "Mobile Forms"
parent: "forms"
---
{{% alert type="warning" %}}

This document describes what mobile forms are for and what kind of widgets can be placed on them. If you want to see the properties of the mobile form you can check the documentation for a [Mobile Form](mobile-form) itself.

{{% /alert %}}{{% alert type="warning" %}}

It is possible to wrap a Mendix application in a native app for iOS and Android. This also allows custom widgets to access native device functionality, e.g. the camera and GPS. You can find more information in the [Cordova tutorial](#).

{{% /alert %}}

Mobile Forms are used to create a user interface for the end user. They are composed of components that are called _widgets_. Below is a categorized overview of all the widgets. The following categories are used:

*   [Core widgets](mobile-forms) are central to building forms in Mendix. They are the widgets that can show a list of entities or a single entity.
*   [Layout widgets](mobile-forms) are used to structure the layout of your forms.
*   [Input widgets](mobile-forms) make it possible to show and edit the values of attributes and associations.
*   [Other widgets](mobile-forms) allow you to work with images, files and to create buttons and labels.
*   [Custom widgets](mobile-forms) can be downloaded from the Mendix Appstore or created by yourself.

## Core widgets

The core widgets are central to building forms in Mendix. They can show the contents of a single entity or of a list of entities. Every form that wants to show data from the domain model needs one of these components.

### List View

The list view shows a list of objects in a grid. For example, a list view can show all the orders a customer has placed. Using controls provided by the list view you can browse, search and edit those objects.

See [List View](list-view).

### Data view

The data view is a central component in Mendix applications. It is the starting point for showing the contents of exactly one object. If, for example, you want to show details of a single customer you would use a data view to do this. The data view typically contains a table with labels and input widgets like text boxes.

See [Data View](data-view).

## Layout widgets

Layout widgets give structure to a form. They do not manipulate data but provide a layout in which you can place other widgets that do.

### Table

Tables can be used to change the layout of the form. They contain a number of rows and columns and the intersection of the two is called a cell. Each cell can contain widgets again. Cells can be merged horizontally and vertically to allow for asymmetric layouts.

See [Table](table).

### Section

A section is a container in which other components can be placed. A list view, data view, table, navigation list, label, microflow trigger, link button, back button, drop down button, sign out button or another section can be placed on top level.

See [Section](section).

### Navigation List

A navigation list can be used to attach an action to an entire row. Such a row is called a navigation list item.

See [Navigation List](navigation-list).

## Input widgets

Input widgets are used for showing and entering data. They must be placed inside a data view because they show attributes or associations of an entity.

### Check box

A check box shows a box that is either ticked or empty. You can use it to display and/or edit a truth value.

See [Check Box](check-box).

### Date picker

A date picker can be used to display and/or edit a date value.

See [Date Picker](date-picker).

### Drop-down widget

A drop-down widget can be used to display and/or select an enumeration value.

See [Drop-Down Widget](drop-down-widget).

### Reference selector

The reference selector allows you to set an association of type reference by selecting an object. For example, in an order form you might be able to select the customer to whom the order applies. The reference selector shows an attribute of the associated entity, for example, the name of the customer.

See [Reference Selector](reference-selector).

### Reference set selector

The reference set selector allows you to set an association of type reference set by selecting objects. For example, if customers can belong to several groups, a reference set selector can be used to select the groups the customer belongs to. This requires that there is an association from customer to group of type reference set in the domain model.

See [Reference Set Selector](reference-set-selector).

### Text area

A text area can be used to display and/or edit a long text value that can be split over several lines.

See [Text Area](text-area).

### Text box

A text box can be used to display and/or edit a textual value. For long texts with multiple lines, use a text area instead.

See [Text Box](text-box).

## Other widgets

These other widgets allow you to manipulate images and files, place labels in table cells and provide buttons and links to click.

### Back Button

Pressing this button will navigate to the previously visited mobile form.

See [Back Button](back-button).

### Cancel Button

The cancel button works in conjunction with a top-level Mobile Data View. Pressing the button will roll back any changes made on the object shown in the data view.

See [Cancel Button](cancel-button).

### Drop Down Button

Pressing a drop down button shows a list of items. Each item has a caption and an image. Clicking an item may execute a microflow or open a form.

See [Drop Down Button](drop-down-button).

### Image viewer

An image viewer can be used to display an image or its thumbnail.

See [Image Viewer](image-viewer).

### Label

A label shows a line of static text. You can use it to place custom text on your form.

See [Label](label).

### Microflow trigger

A microflow trigger can be used to create a button or link that starts a microflow on a form.

See [Microflow Trigger](microflow-trigger).

### Link Button

Pressing a link button can trigger a variety of actions, some of which are specific to mobile devices.

See [Link Button](link-button).

### Save Button

The save button works in conjunction with a top-level Mobile Data View. Pressing the button will commit any changes made on the object shown in the data view.

See [Save Button](save-button).

### Sign Out Button

Pressing a sign out button will sign out the currently signed in user. When no user is signed in, pressing this button has no effect.

See [Sign Out Button](sign-out-button).

## Custom Widgets

If the project directory of your project has a widget directory with custom widgets, these custom widgets are available in the form editor.

For more information, see the [tutorials](/howto40/custom-widgets) for custom widgets.

{{% alert type="warning" %}}

Custom widgets that require the context of an entity should be inserted in a data view or list view.

{{% /alert %}}
