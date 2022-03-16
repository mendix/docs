---
title: Augmented Reality
url: /refguide/mobile/using-mobile-capabilities/augmented-reality/
parent: /refguide/mobile/using-mobile-capabilities/
weight: 80
description: Tutorials for setting up and using AR in Mendix Studio Pro.
description: In this how-to you will make an augmented reality business card app.
description: In this how-to you will make a 3D cube by dragging and dropping widgets into your Mendix app.
aliases:
    - /refguide/ar-widgets/
    - /howto/mobile/ar-parent/
    - /howto/mobile/how-to-ar-business-card/
    - /howto/mobile/how-to-ar-simple-cube/
---

>>>>> /refguide/mobile/ar-widgets.md

## 1 Introduction

This reference guide will place the Augmented Reality (AR) widgets into context, as well as explain how they can be used
to create AR experiences. The following terms will be used frequently:

* Augmented reality (AR): adding virtual objects to the real world, through the mobile phone camera view
* AR scene: the place where all objects are placed in
* Billboard: describes the rotation behavior of an object, where it will always face the camera
* Origin: the starting position, specifically (0,0,0)

## 2 Overview of AR Widgets

There are 9 total AR Widgets. Some are structure widgets, while others are visual widgets:

Structure  widgets:

1.  **Container (AR)**
2.  **Image Tracker (AR)**
3.  **Plane Selector (AR)**
4.  **Node (AR)**

Visual widgets:

5.  **3D Object (AR)**
6.  **Text (AR)**
7.  **Cube (AR)**
8.  **Sphere (AR)**
9.  **Square (AR)**

## 3 Structure Widgets 

This are the AR widgets that can contain other widgets:

* **Container (AR)**
* **Image Tracker (AR)**
* **Plane Selector (AR)**
* **Node (AR)**

These widgets do not necessarily add something visual to the AR scene. Instead, they provide functionality or allow you to group other widgets. Structure  widgets function as new starting points for the widgets embedded in them. When you start an AR app, the location of your phone serves as the origin.

### 3.1 Container (AR)

Starts the AR camera view, and contains all other AR widgets. This widget is the start of every AR app.

### 3.2 Image Tracker (AR)

**ImageTracker (AR)** takes an image to track, when this image is found in the camera view it becomes the new origin of
every AR widget that is embedded in it. For example, if you use a **ImageTracker (AR)** to recognize an image, and put a
**Cube (AR)** in it, the cube will start in the exact middle of your image:

{{< figure src="/attachments/refguide/mobile/ar-widgets/scale-one.jpg" alt="Cube"   width="300"  >}}

### 3.3 Plane Selector (AR)

**PlaneSelector (AR)** finds surfaces that could fit your specified size. A user first scans their room by walking around the room with their phone while scanning. During this, all the surfaces are found and checked for size. On the large enough surfaces, an object similar to **Square (AR)** is shown and can be clicked to be selected. This will then be the starting point of embedded widgets.

### 3.4 Node (AR)

A **Node (AR)** can help group other widgets. Everything embedded in a **Node (AR)** can be oriented with fixed distances and rotations from each other. **Node (AR)** also has a feature that can make the objects in it 'billboard' to the camera, which is useful for UI like elements. To see an example of this, check **AR-Examples** > **Car Color Picker** and note the the spheres above the car.

## 4 Visual widgets

Visual widgets are widgets that add a virtual object to the scene.

### 4.1 Cube (AR)

{{< figure src="/attachments/refguide/mobile/ar-widgets/Cube.gif" alt="Cube" >}}

### 4.2 Sphere (AR)

{{< figure src="/attachments/refguide/mobile/ar-widgets/Sphere.gif" alt="Sphere" >}}

### 4.3 Square (AR)

{{< figure src="/attachments/refguide/mobile/ar-widgets/Square.gif" alt="Square" >}}

### 4.4 3D Object (AR)

{{< figure src="/attachments/refguide/mobile/ar-widgets/3DObject.gif" alt="3DObject" >}}

Beyond using simple 3D objects, there are also ways to add more complex and custom objects to your scene. The 3D object widget takes either a URL or a FileDocument (you have to upload its model later). There are currently 3 types supported: *.obj*, *.gltf*, and *.glb*. Each with their own benefits. Using a custom material like with the simple visual widgets is only supported in the *.obj* format.

### 4.5 Text (AR)

