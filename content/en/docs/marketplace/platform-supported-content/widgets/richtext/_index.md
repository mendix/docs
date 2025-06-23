---
title: "Rich Text"
url: /appstore/widgets/rich-text/
description: "Describes the configuration and usage of the Rich Text widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
This documentation applies to Rich Text widget versions 4.0 and above. 

For documentation on Rich Text widget versions 3 with TinyMCE, see [Rich Text v3](/appstore/widgets/rich-text-v3/).
For documentation on Rich Text widget versions 2 with CKEditor4, see [Rich Text v2](/appstore/widgets/rich-text-v2/).

Due to TinyMCE changing its public license, we transitioned to the Quill V2 library in Rich Text 4.
{{% /alert %}}

The [Rich Text](https://marketplace.mendix.com/link/component/74889/) widget provides the user with an WYSIWYG editor, where the user can enter and edit rich-text content. The widget automatically converts the rich-text content into a string in HTML format, which can be stored in an attribute of an entity.

{{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/rich-text-v4.png" alt="Example" >}}

### Features

* Allows the user to enter and format text in a WYSIWYG editor
* Configures which buttons are available on the toolbar of the editor
* Automatically outputs the formatted text in a string in HTML format
* Sanitizes the user's input automatically
* Supports spelling and grammar checker in the editor
* Supports code highlight, which enables the user to insert code fragments and have a live preview with highlighted syntax

{{% alert color="info" %}}

Unlike Rich Text v3, this version no longer hosts the editor inside a sandboxed `iframe`. Thus, page styling will directly affect the rich text's styling.

{{% /alert %}}

## Configuration

To configure this widget, follow these steps:

1. Place the rich text widget in a data view, list view, or a template grid with a data source that has a string attribute to store the rich-text content.
1. Double-click the rich text widget to open the **Edit Rich Text** dialog box.
1. Configure the widget using the properties described in the sections below.

### General Tab

* **Data source**
    * **Value attribute** (required) – sets a String attribute to store the rich-text content
* **General** 
    * **Show label** 
        * **Yes** – if selected, you can define the label caption
            * **Label caption** – defines the label caption of the widget that is displayed on the page
        * **No** (default) – if selected, there is no label for this widget on the page
    * **Enable status bar** display status bar on the bottom of the editor
* **Toolbar**
    * **Toolbar** display toolbar based on the selected location on the editor
        * **Basic** – if selected, the following menu will be shown: 
            * | bold italic | numlist bullist | outdent indent | link | removeformat 
        * **Standard** – if selected, the following menu will be shown: 
            * | undo redo | bold italic underlined | bullist numlist loweralphalist | outdent indent | ltr rtl | alignleft aligncenter alignjustify alignright | fontfamily fontsize forecolor backcolor | link image | blockquote codesample codeblock (view/edit)code | removeformat
        * **Full** – if selected, the following menu will be shown: 
            * | undo redo | bold italic underlined strikethrough | superscript subscript | bullist numlist loweralphalist checklist | outdent indent | ltr rtl | alignleft aligncenter alignjustify alignright | fontfamily fontsize forecolor backcolor | link image video formula | heading | blockquote codesample codeblock (view/edit)code | removeformat
        * **Custom** – allows you to make your own menubar selection based on the **full** selection list
    * **Location** 
        * **Sticky** – if selected, toolbar will be placed on the top of the editor and sticky position will apply upon scrolled
        * **Top** – if selected, toolbar will be placed on the top of the editor
        * **Bottom** – if selected, toolbar will be placed on the bottom of the editor
        * **Hide** – if selected, toolbar will be hidden or not shown

* **Editable** – determines when user can edit content in the editor and when it is read-only.

    {{% alert color="info" %}}For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in the *Studio Pro Guide*.{{% /alert %}}

    * **Read-only style** - determines the style of the rich text when set to read-only

* **Visible** – determines if the widget is visible on the page

    {{% alert color="info" %}}For more information, see [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in the *Studio Pro Guide*.{{% /alert %}}

### Custom Toolbar Tab

* **Custom** – allows you to make your toolbar with customized options
    * **Toolbar group** 
        * **Basic** (default) – if selected, you can select which of the following toolbar groups are available in the toolbar
            * **Edit history** - items: undo, redo
            * **Font style** - items: bold, italic, underline, strikethrough
            * **Font script** - items: superscript, subscript
            * **List** - items: bullist numlist loweralphalist checklist
            * **Indentation** - items: outdent, indent, ltr rtl
            * **Embedded media** - items: link, image, video, formula
            * **Alignment** - items: alignleft aligncenter alignjustify alignright
            * **Syntax** - items: blockquote, codesample, codeblock, (view/edit)code
            * **Font colors** - items: fontfamily, fontsize, forecolor, backcolor
            * **Content type** - items: header
            * **Removal** - items: clear
        * **Advanced** – if selected, you can configure buttons for different toolbar groups

            {{% alert color="info" %}}All the toolbar groups that you configure will be available in the toolbar. With vertical bars or separator options ("|"), you can separate different toolbar groups.{{% /alert %}}

            * **New** – opens the **Edit Advanced Groups Item** dialog box where you can add a new button to a toolbar group
                * **Button** – specifies the button to be included in the toolbar
            * **Delete** – deletes the selected button
            * **Edit** – opens the **Edit Advanced Groups Item** dialog box where you can make changes to the selected button 

### Dimensions Tab

* **Width unit** – the width of the widget
    * **Percentage** – specifies the width in relation to the rest of the elements on the page
    * **Pixels** – specifies the width in pixels
* **Width** – used as an appropriate CSS value
* **Height unit** – the height of the widget
    * **Percentage of width** – specifies the height in relation to the width
    * **Pixels** – specifies the height in pixels
    * **Percentage of parent** – specifies the width in relation to the rest of the elements on the page
* **Height** – used as an appropriate CSS value
* **Minimum height** – applicable if height is relative to parent's percentage

### Events Tab

* **On change** – specifies an action to execute when the user changes the value of the editor
    * **On change type** - specifies which type of event that will trigger the on change action
        * **When user leaves input field** - if selected, an on change action will be triggered when user moves focus out of the editor
        * **While user is entering data** - if selected, an on change action will be triggered each time a data change occurs
* **On enter** – specifies an action to execute when the user focuses on the editor
* **On leave** – specifies an action to execute when the user move focus out of the editor
* **On load** – specifies an action to execute after the editor is fully loaded in the DOM

### Advanced Tab

* **Enable spell checking** – configures to use the browser’s native spell checker

### Common Tab

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.
