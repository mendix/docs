---
title: "Native Mobile AR"
url: /appstore/modules/native-mobile-ar/
category: "Modules"
description: "Describes the Native Mobile AR module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "native mobile resources", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Native Mobile AR](https://marketplace.mendix.com/link/component/117209) module contains the widgets for building AR experience with native mobile. This module is also part of the [AR Starter App](https://marketplace.mendix.com/link/component/117211) that contains examples.

This document will place the Augmented Reality (AR) widgets into context, as well as explain how they can be used
to create AR experiences. The following terms will be used frequently:

* Augmented reality (AR): adding virtual objects to the real world, through the mobile phone camera view
* AR scene: the place where all objects are placed in
* Billboard: describes the rotation behavior of an object, where it will always face the camera
* Origin: the starting position, specifically (0,0,0)

## 2 Overview of AR Widgets

There are seven total AR widgets. Some are [structure widgets](#structure-widgets), while others are [visual widgets](#visual-widgets):

| Structure Widgets  | Visual Widgets |
| ------------------ | -------------- |
| Container (AR)     | 3D Object (AR) |
| Image Tracker (AR) | Cube (AR)      |
| Node (AR)          | Sphere (AR)    |
|                    | Square (AR)    |

## 3 Structure Widgets {#structure-widgets}

These are the AR widgets that can contain other widgets:

* Container (AR)
* Image Tracker (AR)
* Node (AR)

These widgets do not necessarily add something visual to the AR scene. Instead, they provide functionality or allow you to group other widgets. Structure  widgets function as new starting points for the widgets embedded in them. When you start an AR app, the location of your phone serves as the origin.

### 3.1 Container (AR)

**Container (AR)** starts the AR camera view, and contains all other AR widgets. This widget is the start of every AR app.

### 3.2 Image Tracker (AR)

**ImageTracker (AR)** takes an image to track. When this image is found in the camera view, it becomes the new origin of
every AR widget that is embedded in it. For example, if you use an **ImageTracker (AR)** to recognize an image, and put a
**Cube (AR)** in it, the cube will start in the exact middle of your image:

{{< figure src="/attachments/appstore/modules/native-mobile-ar/scale-one.jpg" alt="Cube"   width="300"  >}}

### 3.3 Node (AR)

**Node (AR)** can help group other widgets. Everything embedded in a **Node (AR)** can be oriented with fixed distances and rotations from each other. **Node (AR)** also has a feature that can make the objects in it 'billboard' to the camera, which is useful for UI like elements. To see an example of this, check **AR-Examples** > **Car Color Picker** and note the the spheres above the car.

## 4 Visual widgets {#visual-widgets}

Visual widgets are widgets that add a virtual object to the scene.

### 4.1 Cube (AR)

{{< figure src="/attachments/appstore/modules/native-mobile-ar/Cube.gif" alt="Cube" >}}

### 4.2 Sphere (AR)

{{< figure src="/attachments/appstore/modules/native-mobile-ar/Sphere.gif" alt="Sphere" >}}

### 4.3 Square (AR)

{{< figure src="/attachments/appstore/modules/native-mobile-ar/Square.gif" alt="Square" >}}

### 4.4 3D Object (AR)

{{< figure src="/attachments/appstore/modules/native-mobile-ar/3DObject.gif" alt="3DObject" >}}

Beyond using simple 3D objects, there are also ways to add more complex and custom objects to your scene. The 3D object widget takes a URL. There are currently 3 types supported: *.obj*, *.gltf*, and *.glb*. Each type has its own benefits. 

## 5 Common Properties

All AR widgets share these properties:

* Position
* Rotation
* Scale
* Material
* Interaction
* Events

### 5.1 Position

**Position** describes where an object should be. In AR, position can be a bit confusing. This is why most positioning is relative to a parent node.

This means that the origin of (0,0,0) is in the middle of either the **ImageTracker (AR)**, or (0,0,0) is exactly where the phone was when the user started their AR session in their space. 

It is possible to set a position on visual widgets that is not relative by adding the widget directly into the **Container (AR)**. The 0,0,0 position is then exactly where the camera starts at the beginning of the scene. After the scene has started, the position will not move along with the camera anymore.

### 5.2 Rotation

**Rotation** can be used to turn an object on three different axes. When using rotation for custom 3D objects it will turn around the pivot point of the 3D file — the center of the object is not automatically selected.

### 5.3 Scale

**Scale** is used for setting the size of objects. Widgets that have a set object (**Cube (AR)**, **Sphere (AR)**, or **Square (AR)**) will have a size of 1 or 2 meters. Objects that are added through the 3D Object widget might not conform to that standard unless they are correctly exported with the 1 unit = 1 meter scale. Without that standard scale, objects added with the 3D Object widget can be much larger or smaller than what the scale is set to.

### 5.4 Material

The **Material** tab sets things like color and also the realism of the object that has to be rendered. For example, setting the **Lighting Type** mode to PBR will enable physically-based rendering (do not forget to set an HDR image as the reflection map and light source in the **Container (AR)**).

**Material** configurations actually render a 3D element in the camera view. **Cube (AR)**, **Sphere (AR)**, and **Square (AR)** each render a simple 3D object. Only the **Square (AR)** widget can sometimes be invisible from one side. The simple visual widgets come with a way to customize them through scale and material. A material for a 3D object describes what it should look like — think of it like styling. You can add a texture (image), color, different lighting. The only difference between these objects is in appearance — the configuration is the same on each widget.

### 5.5 Interaction

Interaction is used for all actions your 3D objects can do that interact with the environment or the user.

#### 5.5.1 Dragging

By enabling dragging users can move this object around in their space. The dragging type allows users to either have the
object at the same distance when they are dragging it. Effectively this means the object is 'stuck' to the phone while
they move it around. By changing the type to fixed to world, the object will now be stuck to floors and walls while the
user drags it around.

#### 5.5.2 Pinching

By enabling pinching, and selecting pinch to scale, you allow the user to scale the object through the pinching gesture.

### 5.6 Events

Events can be used to give feedback to the user, for example when they've tapped on an object. 

#### 5.6.1 On click

This event is called when the object is clicked/tapped by a user. 

#### 5.6.2 On hover enter

This is called when the object is in the center of the screen. 

#### 5.6.3 On hover exit

This event is called when the object leaves the center of the screen.

## 6 Read More

* [Augmented Reality](/refguide/mobile/using-mobile-capabilities/augmented-reality/)
