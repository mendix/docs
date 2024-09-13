---
title: "Get Started with AR"
url: /refguide/mobile/using-mobile-capabilities/augmented-reality/how-to-ar-simple-cube/
weight: 10
description: Tutorials for setting up and using AR in Mendix Studio Pro.
aliases:
    - /howto/mobile/how-to-ar-simple-cube/
---

## Introduction

Working with augmented reality (AR) is not all that different from implementing any other piece of Native functionality. Using just a few widgets, you can add two-or-three dimensional AR to your native mobile application. In this guide you will make a 3D cube by dragging and dropping widgets into your Mendix app and then configuring them.

## Prerequisites {#prerecs}

Before starting this guide, make sure you have completed the following prerequisites:

For Android:

* Have an Android mobile device that can [support ARCore](https://developers.google.com/ar/develop).
* Install [Google Play Services for AR](https://play.google.com/store/apps/details?id=com.google.ar.core&hl=en) on your device.
* Install the latest Make It Native app on your Android mobile device for testing purposes.

For iOS:

* Have an iOS mobile device that supports ARKit (iPhone 6S and up).
* Install the latest Make It Native app on your iOS mobile device for testing purposes.

If you want to make use of the **Realistic** lighting option which can make your objects more lifelike, then you should also have an HDR image to use for rendering this light. [Follow Babylon.JS' guide](https://doc.babylonjs.com/divingDeeper/materials/using/HDREnvironment#creating-a-compressed-environment-texture-using-the-sandbox) to create a *.env* texture which you can use in the **Container (AR)** widget.

## Embedding Widgets in Your App

Create a new app by following these steps:

1. Open Mendix Studio Pro. Select **File** > **New App**, and then select the **Blank Native Mobile App**.
1. Click **Use this starting point.**
1. Name your app *Hello World* and click **Create app** to close the dialog box.
1. Open the **Home_Native** page and remove the intro screen widget and other containers.
1. Download the Native Mobile AR (version 2 or higher) module from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/117209) and import it to your app.

You will begin by embedding the following widgets into your Mendix app:

* Container (AR)
* ImageTracker (AR)
* Cube (AR)

Embed the widgets in this order:

1. Drag **Container (AR)** onto a native mobile page.
1. Drag **ImageTracker (AR)** into **Container (AR)**.
1. Drag **Cube (AR)** into **ImageTracker (AR)**:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/nested-widgets.png" alt="Nested widgets"   width="400"  class="no-border" >}}

Very little configuration is necessary to make your AR function. All you need is an image tracker. A tracker is an image your AR can track and put AR effects on top of. Most images can serve as a tracker, provided they have enough contrast. Complex images make for the best tracker, because they are easier for your device’s camera to track. Start by adding an image to ImageTracker (AR):

1. Double-click your **ImageTracker (AR)** widget.
1. Click **Image** > **Edit**.
1. Select a tracker from an image collection. This image will be the foundation of your AR application and is what your camera will track:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/sample-tracker-image.png" alt="Select tracker"   width="400"  class="no-border" >}}

1. Set the physical size of this image tracker, this size is in meters. For example, if you printed the tracker to be 10 cm set **Physical marker size** to 0.1.
1. Double-click your **Cube (AR)** widgets.
1. Set **X**, **Y** and **Z** of Scale to 0.1. This way the **Cube (AR)** will be the same size as your physical tracker.
1. Click **Run** in Mendix Studio Pro to automatically refresh your Make It Native app. Now your **Hello World AR** app is up and running. You should now see a simple white cube rendered on top of a tracker:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/white-cube.png" alt="White cube"   width="400"  class="no-border" >}}

Now that you have a simple scene running, you will a closer look at the widgets you used to understand what they do.

### Container (AR)

This widget starts an AR scene: the video feed you see on AR apps. It is named Container (AR) because this widget will hold all your other AR widgets. It is the foundation of every Mendix AR mobile application:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/ar-container.png" alt="Container (AR)"   width="400"  class="no-border" >}}

### ImageTracker (AR) {#ar-tracker}

The **ImageTracker (AR)** widget allows you to track an image. Like Container (AR), this widget can contain other AR widgets. All widgets you put into ImageTracker (AR) will stick to the image. That means that every object (Cube (AR), Sphere (AR), and others) will follow or track the image.

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/ar-image-tracker.png" alt="ImageTracker (AR)"   width="400"  class="no-border" >}}

The **ImageTracker (AR)** properties are as follows:

* **Image** – In the **General** tab, you can provide your own image to this widget by clicking **Image** > **Edit**. While it is possible to add any image, some images work better for AR tracking than others. Images can best be tracked when they have high contrast and several edges:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/sample-tracker-image.png" alt="Sample Tracker Image"   width="400"  class="no-border" >}}

    It is possible to use a more conventional image, like a company logo, as long as it has enough contrast and edges. If your image does not posses these qualities, you will notice AR elements floating in incorrect places and motion tracking failures as you move your camera. It is also possible that your image will not be recognized at all.

* **Orientation** – This dictates the orientation of 3D objects on your tracker, not the orientation of the tracker itself. Leaving it on **Up** will make your 3D object appear right side up when you have it lying on a table.

Your standard cube will not look different when turned around. To show orientation, this tutorial has temporarily added the following texture (see the [Material](#material) section below to learn how to add your own texture to an object):

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/up-arrow.png" alt="UP Image"   width="400"  class="no-border" >}}

Here is a cube with the **Up** orientation:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/up-cube.png" alt="Cube on tracker with Up orientation"   width="400"  class="no-border" >}}

Here is a cube with the **Left** orientation:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/left-cube.png" alt="Cube on tracker with Left orientation"   width="400"  class="no-border" >}}

**Physical marker size** - this is where you put the physical size of your tracker, and how AR determines how far away the marker is. Since most phones will use only one camera, this value is used to calculate depth. Putting a wrong value here won't break AR, but will change the depth at which your objects are rendered. Which in turn may also lead to more jittering or 'vibrating' of your 3D models.

## Configuring Your Cube (AR) Widget

The **Cube (AR)** widget will places a cube into the scene, specifically onto the **ImageTracker (AR)** widget. There are several properties you can configure in this widget to customize its behavior.

Having the **Cube (AR)** widget in the **ImageTracker (AR)** widget will render a white cube the same size as the image tracker directly on top of it. Next you will configure **Cube (AR)’s** properties.

### General

The **General** tab contains basic properties for configuring position:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/general-tab.png" alt="General tab"   width="400"  class="no-border" >}}

In the **General** tab you can configure **Position**, **Rotation**, and **Scale** (**X** stands for left/right, **Y** for up/down, and **Z** for depth):

* **Position** – the position relative to the image tracker. For example, since the position is relative to the tracker size, set **X** to *0.1* to make your object appear right beside the tracker instead of on top of it:

    Here is a cube in **Position** (0.1,0,0):

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/first-position.png" alt="Cube on Position (0.1,0,0)"   width="400"  class="no-border" >}}

    Here is a cube in **Position** (0,0.1,0):

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/second-position.png" alt="Cube on Position (0,0.1,0)"   width="400"  class="no-border" >}}

    Here is a cube in **Position** (0,0,0.1):

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/third-position.png" alt="Cube on Position (0,0,0.1)"   width="400"  class="no-border" >}}

* **Rotation** – the rotation of the cube in 360 degrees. Set **Rotation** **X** to *45* to see your cube rotated 45 degrees on its X axis:

    Here is a cube with **Rotation** (0,0,0):

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/white-cube.png" alt="Cube with Rotation (0,0,0)"   width="400"  class="no-border" >}}

    Here is a cube with **Rotation** (45,0,0):

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/rotation-forty-five.png" alt="Cube with Rotation (45,0,0)"   width="400"  class="no-border" >}}

* **Scale** – the size of the object, also relative to the tracker it is embedded in. When the **Scale** is set to *(0,0,0)* the object will be invisible. Because **0.1** is exactly the size of the tracker, set **Scale X**, **Y**  and **Z** to *0.05* to see your cube shrink in the tracker:

    Here is a cube with **Scale** (0.1,0.1,0.1):

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/white-cube.png" alt="Cube with Scale (0.1,0.1,0.1)"   width="400"  class="no-border" >}}

    Here is a cube with **Scale** (0.05,0.05,0.05):

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/scale-half.png" alt="Cube with Scale (0.05,0.05,0.05)"   width="400"  class="no-border" >}}

For **Position**, **Rotation** and **Scale** an **Attribute** can also be used to set the **Position**, **Rotation** and **Scale** **X** **Y** and **Z** values. To use the **Attribute** option simply select this instead of **Expression** at **Position type**, **Rotation type** or **Scale type**. The last option is to use **Static**, where you can also put a value but cannot change this value in the app itself.  

### Material {#material}

The **Material** tab contains properties for configuring appearance:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/material-tab.png" alt="Material"   width="400"  class="no-border" >}}

* **Material type** - can be either **Texture** or **Color**. **Material type** determines what will be put onto the cube, an image or a solid color.

* **Texture** – an image you can place on the cube by clicking **Edit**. The image will appear on each face of the cube. Put the example tracker here as a texture to end up with this colorful cube (note that the cube now ignores any **Color** value – if you want to make your cube one solid color, make sure the Texture is set to **none**):

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/sample-texture.png" alt="Texture"   width="400"  class="no-border" >}}

* **Color** – the color of the cube. You can have either a **Texture** or **Color**, but not both. The color must be supplied in the *#rrggbb* format.  *#0CABF9* (a light blue) is the standard color. Change the value to *#00FF00* to make your cube appear this way:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/green.png" alt="Color"   width="400"  class="no-border" >}}

* **Opacity** – the clarity or opacity of the cube. *1* is fully opaque, while *0* is fully transparent. Change the color of your cube back to *white* and change the opacity value to *0.5* to see your cube become partly transparent:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/opacity.png" alt="Opacity"   width="400"  class="no-border" >}}

* **Lighting type** – the way light from the scene will fall on your object. 
    * **Simple** is the standard **Lighting Type**, this is not very realistic but will make the object visible and is the easiest to work with. 
    * **Realistic** lighting is the more advanced option, it takes a reflection image into account. You have to supply this image in the **Container (AR)** widget (see the [Prerequisites](#prerecs) section above).

    Here is a cube with **Lighting type** > **Simple**:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/white-cube.png" alt="Cube with lighting type Phong"   width="400"  class="no-border" >}}

    Here is a cube with **Lighting type** > **Realistic**:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/realistic.png" alt="Cube with lighting type Constant"   width="400"  class="no-border" >}}

### Interaction

**Interaction** is where Mendix AR gets more advanced. These properties dictate every way you can interact with your object. Enabling any of these will also allow you to catch the events they generate in the **Events** tab:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/interaction-tab.png" alt="Interaction tab"   width="400"  class="no-border" >}}

* **Dragging** – allows a user to move an object by moving their phone (the object will follow on the floor, desk, or other surface in the middle of the screen). 
* **Enable dragging** - dictates if the dragging behavior is enabled. For example, you could enable and disable this when the user clicks on the object using the **On click** event in the **Events** tab.
* **Dragging type** – specifies the type of dragging behavior:
    * **Fixed Distance**: makes the object follow you at always the same distance as it started
    * **Fixed to world**: makes the object stick to the world, for example objects like floors, desks, and walls 
* **On drag** – an event that is triggered when the object is has started or stopped moving through dragging:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/dragging.gif" alt="Dragging gif"   width="400"  class="no-border" >}}

* **Pinching** – can be used to scale the object, similar to zooming in and out on a maps widget. Select **Pinching** > **Yes**, **Enable pinching** > **true**, select **Enable Pinch to Scale** > **Yes**, then pinch out on your object to examine it in detail:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/pinching.gif" alt="Pinching gif"   width="400"  class="no-border" >}}

### Events

The **Events** tab appears this way:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/events-tab.png" alt="Events tab"   width="400"  class="no-border" >}}

Events on 3D objects work like any other event on a widget. **On click** is called when the object is clicked, and **On hover enter** is called when the object enters 'in focus' in the middle of the screen, **On hover exit** is called when the object exits that 'focus' in the middle of the screen.

### Common

The **Common** tab appears this way:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/common-tab.png" alt="Common tab"   width="400"  class="no-border" >}}

The **Common** tab has two important properties:

* **Name** – is used internally in all AR Widgets and must be unique. It can be changed, but Mendix recommends keeping its generated name.
* **Visible** – is used to dictate the visibility of the AR component. This can be conditional just like most other widgets:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/visibility.png" alt="Visibility"   width="400"  class="no-border" >}}

### Appearance

The **Appearance** tab appears this way:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/appearance-tab.png" alt="Appearance tab"   width="400"  class="no-border" >}}

Currently the properties in the **Appearance** tab have no influence on AR widgets. This tab can be ignored.

## Read More

* [Native Mobile AR](/appstore/modules/native-mobile-ar/)
