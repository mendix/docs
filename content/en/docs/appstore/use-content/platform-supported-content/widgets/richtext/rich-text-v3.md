---
title: "Rich Text v3"
url: /appstore/widgets/rich-text-v3/
category: "Widgets"
description: "Describes the configuration and usage of the Rich Text widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "rich text", "platform support"]
weight: 60
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
This documentation applies to Rich Text widget versions 3 that use the TinyMCE library.

For documentation on Rich Text widget versions 4 with QuillV2, see [Rich Text](/appstore/widgets/rich-text/) documentation.
For documentation on Rich Text widget versions 2 with CKEditor4, see [Rich Text v2](/appstore/widgets/rich-text-v2/).

Due to TinyMCE changing its public license, we transitioned to the Quill V2 library in Rich Text 4.
{{% /alert %}}

The [Rich Text](https://marketplace.mendix.com/link/component/74889/) widget provides the user with an WYSIWYG editor, where the user can enter and edit rich-text content. The widget automatically converts the rich-text content into a string in HTML format, which can be stored in an attribute of an entity.

{{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/example.png" alt="Example" >}}

### Features

* Allows the user to enter and format text in a WYSIWYG editor
* Configures which buttons are available on the toolbar of the editor
* Automatically outputs the formatted text in a string in HTML format
* Sanitizes the user's input automatically or with additional rules
* Supports spelling and grammar checker in the editor
* Supports code highlight, which enables the user to insert code fragments and have a live preview with highlighted syntax
* Supports the following keyboard shortcuts in the editor:
    * <kbd>Ctrl</kbd> + <kbd>B</kbd> – bold
    * <kbd>Ctrl</kbd> + <kbd>I</kbd>– italicize
    * <kbd>Ctrl</kbd> + <kbd>U</kbd> – underline
    * <kbd>Ctrl</kbd> + <kbd>Z</kbd> – undo
    * <kbd>Ctrl</kbd> + <kbd>Y</kbd> – redo
    * <kbd>Ctrl</kbd> + <kbd>C</kbd> – copy
    * <kbd>Ctrl</kbd> + <kbd>V</kbd> – paste
    * <kbd>Ctrl</kbd> + <kbd>K</kbd> – insert link
    * <kbd>tab</kbd> – moves the focus to the next element

For more details, click the **Help** button on the toolbar.

## Configuration

To configure this widget, follow these steps:

1. Place the rich text widget in a data biew, list view, or a template grid with a data source that has a string attribute to store the rich-text content.
1. Double-click the rich text  widget to open the **Edit Rich Text** dialog box.
1. Configure the widget using the properties described in the sections below.

### General Tab

* **Data source**
    * **Value attribute** (required) – sets a String attribute to store the rich-text content
* **General** 
    * **Show label** 
        * **Yes** – if selected, you can define the label caption
            * **Label caption** – defines the label caption of the widget that is displayed on the page
        * **No** (default) – if selected, there is no label for this widget on the page
    * **Menu bar** display menu bar on top of the editor
        * **Hidden** – if selected, no menu bar is shown
        * **Basic** – if selected, the following menu will be shown: 
            * | file | edit | insert |  view |
        * **Full** – if selected, the following menu will be shown: 
            * | file |  edit | insert |  view | format | table |  tools |  help |
        * **Custom** – allows you to make your own menubar selection based on the **full** selection list
    * **Enable status bar** display status bar on the bottom of the editor
* **Toolbar**
    * **Toolbar** display toolbar based on the selected location on the editor
        * **Basic** – if selected, the following menu will be shown: 
            * | bold italic | bullist numlist | outdent indent | link | removeformat | help |
        * **Standard** – if selected, the following menu will be shown: 
            * | undo redo | bold italic strikethrough | removeformat | bullist numlist | blockquote | outdent indent | ltr rtl | alignleft aligncenter alignright alignjustify | fontfamily fontsize forecolor backcolor | image link media | blocks anchor | cut copy paste pastetext | codesample preview code | selectall fullscreen | help |
        * **Full** – if selected, the following menu will be shown: 
            * | undo redo | bold italic underline strikethrough | superscript subscript | removeformat | bullist numlist | blockquote | outdent indent | ltr rtl | alignleft aligncenter alignright alignjustify | fontfamily fontsize forecolor backcolor | image link media | blocks anchor | cut copy paste pastetext | codesample preview code | emoticons insertdatetime searchreplace | selectall fullscreen | help |
        * **Custom** – allows you to make your own menubar selection based on the **full** selection list
    * **Mode** - defines transition mode used for displaying out of screen toolbar when the three dots [...] button being clicked
        * **Sliding** – the toolbar appears as a fixed toolbar below the first toolbar when the overflow icon drawer is clicked:

            {{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/sliding.gif" alt="Example" >}}
        
        * **Floating** – the toolbar appears under the toolbar overflow icon in a floating shelf format when the overflow icon drawer is clicked:
       
            {{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/floating.png" alt="Example" >}}
        
        * **Scrolling** – the overflow toolbar buttons will remain on the toolbar. To access the overflow toolbar buttons, scroll the toolbar. This mode is usually better on touch screen devices:
        
            {{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/scroll.png" alt="Example" >}}
        
        * **Wrap** – the overflow toolbar buttons will be shown on one or more toolbars below the primary toolbar:
        
            {{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/wrap.png" alt="Example" >}}
    
    * **Location** 

* **Editable** – determines when user can edit content in the editor and when it is read-only

    {{% alert color="info" %}}For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in the *Studio Pro Guide*.{{% /alert %}}

* **Visible** – determines if the widget is visible on the page

    {{% alert color="info" %}}For more information, see [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in the *Studio Pro Guide*.{{% /alert %}}

### Custom Menubar

* **Custom** – allows you to make your menubar with customized options
    * **Menubar group** 
        * **Basic** (default) – if selected, you can select which of the following menubar to be displayed
            * **File** - items: | newdocument restoredraft | preview | export print | deleteallconversations |
            * **Edit** - items: | undo redo | cut copy paste pastetext | selectall | searchreplace |
            * **Insert** - items: | image link media addcomment pageembed codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime |
            * **View** - items: code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments
            * **Format** - items: | bold italic underline strikethrough superscript subscript codeformat | blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat |
            * **Table** - items: | inserttable | cell row column | advtablesort | tableprops deletetable |
            * **Tools** - items: | spellchecker spellcheckerlanguage | a11ycheck code wordcount |
            * **Help** - displays quick help information
        * **Advanced** – if selected, you can configure menubar display and sequence
            * **New** – opens the **Edit Advanced Groups Item** dialog box where you can add a new button to a menu button
                * **Button** – specifies the button to be included in the menubar
            * **Delete** – deletes the selected button
            * **Edit** – opens the **Edit Advanced Groups Item** dialog box where you can make changes to the selected button 

The full configuration of the menubar groups are as follows:

### Custom Toolbar Tab

* **Custom** – allows you to make your toolbar with customized options
    * **Toolbar group** 
        * **Basic** (default) – if selected, you can select which of the following toolbar groups are available in the toolbar
            * **Basic style** - items: bold, underline, italic
            * **Extended style** - items: strikethrough, subscript, superscript
            * **Text align** - items: aligncenter, alignjustify, alignleft, alignright, alignnone
            * **Clipboard** - items: cut, copy, paste, pastetext
            * **Font style** - items: fontfamily, fontsize, forecolor, backcolor
            * **Paragraph** - items: lineheight, hr indent, outdent, blockquote, blocks
            * **Document** - items: newdocument, print
            * **History** - items: undo, redo
            * **Accordion** - items: accordion
            * **Code** - items: code, codesample
            * **Anchor** - items: anchor
            * **Direction** - items: ltr, rtl
            * **Link** - items: link, unlink, openlink
            * **List** - items: bullist, numlist
            * **Preview** - items: preview, fullscreen
            * **Table** - items: table, tabledelete, tableinsertdialog
            * **Visual aid** - items: visualaid, visualblocks, visualchars
            * **Media** - items: media, image
            * **Util** - items: selectall, insertdatetime, searchreplace, pagebreak, wordcount
            * **Emoticon** - items: emoticons
            * **Remove** - items: remove, removeformat
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

### Events Tab

* **On focus** – specifies an action to execute when the user focus on the editor
* **On blur** – specifies an action to execute when the user move focus out of the editor

### 2.6 Advanced Tab

* **Additional valid elements** – defines extra valid element for sanitization purposes, as shown in this example:

    ```text
    img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]
    ```

* **Enable spell checking** – configures to use the browser’s native spell checker. 
* **Highlight on focus** - adds a blue outline to the editor when that editor is made the input focus
* **Editor resize** - allows the resize handle to be disabled or to set the resize handler to resize both horizontally and vertically

### Common Tab

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.
