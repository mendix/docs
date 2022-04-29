---
title: "Upgrade to a Native Mobile App"
url: /howto/quickstart-part2/
parent: "_index"
weight: 20
description: "Learn the basics of making a native mobile app."
tags: ["microflows", "widgets", "app", "nanoflow", "app development"]
---

## 1 Introduction 

This document is Part 2 of the [Quickstart Guide](/howto/quickstart-guide/). Here you will be adding on to the app created in [Part 1: Design in a Responsive Web Profile](/howto/quickstart-part1/). If you decided to skip Part 1, you can download a copy of its completed app package in order to start this document right away:

{{< figure src="PUT IN DOWNLOADABLE PROJECT LINK HERE" >}}

In this document you will learn to use a native mobile navigation profile. You will create a small native mobile app to take pictures and upload them to the same database so they can be viewed in a browser or in a native app on your mobile device.

Mendix native mobile apps are native mobile apps based on React Native. These apps use native UI elements which means faster performance and advanced features like gesture functionality (swiping, multi-tap, and more), and improved access to device functionalities like geolocation and the camera. Native mobile apps are offline first and only fetch data from the server when programmed to do so.

## 2 Creating a Native Mobile Picture App

Starting in Studio Pro, open the page **Home_Native** by double-clicking it in the App Explorer or by pressing <kbd>CTRL</kbd> + <kbd>G</kbd> to open your **Go to** menu and search for the page. The **Go to** menu is used for quick navigation in the project—for more Mendix shortcuts see [Edit Menu](/refguide/edit-menu/).

{{% alert type="info" %}}
The **Home_Native** page has a different icon than the **Home_Web** page. Mendix uses these icons to help you clearly develop for the right aspect of your app.
{{% /alert %}}

You should see this in Studio Pro:

{{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

The content on the page comes pre-made as a part of the template. To get started, do the following:

1. Delete everything from the page.
1. Add a list view to the page. A list view works like the template grid ( used in [Part 1]((/howto/quickstart-part1/))) except it can scroll, which is better for mobile users.
1. Drag the list view onto the page,
1. Right-click the list view, then click **Select data source**, 
1. Leave the **Type** as **Database**, click **Select** next to **Entity**, and search for the **Picture** entity. 
1. When prompted to automatically fill the contents of the list view, click **No**.

{{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

### 2.1 Creating the User Interface

Next you are going to create the user interface for your native app:

1. Right-click the empty space inside the list view and select **Add building block**.
1. Search for and select the **Image** building block.

Just as in Part 1, you must replace the auto-generated content with our content from the database.

Start by replacing the static image with the image the user uploads to the database:

1. Right-click the **Static Image** viewer and choose **Convert to dynamic image**. 
1. Right-click the image viewer and choose **Select datasource**.
1. Search for your **Picture** entity, select it, and when prompted to automatically fill the contents of the widget click **Yes**.

Our images will now be displayed from the database, but the labels on the page will still be displaying their default text. To fix this, do the following:

1. Double-click the label captioned **Card title** to open its properties.
1. Click the **Edit** button next to **Caption**.
1. In the new window, replace the caption field with a place holder (a number in curly braces starting from 1). 
1.  Then click **Parameter** > **New** to add a new parameter and select the **Title** attribute.

    {{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

1. Repeat the steps for the second label beneath the **Tile** field, this time linking it to the **Description** attribute instead.

Now your existing images are being displayed from the database. Next, you will develop functionality which allows the user to take new pictures with the app and then upload them to the server.

## 3 Using a Nanoflow to Call the Take Picture JSAction

