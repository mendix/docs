---
title: "Image Widgets"
url: /studio7/page-editor-widgets-images/
description: "Describes image widgets in Mendix Studio."
weight: 30
tags: ["studio", "page editor", "image", "image widgets", "widgets"]
---

## 1 Introduction 

Image [widgets](/studio7/page-editor-widgets/) are used to show images to the users. 

There are two image widgets in Mendix Studio:

* Image – allows you to show a static (non-changing) image in your app
*  Dynamic image – allows you to show a dynamic image (for example, a relevant profile picture that is different for each customer) in your app

   {{< figure src="/attachments/studio7/page-editor/page-editor-widgets/page-editor-widgets-images/image-widgets.png"   width="350"  >}}

{{% alert color="info" %}}

You can switch between static and dynamic image in widget's properties. For more information, see the [General Section](#image-general). 

{{% /alert %}} 

## 2 General Section {#image-general}

You can switch between static and dynamic image in the **General** section, as well as set the image itself, configure its width and height, etcetera. 

Before configuring settings in the **General** section for the **Dynamic Image**, keep in mind that it can only function inside a data container (a list view or a data view). You can either place widget in an existing data container; or click **Wrap with a new data view** in **Properties** to create a data view automatically and place an input element inside it. 

{{< figure src="/attachments/studio7/page-editor/page-editor-widgets/page-editor-widgets-images/dynamic-image-data-view.png"   width="350"  >}}

Settings available for **Static Image** and **Dynamic Image** are described in the table below:

| Property      | The property applies to   | Description                                                  |
| ------------- | ------------------------- | ------------------------------------------------------------ |
| Image Source  | Static and Dynamic Images | Switches between static and dynamic image.                   |
| Entity        | Dynamic Image             | Specifies which entity will be shown in the dynamic image. You can only set an entity for the dynamic image if the entity has been configured as image in Studio Pro. For more information, see section [General Properties](/refguide7/entities/#entities-general-properties) in *Entities* in the *Studio Pro Guide* and [Dynamic Image (document template)](/refguide7/dynamic-image-document-template/) in the *Studio Pro Guide*. |
| Image         | Static Image              | Sets an image that will be shown to the end-user.            |
| Default Image | Dynamic Image             | This is the image that is displayed if no image is uploaded. |
| Width Unit    | Static and Dynamic Images | The width of an image can be specified in the following ways:  <br /><ul><li>**Auto** – the width of the given image is used.</li><li>**Pixels** – the width is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched.</li><li>**Percentage** –  the width is specified in a percentage of the original width. It can be larger than its original width in which case the image is stretched.</li></ul><br />Default value for **Width Unit**: Auto |
| Width         | Static and Dynamic Images | The **Width** option is only displayed when **Pixels** or **Percentage** are selected for the **Width Unit**. It specifies the width of the image in pixels or percentage. |
| Height  Unit  | Static and Dynamic Images | The height of an image can be specified in the following ways:  <br /><ul><li>**Auto** – the height of the given image is used.</li><li>**Pixels** – the height is specified in a number of pixels. If you specify both width and height, the image will be scaled automatically: the proportions will be kept, the picture will not be stretched.</li><li>**Percentage** –  the height is specified in a percentage of the original height. It can be larger than its original height in which case the image is stretched.</li></ul><br />Default value for **Height Unit**: Auto |
| Height        | Static and Dynamic Images | The **Height** option is only displayed when **Pixels** or **Percentage** are selected for the **Height Unit**. It specifies the height of the image in pixels or percentage. |

## 3 Events Section 

You can choose the **On Click Action** in the **Events** section. The **On Click Action** defines what action is performed when the user clicks an image.

### 3.1 Common Properties

The static image and the dynamic image share the properties in the **Events** section, except for one property that is [specific for the dynamic image](#events-dynamic-image). 

For more information on the **Events** section for static and dynamic images, see [Events Section in Widgets](/studio7/page-editor-widgets-events-section/).

### 3.2 Dynamic Image Specific Property {#events-dynamic-image}

The dynamic image has a specific on-click action **Enlarge on Click**. The full-size image will be displayed when the user clicks it. This property overrides other on-click actions. 

## 4 Design Section

For information on the **Design** section and its properties, see [Design Section in Widgets](/studio7/page-editor-widgets-design-section/).

## 5 Read More

* [Pages](/studio7/page-editor/) 
* [Widgets](/studio7/page-editor-widgets/)
