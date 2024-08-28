---
title: "Images"
url: /refguide8/images/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Images can be used to brighten up your application. [Navigation items](/refguide8/navigation-tree/) and the various kinds of [buttons](/refguide8/button-widgets/) have small images (icons) to left of their captions. Images can also be used in the image viewer widgets in [pages](/refguide8/pages/) and [document templates](/refguide8/document-templates/). Also, [enumeration values](/refguide8/enumerations/#enum-value-properties) can have images that can then be shown in data grid columns.

The **System** module contains some images that are used by the standard components. If you place a data view on a page, the **Save** and **Cancel** buttons will have images from the **System** module on them. You can always use different images if you like. The same holds for images on the control bar buttons of the data grid.

{{% alert color="info" %}}
This sort of image is called a **static** image as it is always the same. For example, the icon you put on a save button will always look the same whatever object you are saving.

If you want different images to appear for different objects (for example, a picture of a product) these images should be stored as images in the database. See [How to Work with Images and Files](/howto8/data-models/working-with-images-and-files/) for more information.
{{% /alert %}}

## Supported Formats

The following image formats are supported: *png*, *jpeg*, *gif*, *bmp*, and *svg*. The *png* format is recommended, as it is compressed without losing any information and supports transparency very well.

## Custom Images

To use your own images, they must first be added to an [image collection](/refguide8/image-collection/). For information on how to create an image collection, and add images to it, see [Image Collection](/refguide8/image-collection/).

You should not add custom images to the existing image collections in imported modules, for example in the Atlas UI module. If you do this, there is a risk that they may be overwritten if you import a new version of the module at a later date.

Once you have added images to an image collection, you can use them in any module in your app.

{{% alert color="info" %}}
If you need to refer to an image in an image collection from CSS or custom widgets, the name of the image will be `/img/{module_name}${image_collection_name}${image_name}`.
{{% /alert %}}

## Common Properties

### Name

This the name of the image.
