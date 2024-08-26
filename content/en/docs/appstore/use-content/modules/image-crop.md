---
title: "Image Crop"
url: /appstore/modules/image-crop/
description: "Describes the configuration and usage of the Image Crop module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Image Crop](https://marketplace.mendix.com/link/component/254/) module transforms images based on a selection made in the browser.

### Typical Use Cases

End-users can do the following with this module:

* Crop images
* Shrink or convert images
* Enforce a set size/aspect ratio

### Limitations

This module does not support the SVG format.

## Configuration

This module is pre-configured to use the **ImageCrop** entity. You can choose to inherit from this entity, set an association to the entity or copy the actions you want to have.

The [Cropper](#cropper) widget and Java actions are compatible with any sub-class of **System.Image** as long as it has attributes of the integer type with the following given names (which must be identical):

* crop_x1
* crop_x2
* crop_y1
* crop_y2
* crop_height
* crop_width

Once you have decided on the entities and relationships in the domain models, you can either use the existing pages or use your own pages.

## Default Properties

The **CropImage_Overview** snippet allows you to upload new images using a simple New or Edit button.

After uploading the image, the end-user can edit the image. Pressing **Edit Image** creates a new draft copy of the original image and opens the **CropImage_Crop** page. This page enables editing the draft image:

* **Crop** – changes the image by removing the area outside the box
* **Resize** – changes the image to the size of the selection box
* **Grayscale** – converts the image to an image in black and white (grayscale)
* **Aspect Ratio** – enables changing the aspect ratio of the image and forcing the selection to be in a specific ratio (for example, 4:3, or blank/0 for a free selection shape)
* **Apply Changes** – copies the image as seen in the draft back into the original **CropImage**, closes the page, and removes the draft
* **Revert Changes** – reverts all changes and re-copies the image from the original image and allows you to start over again
* **ThumbnailSize** – changes the size of the thumbnail that is created after altering an image; each button forces the thumbnail to be re-created in this size; please note that if you change this constant, changing the thumbnail size on the image upload widget with the same value is also recommended in order to keep all the thumbnails consistently in the same size

## Customization

If you want to use your own entity or alter the implementation, you can choose to change the widget or the Java actions.

### Cropper Widget {#cropper}

These are the **Cropper** widget properties:

* **Max width** and **Max height** – the maximum width and height to which cropping the view port will stretch; use *0* for no maximum width or no maximum height
    * If both **Max width** and **Max height** are set to *0*, the cropping view port will be set to the true natural image size
    * When dealing with large images, setting at least **Max width** or **Max height** is recommended
* **Start height** – the initial height of the cropping window
* **Start width** – the initial width of the cropping window
* **Aspect ratio** – the aspect ratio that will be applied on the cropping window.

### Java Action Parameters

* **cropImgObj** – the object that has the necessary attributes to be resized
* **newWidth** and **newHeight** – make sure these match the **Aspect ratio** used in the [Cropper Widget](#cropper) to make sure the image does not get transformed inconsistently
    * If either **newWidth** or **newHeight** are set to *0*, the image will be scaled based on the entered value while keeping the aspect ratio
    * If both **Max width** and **Max height** are set to *0*, the width and height set by the end-user with the widget will be used
* **thumbnailWidth** and **thumbnailHeight** – this is the size of the thumbnail, which is editable so that you can keep this in or near the same aspect ratio as the new image; the default implementation uses the thumbnail size as configured in **Configuration/ThumbnailSize** unless the image is smaller than the thumbnail

## Developing This Marketplace Component

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendix/ImageCropModule](https://github.com/mendix/ImageCropModule).