{{< figure src="/attachments/refguide/mobile/ar-widgets/Text.gif" alt="Text" >}}

**Text (AR)** can be used to have 3D or 2D text floating in space. It is best practice to add only a few lines of text to the scene in this way. Bigger paragraphs are better communicated through a 2D text field on another place in your app.

## 5 Common Properties

All AR widgets share these properties:

* Position
* Rotation
* Scale
* Material
* Interaction

### 5.1 Position

**Position** describes where an object should be. In AR, position can be a bit confusing. This is why most positioning is relative to a parent node.

This means that the origin of (0,0,0) is in the middle of either the **ImageTracker (AR)**, or (0,0,0) is exactly where the user tapped
on the **PlaneSelector (AR)**. 

It is possible to set a position on visual widgets that is not relative by adding the widget directly into the **Container (AR)**. The 0,0,0 position is then exactly where the camera starts at the beginning of the scene. After the scene has started, the position will not move along with the camera anymore.

### 5.2 Rotation

**Rotation** can be used to turn an object on three different axes. When using rotation for custom 3D objects it will turn around the pivot point of the 3D file — the center of the object is not automatically selected.

### 5.3 Scale

**Scale** is used for setting the size of objects. Widgets that have a set object (**Cube (AR)**, **Sphere (AR)**, or **Square (AR)**) will have a size of 1 or 2 meters. Objects that are added through the 3D Object widget might not conform to that standard unless they are correctly exported with the 1 unit = 1 meter scale. Without that standard scale, objects added with the 3D Object widget can be much larger or smaller than what the scale is set to.

### 5.4 Material

The **Material** tab sets things like color and also the realism of the object that has to be rendered. For example, setting the rendering mode to PBR will enable physically-based rendering (do not forget to set an HDR image as the reflection map and light source in the **Container (AR)**).

**Material** configurations actually render a 3D element in the camera view. **Cube (AR)**, **Sphere (AR)**, and **Square (AR)** each render a simple 3D object. Only the **Square (AR)** widget can sometimes be invisible from one side. The simple visual widgets come with a way to customize them through scale and material. A material for a 3D object describes what it should look like — think of it like styling. You can add a texture (image), color, different lighting, or even a video to play on the 3D object. The only difference between these objects is in appearance — the configuration is the same on each widget.

### 5.5 Interaction

Interaction is used for all actions your 3D objects can do that interact with the environment or the user.

#### 5.5.1 Physics

Physics allows your 3D object to react to the world, using gravity, or other object using the collision event. Note that the real world environment will not automatically stop your 3D object from falling when gravity is enabled. You have to add these objects yourself. These are the different physics types: 

* **Kinematic** — Objects with this physics type can only be moved by user input, not by other objects in the scene.
* **Dynamic** — Dynamic objects can be moved both by user input and by other objects in the scene. For example, if another object with gravity
falls onto this object, the object will move. 
* **Static** — Static objects will never move and cannot move through any physics interactions. Static objects can still be moved when specifically changing the position on them.

#### 5.5.2 Dragging

By enabling dragging users can move this object around in their space. The dragging type allows users to either have the
object at the same distance when they are dragging it. Effectively this means the object is 'stuck' to the phone while
they move it around. By changing the type to fixed to world, the object will now be stuck to floors and walls while the
user drags it around.

#### 5.5.3 Pinching

By enabling pinching, and selecting pinch to scale, you allow the user to scale the object through the pinching gesture.


>>>>> /howto/mobile/native-mobile/ar-parent/_index.md

These step-by-step guides will teach you to set up and use augmented reality (AR) using Mendix Studio Pro and your native mobile device.

The following how-to’s are available here:

- [Get Started with AR](/howto/mobile/how-to-ar-simple-cube/)
- [Create An AR Business Card](/howto/mobile/how-to-ar-business-card/)


>>>>> /howto/mobile/native-mobile/ar-parent/how-to-ar-business-card.md

## 1 Introduction

Follow the sections below to build a demo. While doing so, you will become familiar with a whole range of augmented reality (AR) widgets, and see them in action. Upon completing this document, you will end up with an interesting demo that can easily be customized for your own purposes. 

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Studio Pro and Developer Apps with AR capabilities
* Download the AR widgets from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/117209)
* Create a new empty page with **Container (AR)** and **ImageTracker (AR)** widgets
* Add your business card png as the **Image** to the **ImageTracker (AR)**
* Obtain 3D objects to add to your AR business card (this document uses Twitter and LinkedIn logos).
* Have a PNG of your business card

