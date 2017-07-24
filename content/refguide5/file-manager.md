---
title: "File manager"
parent: "file-widgets"
---


A file manager is used to upload and/or download files.

{{% alert type="info" %}}

![](attachments/4522251/14385229.png)

{{% /alert %}}

It must be placed inside a data view connected to the entity System.FileDocument or a specialization thereof.

## General properties

### Type

This property indicates how the end user can interact with the file manager.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Upload</td><td class="confluenceTd">The file manager can only be used to upload a file.</td></tr><tr><td class="confluenceTd">Download</td><td class="confluenceTd">The file manager can only be used to download a file.</td></tr><tr><td class="confluenceTd">Both</td><td class="confluenceTd">The file manager can be used to upload, and to download a file.</td></tr></tbody></table>

_Default value:_ Both

### Max file size (MB)

This property determines the maximum size of files (in megabytes) that can be uploaded.

_Default value:_ 5

### Allowed extensions

You can specify the file extensions that are allowed to be uploaded. If no extensions are specified all file extensions are allowed. Separate multiple extensions by a semi-colon, e.g. `txt;doc`

If a file with an extension that is not allowed is selected, a system text (File manager > Incorrect file extension) will be shown underneath the file manager.

### Show file in browser

This property indicates whether the file will be shown in the browser, instead of being downloaded.

_Default value:_ False

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

{{% alert type="info" %}}
Added in Mendix 5.18.0.
{{% /alert %}}

### Editable

The editable property indicates whether the end user will be able to change the value displayed by the widget.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Default</td><td class="confluenceTd">The value is editable if security allows it (i.e. if the user that is signed in has write rights to the selected attribute).<br class="atl-forced-newline"></td></tr><tr><td class="confluenceTd">Never<br class="atl-forced-newline"></td><td class="confluenceTd">The value is never editable.<br class="atl-forced-newline"></td></tr><tr><td class="confluenceTd">Conditional<br class="atl-forced-newline"></td><td class="confluenceTd">The value is editable if security allows it and the specified condition holds. (see below)<br class="atl-forced-newline"></td></tr></tbody></table>

_Default value:_ Default

### Condition

A widget can be made editable based on the value of an attribute of the enclosing data view. The attribute must be of type boolean or enumeration. For each value, you specify whether the widget is editable. Upon entering the page and upon changing the condition attribute the edit state of the widget will be updated.

Example: you don't have to ask for the marriage date if the end user indicates that he or she is not married.

## Visibility properties

{{% alert type="info" %}}
Added in Mendix 5.10.0.
{{% /alert %}}

### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met. 

## Attribute Condition

### Attribute

When checked, this setting hides the widget unless a particular attribute has a certain value. Only boolean and enumeration attributes can be assigned to this purpose.

A practical example would be a web shop in which the user must submit both billing and delivery information. In this case you might not wish to bother the user with a second set of address input fields unless he or she indicates that the billing and delivery address are not the same. You can accomplish this by making the delivery address fields conditionally visible based on the boolean attribute SameBillingAndDeliveryAddress.

### Module roles

The widget can be made visible to a subset of the user roles available in your application. When activated, this setting will render the widget invisible to all users that are not linked to one of the selected user roles. Please note that this does not override project security. Any restrictions due to microflow, form, or entity access will remain in effect.

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
*   [Entities](entities)
*   [Associations](associations)
