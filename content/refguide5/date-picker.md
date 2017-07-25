---
title: "Date picker"
parent: "input-widgets"
---


A date picker is an [input widget](input-widgets) that can be used to display and edit date/time attributes. It takes into account the language setting to display a localized calendar.

{{% alert type="info" %}}

![](attachments/4522283/14385224.png)
This date picker allows the end-user to set the birth date of the customer.

{{% /alert %}}

## General properties

### Date format

The date format determines whether the date picker displays the date, time, date and time, or a custom variation of the linked attribute. This does not affect how data is stored; in all cases both a date and a time will be recorded. It merely affects how the data is displayed. How the date and/or time are formatted depend on the localization of the user viewing the data.

Possible values: 'Date', 'Time', 'Date and time' and 'Custom'.

_Default value:_ Date

### Custom date format

If you choose 'Custom' as the date format (see above) this property determines how the attribute value is formatted. The custom date format is a string that allows for any combination of symbols found in the table below. Any punctuation will be rendered literally.

<table><thead><tr><th class="confluenceTh">Symbol</th><th class="confluenceTh">No.</th><th class="confluenceTh">Example</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">G</td><td class="confluenceTd">1</td><td class="confluenceTd">AD</td><td class="confluenceTd">Era</td></tr><tr><td class="confluenceTd">y</td><td class="confluenceTd">1..n</td><td class="confluenceTd">2010</td><td class="confluenceTd">Year</td></tr><tr><td class="confluenceTd">M</td><td class="confluenceTd">1..2</td><td class="confluenceTd">09</td><td class="confluenceTd">Month</td></tr><tr><td class="confluenceTd">M</td><td class="confluenceTd">3</td><td class="confluenceTd">Sept</td></tr><tr><td class="confluenceTd">M</td><td class="confluenceTd">4</td><td class="confluenceTd">September</td></tr><tr><td class="confluenceTd">w</td><td class="confluenceTd">1..2</td><td class="confluenceTd">27</td><td class="confluenceTd">Week of year</td></tr><tr><td class="confluenceTd">d</td><td class="confluenceTd">1..2</td><td class="confluenceTd">12</td><td class="confluenceTd">Day of month</td></tr><tr><td class="confluenceTd">D</td><td class="confluenceTd">1..3</td><td class="confluenceTd">93</td><td class="confluenceTd">Day of year</td></tr><tr><td class="confluenceTd">a</td><td class="confluenceTd">1</td><td class="confluenceTd">AM</td><td class="confluenceTd">AM or PM</td></tr><tr><td class="confluenceTd">h</td><td class="confluenceTd">1..2</td><td class="confluenceTd">11</td><td class="confluenceTd">Hour (1-12)</td></tr><tr><td class="confluenceTd">H</td><td class="confluenceTd">1..2</td><td class="confluenceTd">13</td><td class="confluenceTd">Hour (0-23)</td></tr><tr><td class="confluenceTd">k</td><td class="confluenceTd">1..2</td><td class="confluenceTd">10</td><td class="confluenceTd">Hour (1-24)</td></tr><tr><td class="confluenceTd">K</td><td class="confluenceTd">1..2</td><td class="confluenceTd">0</td><td class="confluenceTd">Hour (0-11)</td></tr><tr><td class="confluenceTd">m</td><td class="confluenceTd">1..2</td><td class="confluenceTd">59</td><td class="confluenceTd">Minute, use one or two for zero padding</td></tr><tr><td class="confluenceTd">s</td><td class="confluenceTd">1..2</td><td class="confluenceTd">12</td><td class="confluenceTd">Second, use one or two for zero padding</td></tr><tr><td class="confluenceTd">S</td><td class="confluenceTd">1..3</td><td class="confluenceTd">153</td><td class="confluenceTd">Milliseconds</td></tr><tr><td class="confluenceTd">E</td><td class="confluenceTd">1..3</td><td class="confluenceTd">Thu</td><td class="confluenceTd">Day of week</td></tr><tr><td class="confluenceTd">E</td><td class="confluenceTd">4</td><td class="confluenceTd">Thursday</td><td class="confluenceTd">Day of week</td></tr><tr><td class="confluenceTd">z</td><td class="confluenceTd">1..3</td><td class="confluenceTd">PST</td><td class="confluenceTd">Time zone</td></tr><tr><td class="confluenceTd">z</td><td class="confluenceTd">4</td><td class="confluenceTd">Pacific Standard Time</td><td class="confluenceTd">Time zone</td></tr><tr><td class="confluenceTd">Z</td><td class="confluenceTd">4</td><td class="confluenceTd">GMT-04:0 0</td><td class="confluenceTd">Time zone offset</td></tr></tbody></table>

<table><thead><tr><th class="confluenceTh">Format</th><th class="confluenceTh">Example output</th></tr></thead><tbody><tr><td class="confluenceTd"><code>EEEE d MMMM yyy G, h:mm a ss's</code></td><td class="confluenceTd">Tuesday 29 March 2011 AD, 1:37 PM 48s</td></tr><tr><td class="confluenceTd"><code>h:mm a</code></td><td class="confluenceTd">1:37 PM</td></tr><tr><td class="confluenceTd"><code>yyy D KK:mm</code></td><td class="confluenceTd">2011 88 01:26</td></tr><tr><td class="confluenceTd"><code>EEEE MMMM d yyy</code></td><td class="confluenceTd">Tuesday March 29 2011</td></tr><tr><td class="confluenceTd"><code>EEE, MMM d, ''yy</code></td><td class="confluenceTd">Wed, Jul 4, '01</td></tr></tbody></table>

