---
title: "Image Crop"
category: "Modules"
description: " "
tags: [ ]
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

    The module is pre-configured to use the ImageCrop entity, you can choose to inherit from this entity, set an association to the entity or copy the actions you want to have.

    The Cropper widget and Java actions are compatible with any subclass of System.Image as long as it has the following attributes of type integer with the following given names (must be identical) crop_x1 , crop_x2 , crop_y1 , crop_y2 , crop_height , crop_width.

    Once you have decided on the entities and relationships in the domain models, you can either use the existing pages or use your own pages.

Default functionality

The CropImage_Overview snippet allows you to upload new images using a simple new/edit button.

After uploading the image you can edit the image. Pressing the button Edit Image will create a new draft copy of the original image and opens page CropImage_Crop.

The page CropImage_Crop allows you to edit the draft image.

    Crop changes the image. This will crop the area outside the box.

    Resize changes the image to the size of the selection box.

    Grayscale converts the image to an image in black/white (grayscale).

    Aspect Ratio clicking on the aspect ratio allows the user to change the Aspect Ratio and force the selection to be in a specific ratio.

Clicking the button opens a popup and allows the user to change the ratio to a valid ratio such as 4:3 or reset it to blank or 0 for a free selection shape.

    Apply Changes copies the image as you see it in the draft back into the original CropImage. The page is closed, and the draft is being removed.

    Revert Changes reverts all changes and re-copies the image from the original image and allows you to start over again.

    ThumbnailSize this changes the size of the thumbnail that will be created after altering an image. Any of the buttons will force the thumbnail to be re-created in this size.

    Please Note: If you change this constant it is recommended to change the thumbnail size on the image upload widget as well with the same value. This keeps all thumbnails consistently in the same size.

If you choose to use your own entity or if you want to alter the implementation you can choose to change the widget or the Java actions.
Widget - Cropper
Widget properties:

    Max width: The maximum width that cropping viewport will stretch to. Use 0 for no maximum width.

    Max height: The maximum height that cropping viewport will stretch to. Use 0 for no maximum height.

    If both Max width and Max height are set to 0 the cropping viewport will be set to the true/natural image size.

IMPORTANT NOTE: When dealing with large images it is recommended to set at least one of the above mentioned properties.

    Start height: The initial height of the cropping window.

    Start width: The initial width of the cropping window.

    Aspect Ratio: The aspect ratio that will be applied on the cropping window.

Java actions parameters & configuration:

    cropImgObj : the object (that has the neccessary attributes) to be resized.

    new Width/Height : Make sure your newWidth and newHeight match the aspect ratio used in the widget to make sure the image doesn't get transformed inconsistently.

    If you set either the newWidth or the newHeight to 0, it will scale the image based on the filled in value whilst keeping the aspect ratio.

    If you set both on 0 it will use the width and height set by the user with the widget.

    thumbnail Width/Height : The size of the thumbnail, editable so you can keep this on or near the same aspect ratio as the new image. The default implementation will use the tumbnail size as configured in the Configuration/ThumbnailSize unless the image is smaller than the thumbnail.

Issues

If you encounter any issue while using this module/widget, yopu can report it here.