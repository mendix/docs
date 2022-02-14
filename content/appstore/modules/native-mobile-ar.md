---
title: "Native Mobile AR"
category: "Modules"
description: "Describes the Native Mobile AR module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "native mobile resources", "platform support"]
---

## 1 Introduction

The [Native Mobile AR](https://marketplace.mendix.com/link/component/117209) module contains the following widgets for building AR experience with native mobile:

* 3D Object (AR) - Beta
* Container (AR) - Beta
* Cube (AR) - Beta
* ImageTracker (AR) - Beta
* Node (AR) - Beta
* PlaneSelector (AR) - Beta
* Safe area view
* Sphere (AR) - Beta
* Square (AR) - Beta
* Text (AR) - Beta

## 2 Installation

The Native Mobile AR module is also part of the [AR Starter App](https://marketplace.mendix.com/link/component/117211) that contains examples. If you need to install this module to a different app, follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content) to import this module into your app.

After the Native Mobile AR module is installed, you can find the widgets it contains in the **Toolbox**.

## 3 Configuration

### 3.1 3D Object (AR) - Beta

#### 3.1.1 General Tab

* **Source type**
* **3D object location** – the URL that leads to the 3D object, with OBJ, GLB, and GLTF file types supported
* **Position type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z** 
* **Rotation type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**
* **Scale type**
    * **Expression**
    * **Attribute**
    * **X**
    * **Y**
    * **Z**

#### 3.1.2 Material Tab

* **Enable custom material**
  * **Yes** – if selected, your custom material settings below override the model materials
    * **Material type**
      * **Texture** – if selected, the material has texture
      * **Color** – if selected, the material has a consistent color
      * **Lighting type**
        * **Phong**
        * **Blinn**
        * **Lambert**
        * **Constant**
        * **PBR**
          * **Roughness** – sets the roughness of object material, with 1 giving objects a rough surface and 0 giving objects a shiny surface
          * **Metalness** – sets the meatless of object material, with 1 for objects that are completely metal and 0 for objects that are more plastic
      * **Opacity** – the opacity of the object, with 1 being fully opaque and 0 fully transparent 
  * **No** – if selected, customer material settings are disabled

#### 3.2.3 Interaction Tab

* **Enable physics**
* **Enable dragging**
* **Enable pinching**

#### 3.2.4 Events Tab

* **On click** – defines the event that is called when the object is clicked
* **On hover** – defines the event that is called when the object is in the middle of the screen

### 3.2 Container (AR) - Beta

#### 3.2.1 General Tab

* **Plane Detection**
  * **Horizontal** – if selected, horizontal planes are recognized
  * **Vertical** – if selected, vertical planes are recognized
* **Use PBR**
  * **Yes** – if selected, PBR is enabled
  * **No** – if selected, PRB is disabled

### 3.3 Cube (AR) - Beta

#### 3.3.1 General Tab

* **Position type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**
* **Rotation type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**
* **Scale type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**

#### 3.3.2 Material Tab

* **Material type**
* **Color**
* **Opacity**
* **Lighting type**
  * **Phong**
  * **Blinn**
  * **Lambert**
  * **Constant**
  * **PBR**
    * **Roughness** – sets the roughness of object material, with 1 giving objects a rough surface and 0 giving objects a shiny surface
    * **Metalness** – sets the meatless of object material, with 1 for objects that are completely metal and 0 for objects that are more plastic


#### 3.3.3 Interaction Tab

* **Enable physics**
  * **Yes** – if selected, the following items become available:
    * **Physics type**
      * **Kinematic**
      * **Dynamic**
        * **Use gravity** – if you select Yes, gravity is added to this object, which makes the object fall down
      * **Static**
    * **On collision** – defines the event that is called when the object collides with other objects
      {{% alert type="info" %}}This depends on **Physics type**. If **Physics type** is **Kinematic** or **Static**, the event only happens when the object collides with **Dynamic** type.{{% /alert %}}
  * **No** – if selected, physics is disabled
* **Enable dragging**
  * **Yes** – if selected, the following items become available:
    * **Dragging type**
      {{% alert type="info" %}}Objects should only be draggle if they are not embedded in an image tracker.{{% /alert %}}
      * **Fixed distance**
      * **Fixed to world**

    * **On drag** – defines the event that is called when the object is dragged 

  * **No** – if selected, dragging is disabled

* **Enable pinching**
  * **Yes** – if selected, the following items become available:
    * **On pinch** – defines the event that is called when a pinch gesture is done on an object
  * **No** – if selected, pinching is disabled


#### 3.3.4 Events Tab

* **On click** – defines the event that is called when the object is clicked
* **On hover** – defines the event that is called when the object is in the middle of the screen

### 3.4 ImageTracker (AR) - Beta

The image tracker is an image your AR can track and put AR effects on top of. Most images can serve as a tracker, provided they have enough contrast. Complex images make for the best tracker, because they are easier for your device’s camera to track. You can configure the **ImageTracker (AR) - Beta** widget by double-clicking the widget and change the settings.

#### 3.4.1 General Tab

* **Image** – the image will be the foundation of your AR application and is what your camera will track.
* **Orientation** - the orientation that objects embedded in this widget should have
  * **Up** –  objects will appear on top of the image tracker
  * **Down** – objects will appear below the image tracker
  * **Left** – objects will appear on the left of the image tracker
  * **Right** – objects will appear on the right of the image tracker
* **Physical marker size** – the real-life size of the marker in meters, which is used to calculate the depth the AR object should be placed at
* **Pause updates**
  * Yes – **ImageTracker (AR)** stops updating after it finds the tracker
  * No –  **ImageTracker (AR)** keeps updating after it finds the tracker, which is useful if you expect your tracker to move

#### 3.4.2 Events Tab

* **On found** – defines the event that is called when the image is found
* **On lost** – defines the event that is called when the image is lost

### 3.5 Node (AR) - Beta

#### 3.5.1 General Tab

* **Billboard rotation**
  * **None** – if selected, billboard option is disabled
  * **Billboard** – if selected, billboard is enabled and embedded widgets face the user on all or axes
  * **Billboard X** – if selected, billboard is enabled and embedded widgets face the user the X axis
  * **Billboard Y** – if selected, billboard is enabled and embedded widgets face the user the Y axis
* **Position type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**
* **Rotation type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**
* **Scale type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**

#### 3.5.2 Interaction Tab

* **Enable physics**
  * **Yes** – if selected, the following items become available:
    * **Physics type**
      * **Kinematic**
      * **Dynamic**
        * **Use gravity** – if you select Yes, gravity is added to this object, which makes the object fall down
      * **Static**
    * **On collision** – defines the event that is called when the object collides with other objects
      {{% alert type="info" %}}This depends on **Physics type**. If **Physics type** is **Kinematic** or **Static**, the event only happens when the object collides with **Dynamic** type.{{% /alert %}}
  * **No** – if selected, physics is disabled
* **Enable dragging**
  * **Yes** – if selected, the following items become available:
    * **Dragging type**
      {{% alert type="info" %}}Objects should only be draggle if they are not embedded in an image tracker.{{% /alert %}}
      * **Fixed distance**
      * **Fixed to world**

    * **On drag** – defines the event that is called when the object is dragged 

  * **No** – if selected, dragging is disabled
* **Enable pinching**
  * **Yes** – if selected, the following items become available:
    * **On pinch** – defines the event that is called when a pinch gesture is done on an object
  * **No** – if selected, pinching is disabled

#### 3.5.3 Event Tab

* **On click** – defines the event that is called when the object is clicked
* **On hover** – defines the event that is called when the object is in the middle of the screen

### 3.6 PlaneSelector (AR) - Beta

#### 3.6.1 General Tab

* **Minimum size** – the minimum size of the spot for AR objects in meters

* **Plane Detection**

  * **Horizontal** – if selected, horizontal planes are recognized

  * **Vertical** – if selected, vertical planes are recognized

#### 3.6.2 Material

* **Material type**

  * **Texture** – if selected, the material has texture

  * **Color** – if selected, the material has a consistent color

* **Opacity** – the opacity of the object, with 1 being fully opaque and 0 fully transparent 

### 3.7 Safe Area View

### 3.8 Sphere (AR) - Beta

#### 3.8.1 General Tab

* **Position type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z** 
* **Rotation type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**
* **Scale type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**

#### 3.8.2 Material Tab

* **Material type**
  
  * **Texture** – if selected, the material has texture
  * **Color** – if selected, the material has a consistent color
* **Opacity** – the opacity of the object, with 1 being fully opaque and 0 fully transparent 
* **Lighting type**
  * **Phong**
  * **Blinn**
  * **Lambert**
  * **Constant**
  * **PBR**
    * **Roughness** – sets the roughness of object material, with 1 giving objects a rough surface and 0 giving objects a shiny surface
    * **Metalness** – sets the meatless of object material, with 1 for objects that are completely metal and 0 for objects that are more plastic
  

#### 3.2.3 Interaction Tab

* **Enable physics**
  * **Yes** – if selected, the following items become available:
    * **Physics type**
      * **Kinematic**
      * **Dynamic**
        * **Use gravity** – if you select Yes, gravity is added to this object, which makes the object fall down
      * **Static**
    * **On collision** – defines the event that is called when the object collides with other objects
      {{% alert type="info" %}}This depends on **Physics type**. If **Physics type** is **Kinematic** or **Static**, the event only happens when the object collides with **Dynamic** type.{{% /alert %}}
  * **No** – if selected, physics is disabled
* **Enable dragging**
  * **Yes** – if selected, the following items become available:
    * **Dragging type**
      {{% alert type="info" %}}Objects should only be draggle if they are not embedded in an image tracker.{{% /alert %}}
      * **Fixed distance**
      * **Fixed to world**

    * **On drag** – defines the event that is called when the object is dragged 

  * **No** – if selected, dragging is disabled
* **Enable pinching**
  * **Yes** – if selected, the following items become available:
    * **On pinch** – defines the event that is called when a pinch gesture is done on an object
  * **No** – if selected, pinching is disabled

#### 3.8.4 Event Tab

* **On click** – defines the event that is called when the object is clicked
* **On hover** – defines the event that is called when the object is in the middle of the screen

### 3.9 Square (AR) - Beta

#### 3.9.1 General Tab

* **Position type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z** 
* **Rotation type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**
* **Scale type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**

#### 3.9.2 Material Tab

* **Material type**

  * **Texture** – if selected, the material has texture
  * **Color** – if selected, the material has a consistent color
* **Opacity** – the opacity of the object, with 1 being fully opaque and 0 fully transparent 
* **Lighting type**
  * **Phong**
  * **Blinn**
  * **Lambert**
  * **Constant**
  * **PBR**
    * **Roughness** – sets the roughness of object material, with 1 giving objects a rough surface and 0 giving objects a shiny surface
    * **Metalness** – sets the meatless of object material, with 1 for objects that are completely metal and 0 for objects that are more plastic

* **Material type**
  * **Texture** – if selected, the material has texture
  * **Color** – if selected, the material has a consistent color
* **Opacity** – the opacity of the object, with 1 being fully opaque and 0 fully transparent 
* **Lighting type**
  * **Phong**
  * **Blinn**
  * **Lambert**
  * **Constant**
  * **PBR**
    * **Roughness** – sets the roughness of object material, with 1 giving objects a rough surface and 0 giving objects a shiny surface
    * **Metalness** – sets the meatless of object material, with 1 for objects that are completely metal and 0 for objects that are more plastic

#### 3.2.3 Interaction Tab

* **Enable physics**
  * **Yes** – if selected, the following items become available:
    * **Physics type**
      * **Kinematic**
      * **Dynamic**
        * **Use gravity** – if you select Yes, gravity is added to this object, which makes the object fall down
      * **Static**
    * **On collision** – defines the event that is called when the object collides with other objects
      {{% alert type="info" %}}This depends on **Physics type**. If **Physics type** is **Kinematic** or **Static**, the event only happens when the object collides with **Dynamic** type.{{% /alert %}}
  * **No** – if selected, physics is disabled
* **Enable dragging**
  * **Yes** – if selected, the following items become available:
    * **Dragging type**
      {{% alert type="info" %}}Objects should only be draggle if they are not embedded in an image tracker.{{% /alert %}}
      * **Fixed distance**
      * **Fixed to world**

    * **On drag** – defines the event that is called when the object is dragged 

  * **No** – if selected, dragging is disabled
* **Enable pinching**
  * **Yes** – if selected, the following items become available:
    * **On pinch** – defines the event that is called when a pinch gesture is done on an object
  * **No** – if selected, pinching is disabled

#### 3.8.4 Event Tab

* **On click** – defines the event that is called when the object is clicked
* **On hover** – defines the event that is called when the object is in the middle of the screen

### 3.10 Text (AR) - Beta

#### 3.10.1 General Tab

* **Position type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z** 
* **Rotation type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**
  * **Z**
* **Scale type**
  * **Expression**
  * **Attribute**
  * **X**
  * **Y**

#### 3.10.2 Text Tab

* **Caption**
* **Font size**
* **Text color**
* **Extrusion depth**
* **Show text area**
* **Text alignment**
* **Text alignment vertical**

#### 3.10.3 Events Tab

* **On click** – defines the event that is called when the text is clicked

## 4 Read More

* [Create An AR Business Card](/howto/mobile/how-to-ar-business-card)
* [Get Started with AR](/howto/mobile/how-to-ar-simple-cube)
