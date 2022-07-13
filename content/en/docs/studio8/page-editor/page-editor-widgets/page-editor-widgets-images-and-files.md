---
title: "Images & Files"
url: /studio8/page-editor-widgets-images-and-files/
description: "Describes image and file widgets in Mendix Studio."
weight: 30
tags: ["studio", "page editor", "image", "image widgets", "widgets", "file", "file manager", "file uploader", "file downloader"]
---

## 1 Introduction 

**Images & Files** are widgets that allow end-users to view, download, and upload images or files. For example, with an image uploader end-users will be able to upload a profile image:

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-images-and-files/image-uploader-example.png"   width="350"  >}}

There are the following image and file widgets in Mendix Studio:

* **Image** – allows you to show a static (non-changing) image in your app

*  **Dynamic Image** – allows you to show a dynamic image (for example, a relevant profile picture that is different for each customer) in your app

*  **Image Uploader** – allows end-users to upload an image

*   **File Manager** – allows end-users to upload or/and download a file (in the **Toolbox**, you see  preconfigured file managers: **File Uploader** and **File Downloader**)
  
	{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-images-and-files/images-and-files.png"   width="350"  >}}

## 2 Image and Dynamic Image 

An image and a dynamic image widgets allow you to display an image either from a file (statically) or from the database (dynamically).  

You can switch from one widget to another in properties:

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-images-and-files/static-and-dynamic-image.png" >}}

### 2.1 Properties

#### 2.1.1 General Section {#image-general}

In the **General** section, you can switch between static and dynamic image, select an image, configure its width and height, etc. 

Before configuring settings in the **General** section for the **Dynamic Image**, keep in mind that it can only function inside a data container (a list view or a data view). You can either place widget in an existing data container; or click **Wrap with a new data view** in **Properties** to create a data view automatically and place an input element inside it. 

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-images-and-files/dynamic-image-data-view.png"   width="350"  >}}

Settings available for **Static Image** and **Dynamic Image** are described in the table below:

| Property      | The property applies to   | Description                                                  |
| ------------- | ------------------------- | ------------------------------------------------------------ |
| Image Source  | Static and Dynamic Images | Switches between static (from a file) and dynamic (from the database) image. |
| Entity        | Dynamic Image             | Specifies which entity will be shown in the dynamic image. You can only set an entity for the dynamic image if it is an image entity. For more information on image entities, see the [Types of Entities](/studio8/domain-models/#entity-types) section in *Domain Model*. |
| Image         | Static Image              | Sets an image that will be shown to the end-user.            |
| Default Image | Dynamic Image             | This is the image that is displayed if is stored in the database. |
| Width Unit    | Static and Dynamic Images | The width of an image can be specified in the following ways:  <br /><ul><li>**Auto** – the width of the given image is used.</li><li>**Pixels** – the width is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched.</li><li>**Percentage** –  the width is specified in a percentage of the original width. It can be larger than its original width in which case the image is stretched.</li></ul><br />Default value for **Width Unit**: Auto |
| Width         | Static and Dynamic Images | The **Width** option is only displayed when **Pixels** or **Percentage** are selected for the **Width Unit**. It specifies the width of the image in pixels or percentage. |
| Height  Unit  | Static and Dynamic Images | The height of an image can be specified in the following ways:  <br /><ul><li>**Auto** – the height of the given image is used.</li><li>**Pixels** – the height is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched.</li><li>**Percentage** –  the height is specified in a percentage of the original height. It can be larger than its original height in which case the image is stretched.</li></ul><br />Default value for **Height Unit**: Auto |
| Height        | Static and Dynamic Images | The **Height** option is only displayed when **Pixels** or **Percentage** are selected for the **Height Unit**. It specifies the height of the image in pixels or percentage. |

#### 2.1.2 Events Section 

You can choose the **On Click Action** in the **Events** section. The **On Click Action** defines what action is performed when the user clicks an image.

##### 2.1.2.1 Common Properties 

The static image and the dynamic image share the properties in the **Events** section, except for one property that is [specific for the dynamic image](#events-dynamic-image). 

For more information on the **Events** section for static and dynamic images, see [Events Section in Widgets](/studio8/page-editor-widgets-events-section/).

##### 2.1.2.2 Dynamic Image Specific Property {#events-dynamic-image}

The dynamic image has a specific on-click action **Enlarge on Click**. The full-size image will be displayed when the user clicks it. This property overrides other on-click actions. 

#### 2.1.3 Conditional Visibility Section

{{% snippet file="/static/_includes/studio/visibility-section-link.md" %}}

#### 2.1.4 Design Section

For information on the **Design** section and its properties, see [Design Section in Widgets](/studio8/page-editor-widgets-design-section/).

## 3 Image Uploader and File Manager

An **image uploader** allows end-users to upload images to your app and it generates a thumbnail of the uploaded image. For example, users can upload a picture for their profile.

The image uploader must be placed inside a data view or a list view that has an image entity as their data source.  For more information on image entities, see the [Types of Entities](/studio8/domain-models/#entity-types) section in *Domain Model*. 

A **file manager** allows end-users to upload and/or download files. For example, users can download a spreadsheet with necessary data. 

The file manager must be placed inside a data view or a list view that has a file entity as their data source.  For more information on file entities, see the [Types of Entities](/studio8/domain-models/#entity-types) section in *Domain Model*. 

The default maximum size of files and images that can be uploaded/downloaded is 5 MB. You can change the maximum size in Studio Pro. For more information on properties in Studio Pro, see [File Manager](/refguide8/file-manager/) and [Image Uploader](/refguide8/image-uploader/).  

All file extensions are allowed for image uploader and file manager unless specified otherwise in Studio Pro. For more information on properties in Studio Pro, see [File Manager](/refguide8/file-manager/) and [Image Uploader](/refguide8/image-uploader/). 

### 3.1 Properties

#### 3.1.1 Data Source Section

The **Data Source** section consists of the **Context Entity** option. **Context Entity** uses the file entity (if you use a file manager) or the image entity (if you use an image uploader) of the surrounding data view or the list view. **Context Entity** is set automatically and is read-only. 

#### 3.1.2 General Section

The **General** section properties are described below.

##### 3.1.2.1 Show Label

Enable this property if you want to show a label (name) of a widget to the end-user. *This property is enabled by default.*

##### 3.1.2.2 Label

This property only appears if **Show Label** is enabled. Specify the name that will be displayed to end-users. When you select an attribute, the name of the attribute is shown in the label in braces. This means that instead of a static text, the value of the attribute is displayed to end-users.

##### 3.1.2.3 Editability {#editability}

Editability indicates whether the end-user will be able to change the value displayed by the widget. Possible values are the following: 

* **Editable** – the value displayed by the widget is editable

* **Read-only** – the value is in read-only mode

* **Conditional** – the widget is editable only if specified conditions are met based on an attribute value (for more information, see  [Attribute-Based](#attribute-based) and [Attribute Values](#attribute-values) sections below) or based on an expression. You can create a condition based on an expression in Studio Pro only (for details, see the [Editability Section](/refguide8/common-widget-properties/#editability) in *Properties Common in the Page Editor*)

  {{% alert color="info" %}}If an attribute set for the widget's data source is of the AutoNumber type, the widget is set into read-only mode by default and the **Editability** setting itself is disabled, because attributes of this type are generated automatically.

  {{%/alert %}}

##### 3.1.2.4 Attribute-Based {#attribute-based}

The **Attribute-Based** property is only shown when [Conditional Editability](#editability) is selected.

**Attribute-Based** conditional editability allows you to show widgets only when they match a certain value of the selected attribute. 

{{% alert color="info" %}}

The attribute must be of the Boolean or enumeration type.

{{%/alert %}} 

{{% alert color="info" %}}

You can only configure attribute-based conditional editability when a widget is placed in a data container: a data view or a list view. For more information on how to place widgets on a page, see [Adding Elements on a Page](/studio8/page-editor/#adding-elements) section in *Pages*. 

{{%/alert %}}

##### 3.1.2.5 Attribute Values {#attribute-values}

This property is shown only when an attribute in the [Attribute-Based](#attribute-based) property is selected. The **Attribute Values** property allows you to select certain attribute values.

For example, you would like to allow users upload images only when their *email is verified*. So, you need to select *EmailVerified* in the **Attribute-Based** property and *true* in the **Attribute Value** property:

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-images-and-files/conditional-editability.png"   width="250"  >}}

#### 3.1.3 Controls Section

{{% alert color="info" %}}

The **Controls** section is available for **File Manager** only. 

{{% /alert %}}

The **Show Buttons For** option specifies whether end-users are able to upload and/or download files and has the following options:

* **Upload** – end-users are able to upload a  file
* **Download** – end-users are able to download a file
* **Both** – end-users are able to upload and download files

#### 3.1.4 Conditional Visibility Section

{{% snippet file="/static/_includes/studio/visibility-section-link.md" %}}

#### 3.1.5 Design Section

For information on the **Design** section and its properties, see [Design Section in Widgets](/studio8/page-editor-widgets-design-section/).

## 4 Read More

* [Pages](/studio8/page-editor/) 
* [Widgets](/studio8/page-editor-widgets/)