Download these widgets:

* **Container (AR)**
* **ImageTracker (AR)**
* **Square (AR)**
* **3D Object (AR)**

When you have completed the prerequisites, your work should look like this:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/BusinessCardRender.png" alt="Result"   width="300"  >}}

## 3 Creating an AR Business Card Demo

For this app you will need to start a new app based on the Blank Native Mobile App, or use another app with the Native Mobile Resources module imported from the Mendix Marketplace. First you will lay a virtual business card over your real business card. You will need the **Square (AR)** widget and the imported PNG of the business card you wish to use.

Ideally you should have several recognizable features on your image, specifically an image with a lot of edges and contrast. The business card you are using in this document possesses these traits:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/BusinessCard.png" alt="Business card"   width="300"  >}}

After you have added your business card as an image, remember to adjust the physical size in **Image Tracker (AR)** to the exact size of your business card. Choose the width (the longest side) of your business card for this. This will probably be around 8.5 centimeters:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/imagetracker-dialogue.png" alt="Image tracker"   width="300"  >}}

Next you will add a virtual image of your business card to overlap the physical business card. To do this, add a
‘**Square (AR)**’ widget to your app’s home page. Note we already added a ‘**Container (AR)**’ and ‘**ImageTracker
(AR)**’ beforehand:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/square-added.png" alt="Square added"   width="300"  >}}

1. Double click the **Square (AR)** widget.
1. Select the **Material** tab.
1. Select **Material type** > **Texture**.
1. Select the image of your business card for the **Texture**. This should be the same image as you selected for your
   **Image Tracker (AR)**. When finished your dialog box will look like this:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/square-material-dialogue.png" alt="Square dialog"   width="300"  >}}

5. Go back to the **General** tab and fill out the size of your business card. The important sizes are X for the width of
   your business card and Y for the height.
6. Set **Rotation > X** to *-90* to ensure the virtual image is rotated correctly.

Once this is all set up, run the app and check if it works in the Make It Native app. Here you should see the
virtual business card overlaying your physical card:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/render-only-businesscard.png" alt="Business card"   width="300"  >}}

Next, add a picture of yourself to your virtual business card. Drag and drop another **Square (AR)** widget into
**ImageTracker (AR)** and add a picture of yourself to this. In our case we have used a square image with transparent
edges to make it appear round: 

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/Face.png" alt="Face"   width="300"  >}}

Go to the **General** tab and place it about 8 cm (*0.08,0,0*) to the right of the first image and match the size with the
size of our business card image. You should now have this image right next to your business card image.

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/render-businesscard-face.png" alt="render business card"   width="300"  >}}

To finish this business card demo you need something people can click to find out more about your work. For this you will
add two social media logos: a Twitter one and a LinkedIn one. You can use any 3D object. 

