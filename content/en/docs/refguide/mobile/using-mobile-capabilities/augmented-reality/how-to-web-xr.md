---
title: "Get Started with WebXR"
url: /refguide/mobile/using-mobile-capabilities/augmented-reality/get-started-with-web-xr/
weight: 10
description: "Tutorials for setting up and using XR in Mendix Studio Pro."
---

## Introduction

Using WebXR widgets, you can build fully immersive extended reality (XR) experiences that combine both augmented reality (AR) and virtual reality (VR) technologies. The [WebXR module](https://marketplace.mendix.com/link/component/225425) contains the following widgets:

Container widgets:

* Container (XR)
* Node (XR)
* Repeater (XR)

3D Object widgets:

* Text (XR)
* 3D Object (XR)
* Sphere (XR)
* Cube (XR)
* Square (XR)

### Features

* Allows you to show 3D objects in either a VR or AR space, either in a fully immersive mode or just in the browser
* Allows you to use Mendix microflows and nanoflows to model out interactions with these 3D objects

## Configuration

These widgets require a certain configuration to work; all the widgets need to be contained in the **Container (XR)** widget. There can only be one Container (XR) widget per page, which must contain all the other WebXR widgets on that page.

A very simple configuration could look like this:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-webxr/container-with-cube.jpg" alt="Container (AR) with Cube (AR)"  width="400" >}}

### HTTPS Prerequisite

For WebXR to work, you will have to run the project through HTTPS protocol. The preview can still be seen through HTTP protocol, but the button to start the XR session will be hidden. If you are not able to see this button, this is probably why.

Here is a simple scene without the button to start WebXR:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-webxr/cube-no-webxr-button.jpg" alt="How the page appears without WebXR support"   width="400" >}}

Here is that same scene with the button:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-webxr/cube-webxr-button.jpg" alt="How the page appears with WebXR support"   width="400" >}}

It is not possible to start the experience without the user clicking the button. This is due to the user needing to give permission to have their space taken over by this experience, and not being surprised by this happening.

Depending on which browser you plan to use, you will need to enable the WebXR feature flags. For the Edge browser (for HoloLens 2) and Chrome (for use with Android devices) it should be enabled by default.

For Safari (currently only supports WebXR on the Vision Pro) you can enable WebXR with the following steps:

* Go to Settings
* Select Apps
* Select Safari
* Scroll down and click Advanced
* Scroll down again for Feature Flags
* Enable all feature flags that mention WebXR.

## Container Widgets

Container widgets are widgets which contain other widgets. They allow developers to move multiple widgets as one, as well as copy and paste favorite configurations.

### Container (XR)

This is the widget that must contain all other AR widgets. It starts and stops the experience, and has scene-wide properties. For example, the reflection map for the lighting in the scene can be set here. Only one of these widgets can be used per page.

#### General Tab

Container (XR) has the following properties that can be set in Studio Pro:

* **Camera distance** – The distance in meters from the 3D model. This can be altered to make sure the entire scene is in view.
* **Starting position** – This is the position which is at the center of the preview. Changing this will change the point the camera is focused on. **X** is the left to right axis, **Y** is the up and down axis, and **Z** is the depth axis.
* **Realistic lighting**  
    * **Background color** – Sets the color of the background of the scene. 
    * **Add realistic lighting** – When set to **Yes**, an environment map can be added here. The environment map is what will be reflected on those objects. When set to **No** and **Realistic lighting** is still used on objects, then they will appear black (since the object has nothing to reflect).

### Node (XR)

An empty container widget which can be used to group other widgets. This is useful for when you want to move multiple objects as one, or scale multiple objects as one. It also has a **Billboard rotation** feature, which can be used to have objects rotate to always face the user.

#### General Tab

Node (XR) has the same properties as [3D Object widgets](#3dobject), with the following additions:

* **Billboard rotation** – **None**, **Billboard**, **Billboard X**, or **Billboard Y**. Sets if billboarding should be enabled and on which axis it should occur

### Repeater (XR)

The Repeater (XR) widget allows the user to create one configuration and repeat that a number of times based on a data source.

#### General Tab

* **Data Source** – The data source based on which the objects should be repeated. For example, this could have a list of 5 objects that have a hex color value. Based on this, while only modeling out 1 **Sphere (XR)** object where the color value could be tied to this. Creating 5 **Sphere (XR)** with different colors.

## 3D Object Widgets {#3dobject}

These are widgets that show a 3D Object, either predetermined (like **Cube (XR)**, **Sphere (XR)** and **Square (XR)**) or based on input (**3D Object (XR)** and **Text (XR)**).

### Shared Properties

These properties exist for all 3D Object widgets (**Cube (XR)**, **Sphere (XR)**, **Square (XR)**, **3D Object (XR)**, **Text (XR)**) as well as the **Node (XR)** widget.

#### General Tab

* **Position** – Sets the position of the object in meters. Setting **X** to 1 means the object will be placed 1 meter to the right. **Y** controls the up and down axis. **Z** moves the object front to back.
* **Rotation** – Sets the rotation of the object in degrees (from 0 degrees to 360 degrees) on three axis.
* **Scale** – Sets the scale of the object, this multiplies the size of the object as it is. If the objects is 1 meter wide, setting the **X** to 2 will make the object 2 meters wide.

#### Material Tab

* **Type**
    * **Object** – Only available for **3D Object (XR)**. Selecting this will make the object use the material as present on the 3D Object.
    * **Texture** – Sets a static or dynamic image for this object. This image will then be mapped onto the 3D object.
    * **Color** – Sets a solid color on an object. This should be provided in the #rrggbb format.
* **Opacity** – The transparency of the object. 0 is transparent, while 1 is opaque. We recommend incrementing by .1 when testing to see gradual yet meaningful changes.

* **Lighting**
    * **Type** – The kind of lighting that should be used on this object. **Simple** lighting is more basic looking, but easier to render, leading to better framerates. **Realistic** lighting shows more complex reflections and adds options for the type of material this object is supposed to have:
        * **Roughness** – Takes a value from 0-1, where with 0 the object is smooth as glass, with higher values making it more matte.
        * **Metalness** – Takes a value from 0-1, where 0 will make an object appear more like plastic, with 1 making an object appear metallic.

#### Interaction Tab

All interactions are done through a mesh-like interface around the object. The different types of interaction (scaling, rotating, and position) are all done using this one interface. The different options can be enabled or disabled independently.

* **Dragging**
    * **Dragging** – Determines if the dragging interface is enabled.
    * **Enable dragging** – Controls if the dragging interface should be active at this moment. For example, this could be switched on and off when the user clicks a specific 3D object.
    * **Type** – Sets whether the dragging should be at a fixed distance in front of the user (**Fixed distance**), or if the object should "stick" to the world (**Fixed to world**).
    * **On drag** – An event called when the object is dragged.

* **Pinching**
    * **Scaling interaction** – Determines if the pinching interface is enabled.
    * **Enable scaling interface** – Controls if this interface should be enabled at this moment. This can be connected to a clicking event. For example when a user clicks on an object the interface, then could appear allowing a user to make changes to it.
    * **Enable rotation interface** – Works the same as the scaling interface, but for rotation instead.
    * **Scaling interface color** – The color of that interface. Should be provided in the #rrggbb format.
    * **Scaling interface size** – The size of the object in the interface (in meters).
    * **On scale** – An event called when the object is scaled.

#### Events Tab

* **On click** – An event called when object is clicked.
* **On hover enter** – An event called when the user hovers over object, without clicking it.
* **On hover exit** – An event called when the user stops hovering over an object.

### Specific Widget Properties

#### 3D Object (XR)

Shows 3D object, in gltf or glb formats. Requires a link to a 3D Object to show. 3D Objects can be shown in their original size and material by not altering the **Scale** and setting the **Material** to **Object**. The object will appear in the scale that it was made, meaning that 1 unit will be 1 meter. Units can differ between modeling programs (sometimes a unit is a meter, sometimes a unit is a centimeter, sometimes the modeler does not take actual size into account and only works relatively), so it is good to check that the model is of the size you expect it to be. If it is too large or too small, you can adjust it with the Scale property on this widget.

Apart from the properties also found on the other AR widgets, the **3D Object (XR)** widget has a **URL** property:

* **URL** – The **URL** to the 3D object that should be shown here. Must be in *GLB* or *GLTF* format.

#### Cube (XR), Sphere (XR), Square (XR)

Shows a predetermined object, either a cube, sphere or square. These are quite simple objects to help you quickly create something (eg. use the **Sphere (XR)** in combination with a map of the world to create a globe).

#### Text (XR)

Shows a 3D representation of the current set **Text**, which can be dynamically changed. Due to how this is implemented in the library we are using for these widgets, the object will be completely destroyed and recreated when changing the text so performance does take a hit during this.

The properties of this widgets are the same as other AR widgets, with an extra **Text** property for the actual text this widget should show.
