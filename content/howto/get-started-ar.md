---
title: "Get Started with AR"
parent: "ar-parent"
menu_order: 10
description: "In this how-to you will make a 3D cube by dragging and dropping widgets into your Mendix app."
tags: ["AR", "VR", "Hololens", "mixed reality"]
---

## 1 Introduction

Working with augmented reality (AR) is not all that different from implementing any other piece of Native functionality. Using just a few widgets, you can add two-or-three dimensional AR to your native mobile application. In this how-to you will make a 3D cube by dragging and dropping widgets into your Mendix app and then configuring them.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have an Android mobile device that can [support ARCore](https://developers.google.com/ar/discover/supported-devices#android_play) 
* Install [Google Play Services for AR](https://play.google.com/store/apps/details?id=com.google.ar.core&hl=en) on your device
* Install the Make It Native app on your Android mobile device for testing purposes

## 3 Embedding Widgets in Your App

Create a new app by following these steps:

1. Open Mendix Studio Pro. Select **File** > **New Project** , and then select the **Blank App**.
1. Click **Use this starting point.**
1. Name your app *Hello World* and click **Create app** to close the dialog box.
1. Right-click **MyFirstModule** and click **Add page**.
1. Click **Native mobile** at the top of the dialog box.
1. When prompted with the **No NativePhone profile exists. Do you want to create it?** dialog box, click **Yes**.
1. Select the **Blank** > **Blank** page and click **OK**. 
1. On this new page, remove the empty container so you can start with a completely blank page.

You will begin by embedding the following widgets into your Mendix app:

* ARContainer
* ARImageTracker
* ARCube

Embed the widgets in this order:

1. Drag and drop **ARContainer** onto a native mobile page.
1. Drag and drop **ARImage** tracker into **ARContainer**.
1.  Drag and drop **ARCube** into **ARImageTracker**:

	{{% image_container width="300" %}}![Nested widgets](attachments/get-started/nested-widgets.png){{% /image_container %}}

Very little configuration is necessary to make your AR function. All you need is an image tracker. A tracker is an image your AR can track and put AR effects on top of. Most images can serve as a tracker, provided they have enough contrast. Complex images make for the best tracker, because they are easier for your device’s camera to track. Start by adding an image to ARImageTracker:

1. Double-click your **ARImageTracker** widget. 
1. Click **Image** > **Edit**. 
1.  Select a tracker from an image collection. This image will be the foundation of your AR application and is what your camera will track:

	{{% image_container width="300" %}}![Select tracker](attachments/get-started/select-marker.png){{% /image_container %}}

1.  Click **Run** in Mendix Studio Pro to automatically refresh your Make It Native app. Now your **Hello World AR** app is up and running. You should now see a simple white cube rendered on top of a tracker:

	{{% image_container width="300" %}}![White cube](attachments/get-started/white-cube.png){{% /image_container %}}

Now that you have a simple scene running, you will a closer look at the widgets you used to understand what they do.

### 3.1 ARContainer

This widget starts an AR scene: the video feed you see on AR apps. It is named ARContainer because this widget will hold all your other AR widgets. It is the foundation of every Mendix AR mobile application:

{{% image_container width="300" %}}![AR Container](attachments/get-started/ar-container.png){{% /image_container %}}

Selecting **Enable autofocus** > **No** can give a slight benefit to performance, but in most cases you should keep **Yes** selected.

### 3.2 ARImageTracker {#ar-tracker}

The **ARImageTracker** widget allows you to track an image. Like ARContainer, this widget can contain other AR widgets. All widgets you put into ARImageTracker will stick to the image. That means that every object (ARCube, ARSphere, and others) will follow or track the image.

{{% image_container width="300" %}}![AR Image Tracker](attachments/get-started/ar-image-tracker.png){{% /image_container %}}

**Image** — in the **General** tab, you can provide your own image to this widget by clicking **Image** > **Edit**. While it is possible to add any image, some images work better for AR tracking than others. Images can best be tracked when they have high contrast and several edges:

{{% image_container width="300" %}}![Sample Tracker Image](attachments/get-started/sample-tracker-image.png){{% /image_container %}}

It is possible to use a more conventional image, like a company logo, as long as it has enough contrast and edges. If your image does not posses these qualities, you will notice AR elements floating in incorrect places and motion tracking failures as you move your camera. It is also possible that your image will not be recognized at all. 

**Orientation** — this dictates the orientation of 3D objects on your tracker, not the orientation of the tracker itself. Leaving it on **Up** will make your 3D object appear right side up when you have it lying on a table.

Your standard cube will not look different when turned around. To show orientation, this tutorial has temporarily added the following texture was added (see the [Material](#material) section below to learn how to add your own texture to an object):

{{% image_container width="300" %}}![UP Image](attachments/get-started/up-arrow.png){{% /image_container %}}

Here is a cube with the **Up** orientation:

{{% image_container width="300" %}}![Cube on tracker with Up orientation](attachments/get-started/up-cube.png){{% /image_container %}}

Here is a cube with the **Left** orientation:

{{% image_container width="300" %}}![Cube on tracker with Left orientation](attachments/get-started/left-cube.png){{% /image_container %}}

## 4 Configuring Your ARCube Widget

The **ARCube** widget will places a cube into the scene, specifically onto the **ARImageTracker** widget. There are several properties you can configure in this widget to customize its behavior. 

Having the **ARCube** widget in the **ARImageTracker** widget will render a white cube the same size as the image tracker directly on top of it. Next you will configure **ARCube’s** properties.

### 4.1 General

The **General** tab contains basic properties for configuring position:

{{% image_container width="300" %}}![General tab](attachments/get-started/general-tab.png){{% /image_container %}}

In the **General** tab you can configure **Position**, **Rotation**, and **Scale** (**X** stands for left/right, **Y** for up/down, and **Z** for depth):

* **Position** — the position relative to the image tracker. For example, since the position is relative to the tracker size, set **X** to *1* to make your object appear right beside the tracker instead of on top of it:

	Here is a cube in **Position** (1,0,0):

	{{% image_container width="300" %}}![Cube on Position (1,0,0)](attachments/get-started/first-position.png){{% /image_container %}}

	Here is a cube in **Position** (0,1,0):

	{{% image_container width="300" %}}![Cube on Position (0,1,0)](attachments/get-started/second-position.png){{% /image_container %}}

	Here is a cube in **Position** (0,0,1):

	{{% image_container width="300" %}}![Cube on Position (0,0,1)](attachments/get-started/third-position.png){{% /image_container %}}

* **Rotation** — the rotation of the cube in 360 degrees. Set **Rotation** **X** to *45* to see your cube rotated 45 degrees on its X axis:

	Here is a cube with **Rotation** (0,0,0):

	{{% image_container width="300" %}}![Cube with Rotation (0,0,0)](attachments/get-started/rotation-zero.png){{% /image_container %}}

	Here is a cube with **Rotation** (45,0,0):

	{{% image_container width="300" %}}![Cube with Rotation (45,0,0)](attachments/get-started/rotation-forty-five.png){{% /image_container %}}

* **Scale** — the size of the object, also relative to the tracker it is embedded in. When the **Scale** is set to *(0,0,0)* the object will be invisible. Because **1** is exactly the size of the tracker, set **Scale X**, **Y** and **Z** to *0.5* to see your cube shrink in the tracker:

	Here is a cube with **Scale** (1,1,1):

	{{% image_container width="300" %}}![Cube with Scale (1,1,1)](attachments/get-started/scale-one.png){{% /image_container %}}

	Here is a cube with **Scale** (0.5,0.5,0.5):

	{{% image_container width="300" %}}![Cube with Scale (0.5,0.5,0.5)](attachments/get-started/scale-half.png){{% /image_container %}}

### 4.2 Material {#material}

The **Material** tab contains properties for configuring appearance:

{{% image_container width="300" %}}![Material](attachments/get-started/material-tab.png){{% /image_container %}}

* **Texture** — an image you can place on the cube by clicking **Edit**. The image will appear on each face of the cube. Put the example tracker here as a texture to end up with this colorful cube (note that the cube now ignores any **Color** value — if you want to make your cube one solid color, make sure the Texture is set to **none**):

	{{% image_container width="300" %}}![Texture](attachments/get-started/sample-texture.png){{% /image_container %}}

* **Color** — the color of the cube. You can have either a **Texture** or **Color**, but not both. *White* is the standard color. Change the value to *green* to make your cube appear this way:

	{{% image_container width="300" %}}![Color](attachments/get-started/green-color.png){{% /image_container %}}

* **Opacity** — the clarity or opacity of the cube. *1* is fully opaque, while *0* is fully transparent. Change the color of your cube back to *white* and change the opacity value to *0.5* to see your cube become partly transparent:

	{{% image_container width="300" %}}![Opacity](attachments/get-started/opacity.png){{% /image_container %}}

* **Lighting type** — the way light from the scene will fall on your object. 
	* **Phong**, **Blinn**, and **Lambert** are standard configurations of adding light and shadows to your objects. They are also have relatively slight processor power requirements.
	* **Constant** means no light is added — just pure colors are shown. 
	* **PBR** (Physically Based Rendering) is the most advanced. PBR takes the entire scene into account when creating its lighting, the intricacies of which are beyond this how-to. Change between the various **Lighting type** options to see them in action:

	Here is a cube with **Lighting type** > **Phong**:

	{{% image_container width="300" %}}![Cube with lighting type Phong](attachments/get-started/phong.png){{% /image_container %}}

	Here is a cube with **Lighting type** > **Constant**:

	{{% image_container width="300" %}}![Cube with lighting type Constant](attachments/get-started/constant.png){{% /image_container %}}

### 4.3 Interaction

**Interaction** is where Mendix AR gets more advanced. These properties dictate every way you can interact with your object. Enabling any of these will also allow you to catch the events they generate in the **Events** tab:

{{% image_container width="300" %}}![Interaction tab](attachments/get-started/interaction-tab.png){{% /image_container %}}

* **Physics** — dictates how your object interacts with other 3D objects. Enabling it will not show an immediate visible difference, but it will make it possible for other objects to collide with this object.
	* **Physics type** — how the object should physically behave. Selecting **Kinematic** will make your object move only when manipulated. **Dynamic** objects will react to everything. **Static** objects will never move.
	* **Gravity** — sets if the object should be affected by gravity. Setting it to ‘Yes’ will make your object fall until it meets another object with physics enabled. To put this information into practice, select **Enable Physics** > **Yes**, select **Physics Type** > **Dynamic**, and select **Use Gravity** > **Yes** to enable your cube’s physics:

	{{% image_container width="300" %}}![Physics gif](attachments/get-started/physics.gif){{% /image_container %}}

* **Dragging** — allows a user to manipulate an object by dragging it with their finger. This property gives users a very instinctive way to move objects

	{{% image_container width="300" %}}![Dragging gif](attachments/get-started/dragging.gif){{% /image_container %}}

* **Pinching** — can be used to scale the object, similar to zooming in and out on a maps widget. Select **Enable Pinching** > **Yes**, select **Enable Pinch to Scale** > **Yes**, and set the **Scale Factor** to 1, then pinch out on your object to examine it in detail.

	{{% image_container width="300" %}}![Pinching gif](attachments/get-started/pinching.gif){{% /image_container %}}

### 4.4 Events

The **Events** tab appears this way:

{{% image_container width="300" %}}![Events tab](attachments/get-started/events-tab.png){{% /image_container %}}

Events on 3D objects work like any other event on a widget. The main difference is that **On Drag**, **On Pinch**, and **On Collision** events will only be called when they are enabled in the interaction tab.

### 4.5 Common

The **Common** tab appears this way:

{{% image_container width="300" %}}![Common tab](attachments/get-started/common-tab.png){{% /image_container %}}

The **Common** tab has two important properties:

* **Name** — is used internally in all AR Widgets and must be unique. It can be changed, but we recommend keeping its generated name. 
*  **Visible** — is used to dictate the visibility of the AR component. This can be conditional just like most other widgets:

	{{% image_container width="300" %}}![Visibility](attachments/get-started/visibility.png){{% /image_container %}}

### 4.6 Appearance

The **Appearance** tab appears this way:

{{% image_container width="300" %}}![Appearance tab](attachments/get-started/appearance-tab.png){{% /image_container %}}

Currently the properties in the **Appearance** tab have no influence on AR widgets. This tab can be ignored.

## 5 Read More

* [Use Augmented Reality](ar-parent)
* [Build HoloLens Apps With Mendix](build-hololens)