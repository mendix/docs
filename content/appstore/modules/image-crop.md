---
title: "Image Crop"
category: "Modules"
description: "Describes the configuration and usage of the Image Crop module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "image crop", "cropper", "image", "platform support"]
draft: true
---

## 1 Introduction

The [Image Crop](https://appstore.home.mendix.com/link/app/254/) module transforms images based on a selection made in the browser.

### 1.1 Typical Usage Scenarios

End-users can do the following with this module:

* Crop images
* Shrink or convert images
* Enforce a set size/aspect ratio

## 2 Configuration

This module is pre-configured to use the **ImageCrop** entity. You can choose to inherit from this entity, set an association to the entity or copy the actions you want to have.

The [Cropper](#cropper) widget and Java actions are compatible with any sub-class of **System.Image** as long as it has attributes of the integer type with the following given names (which must be identical):

* crop_x1
* crop_x2
* crop_y1
* crop_y2
* crop_height
* crop_width

Once you have decided on the entities and relationships in the domain models, you can either use the existing pages or use your own pages.

## 3 Default Properties

The **CropImage_Overview** snippet allows you to upload new images using a simple New or Edit button.

After uploading the image, the end-user can edit the image. Pressing **Edit Image** creates a new draft copy of the original image and opens the **CropImage_Crop** page. This page enables editing the draft image:

* **Crop** – changes the image by removing the area outside the box
* **Resize** – changes the image to the size of the selection box
* **Grayscale** – converts the image to an image in black and white (grayscale)
* **Aspect Ratio** – enables changing the aspect ratio of the image and forcing the selection to be in a specific ratio (for example, 4:3, or blank/0 for a free selection shape)
* **Apply Changes** – copies the image as seen in the draft back into the original **CropImage**, closes the page, and removes the draft
* **Revert Changes** – reverts all changes and re-copies the image from the original image and allows you to start over again
* **ThumbnailSize** – changes the size of the thumbnail that is created after altering an image; each button forces the thumbnail to be re-created in this size; please note that if you change this constant, changing the thumbnail size on the image upload widget with the same value is also recommended in order to keep all the thumbnails consistently in the same size

## 4 Customization

If you want to use your own entity or alter the implementation, you can choose to change the widget or the Java actions.

### 4.1 Cropper Widget {#cropper}

These are the **Cropper** widget properties:

* **Max width** and **Max height** – the maximum width and height to which cropping the view port will stretch; use *0* for no maximum width or no maximum height
	* If both **Max width** and **Max height** are set to *0*, the cropping view port will be set to the true natural image size
	* When dealing with large images, setting at least **Max width** or **Max height** is recommended
* **Start height** – the initial height of the cropping window
* **Start width** – the initial width of the cropping window
* **Aspect ratio** – the aspect ratio that will be applied on the cropping window.

### 4.2 Java Action Parameters

* **cropImgObj** – the object that has the neccessary attributes to be resized
* **newWidth** and **newHeight** – make sure these match the **Aspect ratio** used in the [Cropper Widget](#cropper) to make sure the image does not get transformed inconsistently
	* If either **newWidth** or **newHeight** are set to *0*, the image will be scaled based on the entered value while keeping the aspect ratio
	* If both **Max width** and **Max height** are set to *0*, the width and height set by the end-user with the widget will be used
* **thumbnailWidth** and **thumbnailHeight** – this is the size of the thumbnail, which is editable so that you can keep this in or near the same aspect ratio as the new image; the default implementation uses the tumbnail size as configured in **Configuration/ThumbnailSize** unless the image is smaller than the thumbnail

## 5 Developing This App Store Component

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/ImageCropModule](https://github.com/mendix/ImageCropModule).