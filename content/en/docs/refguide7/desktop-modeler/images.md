---
title: "Images"
url: /refguide7/images/
category: "Desktop Modeler"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
tags: ["Images", "Image Collections", "png", "Desktop Modeler"]
---

## 1 Introduction

Images can be used to brighten up your application. Navigation items and the various kinds of buttons have small images (icons) to left of their captions. Images can also be used in the image viewer widgets in [pages](/refguide7/pages/) and [document templates](/refguide7/document-templates/). Also, [enumeration values](/refguide7/enumeration-values/) can have images that can then be shown in data grid columns.

The **System** module contains some images that are used by the standard components. If you place a data view on a form, the **Save** and **Cancel** buttons will have images from the **System** module on them. You can always use different images if you like. The same holds for images on the control bar buttons of the data grid.

## 2 Supported Formats

The following image formats are supported: *png*, *jpeg*, *gif*, *bmp*, *svg*. The *png* format is recommended, as it is compressed without losing any information and supports transparency very well.

## 3 Custom Images

To use your own images, they must first be added to an mage collection. To add an image collection, right-click a module in the **Project Explorer** and select **Add other > Image collection**.

After naming the new image collection, open it and click **Add** in the menu bar to add custom images to your module.

You can now use these custom images in your app.

## 4 Common Properties

### 4.1 Name

This the name of the image.
