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
    * **Value attribute** (required) – sets a String attribute to store the rich-text content.
* **General** 
    * **Show label** 
        * **Yes** – if selected, you can define the label caption.
            * **Label caption** – defines the label caption of the widget that is displayed on the page.
        * **No** (default) – if selected, there is no label for this widget on the page.
    * **Enable status bar** display status bar on the bottom of the editor.
* **Toolbar**
    * **Toolbar** display toolbar based on the selected location on the editor.
        * **Basic** – if selected, the following menu will be shown: 
            * bold italic | numlist bullist | outdent indent | link | removeformat 
        * **Standard** – if selected, the following menu will be shown: 
            * undo redo | bold italic underlined | bullist numlist loweralphalist | outdent indent | ltr rtl | alignleft aligncenter alignjustify alignright | fontfamily fontsize forecolor backcolor | link image | blockquote codesample codeblock (view/edit)code, removeformat
        * **Full** – if selected, the following menu will be shown: 
            * undo redo | bold italic underlined strikethrough | superscript subscript | bullist numlist loweralphalist checklist | outdent indent | ltr rtl, alignleft aligncenter alignjustify alignright | fontfamily fontsize forecolor backcolor | link image video formula | heading | blockquote codesample codeblock (view/edit)code | removeformat
        * **Custom** – allows you to make your own menubar selection based on the **full** selection list.
    * **Location** 
        * **Sticky** – if selected, toolbar will be placed on the top of the editor and sticky position will apply upon scrolled.
        * **Top** – if selected, toolbar will be placed on the top of the editor.
        * **Bottom** – if selected, toolbar will be placed on the bottom of the editor.
        * **Hide** – if selected, toolbar will be hidden or not shown.