The following settings correctly place them underneath our business card (since scale can differ between 3D objects, this is not guarenteed to work with all 3D objects):

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/twitter-3d-object.png" alt="twitter 3d object"   width="300"  >}}{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/twitter-3d-object.png" alt="twitter 3d object"   width="300"  >}}
{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/linkedin-3d-object.png" alt="linkedin 3d object" width="300" >}}

Since you are using *.obj* files, you can alter the color or texture within Mendix. Currently, Twitter has a color of #1DA1F2 and Linkedin has #0A66C2:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/twitter-material-dialogue.png" alt="twitter material"   width="300"  >}}

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/BusinessCardRender.png" alt="Completed"   width="300"  >}}

Now all that is left is to add a nanoflow that opens a URL to the **Events** > **On click functionality**. Create a new
nanoflow with the **Open URL** action. Add your Twitter profile URL here:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/open-url-nanoflow.png" alt="open url nanoflow"   width="300"  >}}

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/call-url-event-dialogue.png" alt="call url event"   width="300"  >}}

Congratulations, you now have a functioning AR business card demo with custom 3D objects!


>>>>> /howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube.md

## 1 Introduction

Working with augmented reality (AR) is not all that different from implementing any other piece of Native functionality.
Using just a few widgets, you can add two-or-three dimensional AR to your native mobile application. In this how-to you
will make a 3D cube by dragging and dropping widgets into your Mendix app and then configuring them.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

For Android:

- Have an Android mobile device that can [support ARCore](https://developers.google.com/ar/discover/supported*devices#android_play).
- Install [Google Play Services for AR](https://play.google.com/store/apps/details?id=com.google.ar.core&hl=en) on your device.
- Install the Make It Native app on your Android mobile device for testing purposes.

For iOS:

- Have an iOS mobile device that supports ARKit (iPhone 6S and up).
- Install the Make It Native app on your iOS mobile device for testing purposes.

## 3 Embedding Widgets in Your App

Create a new app by following these steps:

1. Open Mendix Studio Pro. Select **File** > **New App** , and then select the **Blank Native Mobile App**.
2. Click **Use this starting point.**
3. Name your app _Hello World_ and click **Create app** to close the dialog box.
4. Open the **Home_Native** page and remove the intro screen widget and other containers.
5. Download the Native Mobile AR module from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/117209) and import it to your app.

You will begin by embedding the following widgets into your Mendix app:

- Container (AR)
- ImageTracker (AR)
- Cube (AR)

Embed the widgets in this order:

1. Drag and drop **Container (AR)** onto a native mobile page.
1. Drag and drop **ImageTracker (AR)** into **Container (AR)**.
1. Drag and drop **Cube (AR)** into **ImageTracker (AR)**:

   {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/nested-widgets.png" alt="Nested widgets"   width="300"  >}}

Very little configuration is necessary to make your AR function. All you need is an image tracker. A tracker is an image
your AR can track and put AR effects on top of. Most images can serve as a tracker, provided they have enough contrast.
Complex images make for the best tracker, because they are easier for your device’s camera to track. Start by adding an
image to ImageTracker (AR):

1. Double-click your **ImageTracker (AR)** widget.
1. Click **Image** > **Edit**.
1.  Select a tracker from an image collection. This image will be the foundation of your AR application and is what your camera will track:

	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/sample-tracker-image.png" alt="Select tracker"   width="300"  >}}

1. Set the physical size of this image tracker, this size is in meters. For example, if you printed the tracker to be 10 cm set **Physical marker size** to 0.1.
1. Double-click your **Cube (AR)** widgets.
1. Set **X**, **Y** and **Z** of Scale to 0.1. This way the **Cube (AR)** will be the same size as your physical tracker.
1.  Click **Run** in Mendix Studio Pro to automatically refresh your Make It Native app. Now your **Hello World AR** app is up and running. You should now see a simple white cube rendered on top of a tracker:

	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/white-cube.jpg" alt="White cube"   width="300"  >}}

Now that you have a simple scene running, you will a closer look at the widgets you used to understand what they do.

### 3.1 Container (AR)

This widget starts an AR scene: the video feed you see on AR apps. It is named Container (AR) because this widget will hold all your other AR widgets. It is the foundation of every Mendix AR mobile application:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/ar-container.png" alt="Container (AR)"   width="300"  >}}

### 3.2 ImageTracker (AR) {#ar-tracker}

The **ImageTracker (AR)** widget allows you to track an image. Like Container (AR), this widget can contain other AR widgets. All widgets you put into ImageTracker (AR) will stick to the image. That means that every object (Cube (AR), Sphere (AR), and others) will follow or track the image.

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/ar-image-tracker.png" alt="ImageTracker (AR)"   width="300"  >}}

**Image** — in the **General** tab, you can provide your own image to this widget by clicking **Image** > **Edit**. While it is possible to add any image, some images work better for AR tracking than others. Images can best be tracked when they have high contrast and several edges:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/sample-tracker-image.png" alt="Sample Tracker Image"   width="300"  >}}

It is possible to use a more conventional image, like a company logo, as long as it has enough contrast and edges. If your image does not posses these qualities, you will notice AR elements floating in incorrect places and motion tracking failures as you move your camera. It is also possible that your image will not be recognized at all.

**Orientation** — this dictates the orientation of 3D objects on your tracker, not the orientation of the tracker itself. Leaving it on **Up** will make your 3D object appear right side up when you have it lying on a table.

Your standard cube will not look different when turned around. To show orientation, this tutorial has temporarily added the following texture (see the [Material](#material) section below to learn how to add your own texture to an object):

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/up-arrow.png" alt="UP Image"   width="300"  >}}

Here is a cube with the **Up** orientation:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/up-cube.jpg" alt="Cube on tracker with Up orientation"   width="300"  >}}

Here is a cube with the **Left** orientation:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/left-cube.jpg" alt="Cube on tracker with Left orientation"   width="300"  >}}

**Physical marker size** - this is where you put the physical size of your tracker, and how AR determains how far away the marker is. Since most phones will use only one camera, this value is used to calculate depth. Putting a wrong value here won't break AR, but will change the depth at which your objects are rendered. Which in turn may also lead to more jittering or 'vibrating' of your 3D models.

**Keep updating** - can be used for a more stable experience. When you keep this on **Yes** this will mean your application is constantly scanning and adjusting for the tracker, using that as it's main reference. If you set this to **No** the **ImageTracker (AR)** will stop after the tracker is found and then use the native ARCore/ARKit to further handle positioning. This will make your scene more stable, but obviously should not be used when you expect the tracker to move.

## 4 Configuring Your Cube (AR) Widget

The **Cube (AR)** widget will places a cube into the scene, specifically onto the **ImageTracker (AR)** widget. There are several properties you can configure in this widget to customize its behavior.

Having the **Cube (AR)** widget in the **ImageTracker (AR)** widget will render a white cube the same size as the image tracker directly on top of it. Next you will configure **Cube (AR)’s** properties.

### 4.1 General

The **General** tab contains basic properties for configuring position:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/general-tab.png" alt="General tab"   width="300"  >}}

In the **General** tab you can configure **Position**, **Rotation**, and **Scale** (**X** stands for left/right, **Y** for up/down, and **Z** for depth):

*  **Position** — the position relative to the image tracker. For example, since the position is relative to the tracker size, set **X** to _0.1_ to make your object appear right beside the tracker instead of on top of it:

	Here is a cube in **Position** (0.1,0,0):
   
	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/first-position.jpg" alt="Cube on Position (0.1,0,0)"   width="300"  >}}
   
	Here is a cube in **Position** (0,0.1,0):
   
	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/second-position.jpg" alt="Cube on Position (0,0.1,0)"   width="300"  >}}
   
	Here is a cube in **Position** (0,0,0.1):
   
	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/third-position.jpg" alt="Cube on Position (0,0,0.1)"   width="300"  >}}

*  **Rotation** — the rotation of the cube in 360 degrees. Set **Rotation** **X** to _45_ to see your cube rotated 45 degrees on its X axis:

	Here is a cube with **Rotation** (0,0,0):
   
	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/rotation-zero.jpg" alt="Cube with Rotation (0,0,0)"   width="300"  >}}
   
	Here is a cube with **Rotation** (45,0,0):
   
	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/rotation-forty-five.jpg" alt="Cube with Rotation (45,0,0)"   width="300"  >}}

*  **Scale** — the size of the object, also relative to the tracker it is embedded in. When the **Scale** is set to _(0,0,0)_ the object will be invisible. Because **0.1** is exactly the size of the tracker, set **Scale X**, **Y**  and **Z** to _0.05_ to see your cube shrink in the tracker:

	Here is a cube with **Scale** (0.1,0.1,0.1):
   
	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/scale-one.jpg" alt="Cube with Scale (0.1,0.1,0.1)"   width="300"  >}}
   
	Here is a cube with **Scale** (0.05,0.05,0.05):
   
	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/scale-half.jpg" alt="Cube with Scale (0.05,0.05,0.05)"   width="300"  >}}

For **Position**, **Rotation** and **Scale** an **Attribute** can also be used to set the **Position**, **Rotation** and **Scale** **X** **Y** and **Z** values. These values will also get updated for example when the user uses their finger to move them. To use the **Attribute** option simply select this instead of **Expression** at **Position type**, **Rotation type** or **Scale type**.

### 4.2 Material {#material}

The **Material** tab contains properties for configuring appearance:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/material-tab.png" alt="Material"   width="300"  >}}

* **Material type** - can be either **Texture**, **Color** or **Video**. **Material type** determains what will be put
  onto the cube, an image, a color or a looping video.

* **Texture** — an image you can place on the cube by clicking **Edit**. The image will appear on each face of the cube. Put the example tracker here as a texture to end up with this colorful cube (note that the cube now ignores  any **Color** value — if you want to make your cube one solid color, make sure the Texture is set to **none**):

	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/sample-texture.jpg" alt="Texture"   width="300"  >}}

* **Color** — the color of the cube. You can have either a **Texture** or **Color**, but not both. _White_ is the  standard color. Change the value to _green_ to make your cube appear this way:

	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/green-color.jpg" alt="Color"   width="300"  >}}

* **Video** - a link to a .mp4 video. This will play a looping video on the object.
* **Opacity** — the clarity or opacity of the cube. _1_ is fully opaque, while _0_ is fully transparent. Change the color of your cube back to _white_ and change the opacity value to _0.5_ to see your cube become partly transparent:

	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/opacity.jpg" alt="Opacity"   width="300"  >}}

*  **Lighting type** — the way light from the scene will fall on your object. 
	**Phong**, **Blinn**, and **Lambert**  are standard configurations of adding light and shadows to your objects. They are also have relatively slight  processor power requirements. 		**Constant** means no light is added — just pure colors are shown. 
	**PBR** — (Physically Based Rendering) is the most advanced. PBR takes the entire scene into account when creating its  lighting, the intricacies of which are beyond this how-to. Change between the various **Lighting type** options to  see them in action:

	Here is a cube with **Lighting type** > **Phong**:
   
	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/phong.jpg" alt="Cube with lighting type Phong"   width="300"  >}}
   
	Here is a cube with **Lighting type** > **Constant**:
   
	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/constant.jpg" alt="Cube with lighting type Constant"   width="300"  >}}

### 4.3 Interaction

**Interaction** is where Mendix AR gets more advanced. These properties dictate every way you can interact with your object. Enabling any of these will also allow you to catch the events they generate in the **Events** tab:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/interaction-tab.png" alt="Interaction tab"   width="300"  >}}

* **Physics** — dictates how your object interacts with other 3D objects. Enabling it will not show an immediate  visible difference, but it will make it possible for other objects to collide with this object. 
* **Physics type** —  how the object should physically behave. Selecting **Kinematic** will make your object move only when manipulated.  **Dynamic** objects will react to everything. **Static** objects will never move.
* **On collision** — an event that  is triggered when this objects collides with another 3D object with physics enabled. When this objects **Physics  type** is not **Dynamic** but is enabled, it can still collide with objects that are **Dynamic** and vice versa. However, **Kinematic** and **Static** object cannot generate this event with other objects that are **Kinematic** or  **Static**. 
* **Use gravity** — sets if the object should be affected by gravity. Setting it to ‘Yes’ will make your object fall until it meets another object with physics enabled. To put this information into practice, select  **Enable Physics** > **Yes**, select **Physics Type** > **Dynamic**, and select **Use Gravity** > **Yes** to enable  your cube’s physics:

	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/physics.gif" alt="Physics gif"   width="300"  >}}

* **Dragging** — allows a user to manipulate an object by dragging it with their finger. This property gives users a very instinctive way to move objects. 
* **Dragging type** — the type of dragging behaviour you want, **Fixed  Distance** will make the object follow you at always the same distance as it started. **Fixed to world** will make the object stick to the world, for example objects like floors, desks, walls etc.
*  **On drag** — an event that is triggered when the object is moved through dragging:

	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/dragging.gif" alt="Dragging gif"   width="300"  >}}

*  **Pinching** — can be used to scale the object, similar to zooming in and out on a maps widget. Select **Enable  Pinching** > **Yes**, select **Enable Pinch to Scale** > **Yes**, and set the **Scale Factor** to 0.5, then pinch  out on your object to examine it in detail:

	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/pinching.gif" alt="Pinching gif"   width="300"  >}}

### 4.4 Events

The **Events** tab appears this way:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/events-tab.png" alt="Events tab"   width="300"  >}}

Events on 3D objects work like any other event on a widget. **On click** is called when the object is clicked, and **On hover** is called when the object is 'in focus' in the middle of the screen.

### 4.5 Common

The **Common** tab appears this way:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/common-tab.png" alt="Common tab"   width="300"  >}}

The **Common** tab has two important properties:

* **Name** — is used internally in all AR Widgets and must be unique. It can be changed, but we recommend keeping its generated name.
*  **Visible** — is used to dictate the visibility of the AR component. This can be conditional just like most other widgets:

	{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/visibility.png" alt="Visibility"   width="300"  >}}

### 4.6 Appearance

The **Appearance** tab appears this way:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-simple-cube/appearance-tab.png" alt="Appearance tab"   width="300"  >}}

Currently the properties in the **Appearance** tab have no influence on AR widgets. This tab can be ignored.
