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