* **Editable** – determines when user can edit content in the editor and when it is read-only.
    * **Read-only style** - determines the style of the rich text when set to read-only.
    For more information, see the [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*.

* **Visible** – determines if the widget is visible on the page.
    For more information, see the [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in *Properties Common in the Page Editor*.
    
### Custom Toolbar Tab

* **Custom** – allows you to make your toolbar with customized options.
    * **Toolbar group** 
        * **Basic** (default) – if selected, you can select which of the following toolbar groups are available in the toolbar:
            * **Edit history** - items: undo, redo.
            * **Font style** - items: bold, italic, underline, strikethrough.
            * **Font script** - items: superscript, subscript.
            * **List** - items: bullist numlist loweralphalist checklist.
            * **Indentation** - items: outdent, indent, ltr rtl.
            * **Embedded media** - items: link, image, video, formula.
            * **Alignment** - items: alignleft aligncenter alignjustify alignright.
            * **Syntax** - items: blockquote, codesample, codeblock, (view/edit)code.
            * **Font colors** - items: fontfamily, fontsize, forecolor, backcolor.
            * **Content type** - items: header.
            * **View** - items: fullscreen.
            * **Removal** - items: clear.
            * **Table** - items: table.
        * **Advanced** – if selected, you can configure buttons for different toolbar groups:

            {{% alert color="info" %}}All the toolbar groups that you configure will be available in the toolbar. With vertical bars or separator options ("|"), you can separate different toolbar groups.{{% /alert %}}

            * **New** – opens the **Edit Advanced Groups Item** dialog box where you can add a new button to a toolbar group
                * **Button** – specifies the button to be included in the toolbar
            * **Delete** – deletes the selected button
            * **Edit** – opens the **Edit Advanced Groups Item** dialog box where you can make changes to the selected button 

### Dimensions Tab

* **Width unit** – the width of the widget.
    * **Percentage** – specifies the width in relation to the rest of the elements on the page.
    * **Pixels** – specifies the width in pixels.
* **Width** – used as an appropriate CSS value.
* **Height unit** – the height of the widget.
    * **Percentage of width** – specifies the height in relation to the width.
    * **Pixels** – specifies the height in pixels.
    * **Percentage of parent** – specifies the width in relation to the rest of the elements on the page.
* **Height** – used as an appropriate CSS value.
* **Minimum height** – applicable if height is relative to parent's percentage.

### Events Tab

* **On change** – specifies an action to execute when the user changes the value of the editor.
    * **On change type** - specifies which type of event that will trigger the on change action.
        * **When user leaves input field** - if selected, an on change action will be triggered when user moves focus out of the editor.
        * **While user is entering data** - if selected, an on change action will be triggered each time a data change occurs.
* **On enter** – specifies an action to execute when the user focuses on the editor.
* **On leave** – specifies an action to execute when the user move focus out of the editor.
* **On load** – specifies an action to execute after the editor is fully loaded in the DOM.

### Advanced Tab

* **Enable spell checking** – configures to use the browser’s native spell checker.
* **Custom fonts** – configures extra fonts selection for the font family.
* **Selectable images** – configures image entity source to allow rich text to use images from entity instead of base64 string.
* **Enable default upload** – if enabled, it will keep the current image upload method using base64 string, otherwise it is hidden (default value: **true**).

### Common Tab

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

## Advanced Configuration

### Custom Fonts

This advance configuration allows you to add extra font list to the font family selection in Rich Text widget.

#### Prerequisites

Before use, please ensure you meet the following prerequisites:

* Prior to adding a new font, the font files and font family have to already be included in your project. To add font files into the project, you can put the font files inside your styles/web directory.
* Define font family in styling. You will need to define the new font by adding the font face custom styling.

    ```css
	@font-face {
	  font-family: 'Your-font-family-name';
	  src: url('YourFontFile.ttf') format('truetype');
	  font-weight: 100;
	  font-style: normal;
	}
    ```

#### Adding a Custom Font 

{{% alert color="info" %}}
This feature is available from Rich Text version 4.7.0 and above.
{{% /alert %}}

To add a new custom font, simply click the **Advanced** tab and click new on custom font:

* **Font name** – this is the font name that will be use to display the font on font-family selection in Rich Text toolbar.
* **Font style** – this is the font-family declaration that you have set previously in font-face styling.

#### Display Custom Font with Correct Styling in the Toolbar

**Font name variable** is an optional configuration that user can employ to display custom fonts, in their own styling, on the font-family toolbar selection.

The new font name will be display in the toolbar with data-value attribute as `data-value="your-font-name"`. The name will be derived from **Font name** configuration by set it to lower case, and replace all spaces (" ") with dashes ("-"). You can use this custom styling to display it correctly in the toolbar:

```css
.widget-rich-text .ql-toolbar [data-value=your-font-name]:before {
    font-family: 'Your-font-family-name';
}
```

### Image From Entity

{{% alert color="info" %}}
This feature is available from Rich Text version 4.8.0 and above.
{{% /alert %}}

The default image upload and selection method of Rich Text is to use base64 string as the image source. This has found to be troublesome if the image size is too large that causes the string value attribute to be big. By using image source from entity, Rich Text will use the image URL instead of base64.

#### Using File Uploader Widget

The default and recommended way of uploading and selecting images from entity in Rich Text widget is to use [File Uploader](/appstore/modules/file-uploader/) module.

##### Prerequisites

Entity that being used for Rich Text data source value attribute have to use FileUploadContext entity generalization.

{{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/entity-with-file-upload-context.png" alt="Rich text entity with FileUploadContext generalization" >}}

##### Configuration

Use following configuration information to set up the file uploader widget:

1. Set selectable images:
    1. Rich text needs to know the source of image entity to be display. Click the **Advanced** tab > **Selectable images**, then choose association to **UploadedImage_FileUploadContext/UploadedImage** entity.
    1. By selecting this, Rich Text will display a dropzone for image upload widget.

1. Configure the image upload widget:
    1. Drag and drop file uploader widget to the available image upload dropzone underneath Rich Text widget.
    1. Open the file uploader widget configuration and select **Images** as the **Upload mode**.
    1. On the **Advanced** tab of file uploader widget, set **Enable custom buttons** to **Yes** and add a custom buttons.
    1. Set **Default file action** to **Yes** on the custom button and call the [nanoflow to select images](#configuring-image-selection-nanoflow) as the action.

#### Using Another Widget as Image Selector

User can also configure to use another widget as the image selector for Rich Text. This widget have to has access to the System.Image object.

##### Prerequisites

To use another widget as an image selector for Rich Text, ensure you meet the following prerequisites:

* Entity that being used for Rich Text data source value attribute have to use has association to System.Image entity:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/entity-with-system-image.png" alt="Rich text entity with FileUploadContext generalization" >}}

* The custom widget needs to have access to the System.Image object and able to call nanoflow action when image being selected.
* It is not mandatory that the custom widget have upload image functionality (for example, it is also possible to use [Gallery](/appstore/modules/gallery/) and [Image](/appstore/widgets/image/) widgets with onClick), because the Rich Text widget only needs the selection action call.

##### Configuration

Configuration instructions for using another widget as an image selector are as follows:

1. Selectable images:
    1. Rich text needs to know the source of image entity to be display. So, after clicking **Advanced** > **Selectable images**, choose the association to the **System.Image** entity.
    1. By selecting this, Rich Text will display a dropzone for image upload widget.

1. Configuring the image upload widget:
    1. Drag and drop the custom widget to the available image upload dropzone underneath Rich Text widget.
    1. Use the same **System.Image** association as the datasource.
    1. Set the action to call the [nanoflow to select images](#configuring-image-selection-nanoflow) as necessary.

#### Configuring Image Selection Nanoflow

The nanoflow is needed to trigger image object selection and returning the flow back to Rich Text widget:

{{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/image-selection-nanoflow.png" alt="Image selection nanoflow" >}}

To configure the nanoflow, do the following:

1. Set the nanoflow parameter:
    1. The nanoflow needs to have access to the **System.Image** entity. Set this as the parameter.
    1. In case of using File Uploader, this should be automatically set up when creating the nanoflow from custom action button.

1. Get the object GUID:
    1. The first step of the nanoflow is to get the GUID from the image object. 
    1. Set call to JavaScript action GetGuid provided by [Nanoflow Commons](/appstore/modules/nanoflow-commons/) module.

1. Trigger image selection JavaScript (required to pass the GUID of the image object back to Rich Text):
    1. Create a new JavaScript action and add a string parameter.
    1. In this example, we will name the parameter *fileGuid* and *selectImage* as the Javascript action:

        {{< figure src="/attachments/appstore/platform-supported-content/widgets/rich-text/js-action-setup.png" alt="Javascript action configuration" >}}

Use the following code in the JavaScript action:

```Javascript
export async function selectImage(fileGuid) {
	// BEGIN USER CODE
	const img = {
		id: fileGuid,
		url: mx.data.getDocumentUrl(fileGuid, Date.now(), false)
	}
	 const customEvent = new CustomEvent("imageSelected", { bubbles: true, detail: img });
	 window.getSelection().anchorNode.dispatchEvent(customEvent);	
	// END USER CODE
}
```

This code will trigger a new event called **imageSelected** and bubble up the event back to Rich Text widget to continue the flow. The user then can use the **image id** instead of **base64 string** as the image source.
