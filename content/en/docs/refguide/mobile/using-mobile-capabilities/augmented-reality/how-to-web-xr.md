---
title: "Get Started with WebXR"
url: /refguide/mobile/using-mobile-capabilities/augmented-reality/how-to-web-xr-quickstart/
weight: 10
description: Tutorials for setting up and using XR in Mendix Studio Pro.
aliases:
  - /howto/mobile/how-to-web-xr-quickstart/
---

## 1 Introduction

The following document will describe how to get started using WebXR technology with Mendix.
In this guide we'll go over what WebXR is in a nutshell, what widgets are available and how to configure them.

## 2 Prerequisites {#prerecs}

The most important prerequisite is that you'll have to run the project through the HTTPS protocol for WebXR to work. The preview can still be seen through the normal HTTP protocol, but the button to start the XR session will be hidden. If you're not able to see this button, this is probably why.

Here is a simple scene without the button to start WebXR:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-webxr/cube-no-webxr-button.jpg" alt="How the page appears without WebXR support"   width="400"  >}}

Here is that same scene with that button:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-webxr/cube-webxr-button.jpg" alt="How the page appears with WebXR support"   width="400"  >}}

Currently it's not possible to start the experience without the user clicking the button. This is due to the user needing to give permission to have their space taken over by this experience, and not being surprised by this happening.
Depending on which browser you plan to use, you'll need to enable the WebXR feature flags.

These are all requirements set by the WebXR standard, which is the underlying technology enabling the features in these widgets.
While the application starts in a regular web browser, it's possible to start an immersive experience that's indistinguishable from native implementations. However, it must be said that not all native features are available for WebXR. For example, positioning will not be saved between sessions. Meaning that if you place an object in a room in an immersive experience, it will not be there again when you come back to it in a later session. More info about WebXR: https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API

## 3 Current widgets

Currently there are 9 WebXR widgets. They are very similar to the AR widgets available for Native Mobile (LINK TO NATIVE MOBILE). While based on the same technology, they are different from the Native Mobile widgets in that they can also be used for VR (Virtual Reality) in addition to AR (Augmented Reality) and don't use native functionality but rely on the WebXR standard.
Next, we'll go over all the currently available widgets. These are based on the native widgets, and share a lot of functionality. More on the Native AR widgets [here](/refguide/mobile/using-mobile-capabilities/augmented-reality/_index.md/).

### Container (AR)

This is the widgets that contains all other AR widgets, it is what can start and stop the experience.

- **Camera distance** - The distance in meters from the 3D model, this can be altered to make sure the entire scene is in view.
- **Starting position** - This is the position which is at the center of the preview, changing this will change the point the camera is focussed on. **X** is the left to right axis, **Y** is the up and down axis and **Z** is the depth axis.
- **Realistic lighting** - When an object uses **Realistic Lighting**, an environment map can be added here. The environment map is what will be reflected on those objects.

### 3D Object (AR)

Shows 3D object, in gltf or glb formats. Requires a link to a 3D Object to show. 3D Objects can be shown in their original size and material by not altering the **Scale** and setting the **Material** to **Object**. The object will appear in the scale that it was made, meaning that 1 unit will be 1 meter. Units can differ between modeling programs (sometimes a unit is a meter, sometimes a unit is a centimeter, sometimes the modeler doesn't take actual size into account and only works relatively), so it's good to check that the model is of the size you expect it to be. If it's too large or too small, you can adjust it with the Scale property on this widget.
Apart from the properties also found on the other AR widgets, the **3D Object (AR)** widget has a **URL** property:

- **URL** - the **URL** to the 3D object that should be shown here. Has to be either of the glb or gltf format.

### Cube (AR), Sphere (AR), Square (AR)

Shows a predetermined object, either a cube, sphere or square. These are quite simple objects to help you quickly create something (eg. use the **Sphere (AR)** in combination with a map of the world to create a globe).
The properties on these widgets are mostly the same as their [native counterparts](/refguide/mobile/using-mobile-capabilities/augmented-reality/how-to-ar-simple-cube.md/).

### Text (AR)

Shows a 3D representation of the current set **Text**, which can be dynamically changed. Due to how this is implemented in the library we're using for these widgets, the object will be completely destroyed and recreated when changing the text so performance does take a hit during this.
The properties of this widgets are the same as other AR widgets, with an extra **Text** property for the actual text this widget should show.

### Node (AR)

An empty container widget which can be used to group other widgets. This is useful for when you want to move multiple objects as one, or scale multiple objects as one. It also has a **Billboard rotation** feature, which can be used to have objects rotate to always face the user.

### Repeater (AR)

Shows nothing on it's own, this is a container widget which takes a **Data source** and can repeat other AR widgets based on that **Data source**.

## 4 Widget usage

These widgets do require a certain setup to work, a page can only have 1 **Container (AR)** widget. In this container widget you can put any number of the other AR widgets.

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-webxr/container-with-cube.jpg" alt="Container (AR) with Cube (AR)"  width="400"  >}}
