---
title: "Image Collection"
url: /refguide/image-collection/
weight: 1
description: "Why and how to create an image collection"
---

## Introduction

If you want to use your own static images within an application, for example for branding or to give your buttons a unique feel, you will need to store them in your app. To do this, you create an **image collection** where you can store your images.

For information on how to use images in your app, see [Images](/refguide/images/).

Remember that, if you want to use the same set of custom images in several apps, you can export and import complete image collections, with their images. For more information, see [Importing and Exporting Apps, Modules, Widgets, and Documents](/refguide/import-and-export/).

{{% alert color="warning" %}}
Too many large static images in your app can lead to performance issues. If you need a lot of large images, you can store them in your database (see [Dynamic Image](/refguide/image-viewer/) for more information).
{{% /alert %}}

## Adding an Image Collection

To add an image collection, do the following.

1. Right-click a module in the **App Explorer**.
2. Select **Add other > Image collection**.
3. Give your image collection a name.

## Image Collection Actions

You can perform the following actions within image collections using the icons at the top of the image collection tab.

{{< figure src="/attachments/refguide/modeling/pages/page-resources/image-collection/actions.png" alt="Image collection actions" class="no-border" >}}

Some of the actions can be applied to multiple images. You can select all images with <kbd>Ctrl</kbd> + <kbd>A</kbd>, or multiple images by combining your click with <kbd>Ctrl</kbd> or <kbd>Shift</kbd>.

### Add

The **Add** button allows you to add a new image from a file to your image collection. The image will be given the name of the image file you add. If the name already exists, a suffix will be added to make the name unique.

The following image formats are supported: *png*, *jpeg*, *gif*, *bmp*, *webp*, and *svg*.

You can also add an image to your collection using <kbd>Ctrl</kbd> + <kbd>N</kbd>.

### Rename

The **Rename** button allows you to change the name of the selected image. As well as being the name you use within your app to refer to this image, this is also the name that **Export to file…** will give to your image if you save it as a file. If you change the name here, the name will also be changed in references to this image elsewhere in your app.

You can also rename an image using <kbd>F2</kbd>.

### Delete

The **Delete** button removes the selected image (or images) from the image collection. You will be warned if the image or images are used elsewhere in the app.

### Find Usages

The **Find usages** button displays, in the **Find Results** dock, all the places where this image is used in your app.

### Move to Other Image Collection

The **Move to other image collection** button allows you to move the selected image (or images) to another image collection. When you move the image (or images), all references elsewhere in your app will also be updated.

{{% alert color="info" %}}
It is not possible to *copy* an image, you can only *move* it. If you need to make a copy, you can export the image to a file (see below) and then add the image to a different image collection.
{{% /alert %}}

### Export to File

The **Export to file…** button saves the selected image (or images) as image files. You can select the folder where the images will be saved and they will be given the same name as they have in the image collection. If a file with the same name already exists, you will be warned.
