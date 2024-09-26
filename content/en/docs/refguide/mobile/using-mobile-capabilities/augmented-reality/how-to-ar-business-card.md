---
title: "Create an AR Business Card"
url: /refguide/mobile/using-mobile-capabilities/augmented-reality/how-to-ar-business-card/
weight: 20
description: In this guide you will make an augmented reality business card app.
aliases:
    - /howto/mobile/how-to-ar-business-card/
---

## Introduction

Follow the sections below to build a demo. While doing so, you will become familiar with a whole range of augmented reality (AR) widgets, and see them in action. Upon completing this document, you will end up with an interesting demo that can easily be customized for your own purposes. 

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Install Studio Pro and the latest Make It Native Apps with AR capabilities.
* Download the AR widgets (version 2 or higher) from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/117209).
* Create a new empty page with **Container (AR)** and **ImageTracker (AR)** widgets.
* Add your business card png as the **Image** to the **ImageTracker (AR)**.
* Obtain 3D objects to add to your AR business card (this document uses Twitter and LinkedIn logos).
* Have a PNG of your business card.

Download these widgets:

* **Container (AR)**
* **ImageTracker (AR)**
* **Square (AR)**
* **3D Object (AR)**

When you have completed the prerequisites, your work should look like this:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/BusinessCardRender.png" alt="Result"   width="400"  class="no-border" >}}

## Creating an AR Business Card Demo

For this app you will need to start a new app based on the Blank Native Mobile App, or use another app with the Native Mobile Resources module imported from the Mendix Marketplace. First you will lay a virtual business card over your real business card. You will need the **Square (AR)** widget and the imported PNG of the business card you wish to use.

Ideally you should have several recognizable features on your image, specifically an image with a lot of edges and contrast. The business card you are using in this document possesses these traits:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/BusinessCard.png" alt="Business card"   width="400"  class="no-border" >}}

After you have added your business card as an image, remember to adjust the physical size in **Image Tracker (AR)** to the exact size of your business card. Choose the width (the longest side) of your business card for this. This will probably be around 8.5 centimeters:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/imagetracker-dialogue.png" alt="Image tracker"   width="400"  class="no-border" >}}

Next you will add a virtual image of your business card to overlap the physical business card. To do this, add a
**Square (AR)** widget to your app’s home page. Note we already added a **Container (AR)** and an **ImageTracker(AR)** beforehand:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/square-added.png" alt="Square added"   width="400"  class="no-border" >}}

1. Double-click the **Square (AR)** widget.
1. Select the **Material** tab.
1. Select **Material type** > **Texture**.
1. Select the image of your business card for the **Texture**. This should be the same image as you selected for your **Image Tracker (AR)**. When finished your dialog box will look like this:

    {{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/square-material-dialogue.png" alt="Square dialog"   width="400"  class="no-border" >}}

1. Go back to the **General** tab and fill out the size of your business card. The important sizes are X for the width of your business card and Y for the height.
1. Set **Rotation > X** to *-90* to ensure the virtual image is rotated correctly.

Once this is all set up, run the app and check if it works in the Make It Native app. Here you should see the
virtual business card overlaying your physical card:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/render-only-businesscard.png" alt="Business card"   width="400"  class="no-border" >}}

Next, add a picture of yourself to your virtual business card. Drag another **Square (AR)** widget into
**ImageTracker (AR)** and add a picture of yourself to this. In our case we have used a square image with transparent
edges to make it appear round: 

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/Face.png" alt="Face"   width="400"  class="no-border" >}}

Go to the **General** tab and place it about 8 cm (*0.08,0,0*) to the right of the first image and match the size with the size of our business card image. You should now have this image right next to your business card image.

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/render-businesscard-face.png" alt="render business card"   width="400"  class="no-border" >}}

To finish this business card demo you need something people can click to find out more about your work. For this you will add two social media logos: a Twitter one and a LinkedIn one. You can use any 3D object. 

The following settings correctly place them underneath our business card (since scale can differ between 3D objects, this is not guaranteed to work with all 3D objects):

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/twitter-3d-object.png" alt="twitter 3d object"   width="400"  class="no-border" >}}{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/twitter-3d-object.png" alt="twitter 3d object"   width="400"  class="no-border" >}}

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/linkedin-3d-object.png" alt="linkedin 3d object" width="400" class="no-border" >}}

You can alter the color or texture of the 3D objects within Mendix. Currently, Twitter has a color of #1DA1F2 and LinkedIn has #0A66C2:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/twitter-material-dialogue.png" alt="twitter material"   width="400"  class="no-border" >}}

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/BusinessCardRender.png" alt="Completed"   width="400"  class="no-border" >}}

Now all that is left is to add a nanoflow that opens a URL to the **Events** > **On click functionality**. Create a new nanoflow with the **Open URL** action. Add your Twitter profile URL here:

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/open-url-nanoflow.png" alt="open url nanoflow"   width="400"  class="no-border" >}}

{{< figure src="/attachments/howto/mobile/native-mobile/ar-parent/how-to-ar-business-card/call-url-event-dialogue.png" alt="call url event"   width="400"  class="no-border" >}}

Congratulations, you now have a functioning AR business card demo with custom 3D objects!

## Read More

* [Native Mobile AR](/appstore/modules/native-mobile-ar/)