### Placeholder Text

The placeholder text is shown if the date attribute is empty. It can be used to give the end user a hint as to the expected format. Note: placeholder texts will not work if a native date picker is available (e.g. iOS and Android versions 4.0 and higher).

### Required

This property indicates whether this widget must be filled in by the end user or not. If set to true, this widget can not be left empty and a message will be shown if the end user presses the 'Save' button.

_Default value:_ False

### Required message

This property determines the message that is shown to the end user if the widget is empty and the 'Required' property is set to true. This is a translable text. See [Translatable Texts](translatable-texts).

{{% alert type="info" %}}

For example, if an address field is required, the required message for the text box of the address could be something like "The address is required."

{{% /alert %}}

## Data source properties

### Attribute (path)

Many input widgets, like text boxes and drop-down widgets, can be connected to:

1.  an attribute of the entity of the data view that contains the widget
2.  an attribute of an entity associated with the data view entity by following one or more associations of type reference through the domain model.

In the first case we say the widget is connected to an attribute and in the second case to an attribute path.

{{% alert type="warning" %}}

An input widget connected to an attribute _path_ must be read-only. The Modeler will check this for you.

{{% /alert %}}

## Label properties

{{% alert type="info" %}}

Added in Mendix 5.18.0

{{% /alert %}}

A label can be used to described the purpose of the widget to the user. The label is shown next to the widget in the user interface. If a label is configured, the widget will be rendered in the browser wrapped in a form group. See [Bootstrap documentation](http://getbootstrap.com#forms).

### Show label

This property determines whether the label is rendered and the widget is wrapped in a form group.

_Default value:_ No

### Label caption

This property is shown only when Show label is Yes. This property determines what text is rendered within a label.

## Editability properties

### Editable

The editable property indicates whether the end user will be able to change the value displayed by the widget.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Default</td><td class="confluenceTd">The value is editable if security allows it (i.e. if the user that is signed in has write rights to the selected attribute).<br class="atl-forced-newline"></td></tr><tr><td class="confluenceTd">Never<br class="atl-forced-newline"></td><td class="confluenceTd">The value is never editable.<br class="atl-forced-newline"></td></tr><tr><td class="confluenceTd">Conditional<br class="atl-forced-newline"></td><td class="confluenceTd">The value is editable if security allows it and the specified condition holds. (see below)<br class="atl-forced-newline"></td></tr></tbody></table>

_Default value:_ Default

### Condition

A widget can be made editable based on the value of an attribute of the enclosing data view. The attribute must be of type boolean or enumeration. For each value, you specify whether the widget is editable. Upon entering the page and upon changing the condition attribute the edit state of the widget will be updated.

Example: you don't have to ask for the marriage date if the end user indicates that he or she is not married.

## Visibility properties

{{% alert type="info" %}}
Conditional visibility settings were added in version 5.10.0.
{{% /alert %}}

### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met. 

## Attribute Condition

### Attribute

When checked, this setting hides the widget unless a particular attribute has a certain value. Only boolean and enumeration attributes can be assigned to this purpose.

A practical example would be a web shop in which the user must submit both billing and delivery information. In this case you might not wish to bother the user with a second set of address input fields unless he or she indicates that the billing and delivery address are not the same. You can accomplish this by making the delivery address fields conditionally visible based on the boolean attribute SameBillingAndDeliveryAddress.

### Module roles

The widget can be made visible to a subset of the user roles available in your application. When activated, this setting will render the widget invisible to all users that are not linked to one of the selected user roles. Please note that this does not override project security. Any restrictions due to microflow, form, or entity access will remain in effect.

## Events properties

### On change

The on-change property optionally specifies a microflow that will be executed when leaving the widget after the value has been changed.

### On change settings

The on change settings specify what parameters are passed to the microflow, whether a progress bar is shown and more.

See [Starting Microflows](starting-microflows).

### On enter

The on-enter property optionally specifies a microflow that will be executed when the widget is entered, either by using the tab key or by clicking it with the mouse.

### On enter settings

The on enter settings specify what parameters are passed to the microflow, whether a progress bar is shown and more.

See [Starting Microflows](starting-microflows).

### On leave

The on-leave property optionally specifies a microflow that will be executed when leaving the widget, either by using the tab key or by clicking another widget.

### On leave settings

The on leave settings specify what parameters are passed to the microflow, whether a progress bar is shown and more.

See [Starting Microflows](starting-microflows).

## Common properties

### Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class '`mx-name-{NAME}`', which can be useful for [Selenium testing](/howto50/selenium-support).

### Class

The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget.

{{% alert type="warning" %}}

Note that the styling is applied in the following order:

1.  Default styling defined by the theme the project uses.
2.  The 'Class' property of the widget.
3.  The 'Style' property of the widget.

{{% /alert %}}

### Style

The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied _after_ the class.

{{% alert type="info" %}}

background-color:blue;
This will result in a blue background

{{% /alert %}}

### Tab index

The tab index influences the order in which the end user navigates through the page using the tab key. By default tab indices are zero and the tab order is determined automatically by the client system. A value of minus one (-1) means that the widget will be skipped when tabbing through the page.

_Default value:_ 0

## Related articles

*   [Data view](data-view)
*   [Attributes](attributes)
