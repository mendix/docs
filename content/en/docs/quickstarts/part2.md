---
title: "Add a Native Mobile App"
url: /quickstarts/part2/
weight: 20
description: "Learn the basics of making a native mobile app."
tags: ["hello world", "microflows", "widgets", "app", "nanoflow", "app development"]
aliases:
    - /refguide/quickstart-part2/
    - /refguide9/quickstart-part2/
---

## 1 Introduction 

This document is Part 2 of the [Quickstarts](/quickstarts/) for building an app. Here you will be adding on to the app created in [Part 1: Build a Responsive Web App](/quickstarts/part1/). If you decided to skip Part 1, you can [download a copy of its completed app package](https://quickstartguidev1.s3.eu-west-2.amazonaws.com/Quickstart_App.mpk) in order to start this document right away.

In this document you will learn to use a native mobile navigation profile. Apps built in the native mobile profile are typically installed natively on your iOS or Android device (usually via an app store).

### 1.2 Getting to Know Native Mobile

You will create a small native mobile app which adds on to the app made in Part 1. The native app will take pictures and upload them to the same database as before so they can be viewed in a browser or in a native app on your mobile device. You will also use the Make it Native app to test your app on a mobile device.

Mendix native mobile apps are native mobile apps based on React Native. These apps use native UI elements which means faster performance and advanced features like gesture functionality (swiping, multi-tap, and more), and improved access to device functionalities like geolocation and the camera. 

Native mobile apps are offline first and only fetch data from the server when programmed to do so. By completing this guide, you will become acquainted with the following Mendix native mobile concepts:

* [Offline-first design](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/)
* [Data synchronization](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/) between mobile devices and web apps
* [Nanoflows](/refguide/nanoflows/): the native mobile JavaScript equivalent to microflows)
* Using custom [JavaScript actions](/refguide/javascript-actions/) in your nanoflows

## 2 Prerequisites

Before starting this guide, make sure you have completed the following prerequisite:

* Read through [Part 1: Build a Responsive Web App](/quickstarts/part1/)
* Download the [Make It Native 9](/refguide/getting-the-make-it-native-app/) app on your mobile device
* If you are working on a Mac, please complete [Configuring Parallels](/refguide/using-mendix-studio-pro-on-a-mac/) to install Studio Pro on your Mac

### 2.1 Downloading the Make It Native 9 App

The [Make it Native 9](/refguide/getting-the-make-it-native-app/) mobile app is available for Android and iOS devices. Once installed, the app lets you quickly test your native mobile app as you develop it. 

Specifically, the Make it Native 9 app connects to your local development machine’s running copy of your app and then displays your app inside its mobile testing environment. This lets you make changes to your app on your development machine, then instantly see those changes in the mobile app.

## 3 Creating a Native Mobile Picture App

Starting in Studio Pro, open the page **Home_Native** by double-clicking it in the App Explorer or by pressing <kbd>CTRL</kbd> + <kbd>G</kbd> to open your **Go to** menu and search for the page. The **Go to** menu is used for quick navigation in the app—for more Mendix shortcuts see [Edit Menu](/refguide/edit-menu/).

{{% alert type="info" %}}
The **Home_Native** page has a different icon than the **Home_Web** page. Mendix uses these icons to help you develop the right aspect of your app.
{{% /alert %}}

You should see this in Studio Pro:

{{< figure src="/attachments/quickstarts/part2/studio-pro-check.png" width="450px" alt="What you should see">}}

The content on the page comes pre-made as a part of the template. To get started, do the following:

1. Delete everything from the page.
1. Add a **List view** to the page via the Toolbox. A list view works like the template grid (used in [Part 1](/quickstarts/part1/)) except it can scroll, which is better for mobile users.
1. Right-click the list view, then click **Select data source**, 
1. Leave the **Type** as **Database**, click **Select** next to **Entity**, and search for the **Picture** entity. 
1. When prompted to automatically fill the contents of the list view, click **No**:

    {{< figure src="/attachments/quickstarts/part2/list-view-fill.png" width="450px" alt="List view">}}

### 3.1 Creating the User Interface

Next you are going to create the user interface for your native app:

1. Right-click the empty space inside the list view and select **Add building block**.
1. Search for and select the **Image** building block under **Cards**.

Just as in [Part 1](/quickstarts/part1/), you must replace the auto-generated content with your content from the database.

Start by replacing the static image with the image the user uploads to the database:

1. Right-click the **Static Image** viewer and choose **Convert to dynamic image**. 
1. Right-click the image viewer and choose **Select datasource**.
1. Search for your **Picture** entity, select it, and when prompted to automatically fill the contents of the widget click **Yes**.

Your images will now be displayed from the database, but the labels on the page will still be displaying their default text. To fix this, do the following:

1. Double-click the label captioned **Card title** to open its properties.
1. Click the **Edit** button next to **Caption**.
1. In the new window, replace the caption field with the place holder *{1}*. 
1. Then click **Parameter** > **New** to add a new parameter and select the **Title** attribute:

    {{< figure src="/attachments/quickstarts/part2/add-title-param.png" width="450px" alt="Configure edit button">}}

1. Repeat the steps for the second label beneath the **Tile** field, this time linking it to the **Description** attribute instead.

Now your existing images are being displayed from the database. Next, you will develop functionality which allows the user to take new pictures with the app and then upload them to the server.

## 4 Using a Nanoflow to Call the Take Picture JSAction

Your app needs a button which allows the user to take a picture. Instead of a regular button, you can use a floating action button optimized for mobile users:

1. Drag the **Floating action button** from the **Toolbox** onto the page:

    {{< figure src="/attachments/quickstarts/part2/floating-action-button.png" width="450px" alt="Floating action button">}}

    The location is managed in the widget's properties, so it does not matter where the widget is placed on the page. You can place it above the list view and still have it display in the bottom-right corner by configuring the widget correctly.

1. Double-click the button to open its properties. 
1. Select an **Icon** for the button, then search for the **camera** icon. 
1. Set the position to the **right** and **bottom** side of the page. 
1. Set the on click action is set to **Call a nanoflow**.
1. Click **Nanoflow** > **Select** then create a new nanoflow called **ACT_TakeNewPicture**:

    {{< figure src="/attachments/quickstarts/part2/make-pic-nano.png" width="450px" alt="New nanoflow">}}

[Nanoflows](/refguide/nanoflows/) are the native mobile equivalent of microflows, but with several key differences. Nanoflows are offline-first, meaning they can execute without an online data connection. Therefore certain functionality like calling a REST API, which is available in microflows, is not in nanoflows. This is because nanoflows are based on JavaScript and execute on mobile devices instead of the server. 

Nanoflows also interact with the database on the user's mobile device, which is a copy of the server's database. All database transactions need to be synchronized from the device to the server in order for the data to reflect online.

As you look at your new **ACT_TakeNewPicture** nanoflow, do the following:

1. Drag a **Create object** action from the **Toolbox** into the nanoflow. 
1. Double-click the create object action and select the entity type as **Picture**, then click **OK**. 
1. Drag a **Take Picture** action from the **Toolbox** into the nanoflow after the create object activity:

    {{< figure src="/attachments/quickstarts/part2/add-activities.png" width="450px" alt="Take picture action">}}

1. Configure the **Take Picture** action by double-clicking it and configuring the properties like this:
    1. Picture: $NewPicture
    1. Picture source: camera
    1. Picture quality: original
    1. Maximum width: empty
    1. Maximum height: empty
    1. Use return value: yes
    1. Variable name: PictureTaken

    {{< figure src="/attachments/quickstarts/part2/config-take-pic.png" width="450px" alt="Configure take picture">}}

Finally you need to create a page in which the user can view and edit their new picture:

1. Add a **Show page** action to the nanoflow. 
1. Open the action's properties:
    1. Select the **Object to pass** as the **$NewPicture entity**. 
    1. Click **Page** > **Select** and choose to create a new page. 
    1. Give the page the **Page name** *Picture_NewEdit_Native* at the top of the screen.
    1. Change the profile type to **Native mobile** at the top of the screen.
    1. Select the **Edit with Dataview** template.

You should see the new page:

{{< figure src="/attachments/quickstarts/part2/native-pic-page.png" width="450px" alt="New page">}}

Just like before, you need to validate that the user has entered the title and description. Instead of validating that data in a nanoflow, you can simply configure validation on the text boxes themselves:

1. Double-click the **Title** field to open its properties. 
1. Find **Validation Type** at the bottom. 
1. Set **Validation Type** to **Required** and provide the message *Please provide a title for this picture*.
1. Repeat this for the **Description** field, and provide the message *Please provide a description for this picture*.

The final thing to do is ensure all the data captured by the user is synchronized from the device to the server. You can do this quickly by editing the properties of this page's save button: 

1. Double-click the **Save** button. 
1. Set **Auto-synchronize** to **Yes**:

    {{< figure src="/attachments/quickstarts/part2/edit-button-props.png" width="450px" alt="Auto sync set to yes">}}

All done! You can now run your app and test all the features you have built. To test your native mobile app without creating a deployable package, do the following:

1. Open the Make it Native app on your mobile device.
1. Click the drop-down menu in Studio Pro and select **View app on your device**.
1. Click the **View Native Mobile App** tab.
1. Scan the QR code with the Make it Native app on your mobile device to begin testing (Mac users: be sure to use forward ports 8080/8083 as [explained here](/refguide/using-mendix-studio-pro-on-a-mac/)):

    {{< figure src="/attachments/quickstarts/part2/min-qr.png" width="300px" alt="Scan QR code">}}

This will automatically begin testing. If you have issues, see [this troubleshooting guide](/refguide/mobile/getting-started-with-mobile/prerequisites/) for troubleshooting information.

When we tested our native mobile photo app, we were lucky to sight a stegosaurus nearby:

{{< figure src="/attachments/quickstarts/part2/mobile-pic-1.png" width="200px" alt="stegosaurus 1">}}
{{< figure src="/attachments/quickstarts/part2/mobile-pic-2.png" width="200px" alt="stegosaurus 2">}}
{{< figure src="/attachments/quickstarts/part2/mobile-pic-3.png" width="200px" alt="stegosaurus 3">}}

After taking a photo with your native mobile app and tapping the **Save** button, you should be able to see your new pictures automatically appear in the responsive profile after reloading the page in your browser:

{{< figure src="/attachments/quickstarts/part2/responsive-app.png" width="450px" alt="Browser view">}}

Congratulations on successfully completing Part 2 of the quickstarts! You are definitely on your way to succeed with the Mendix Platform.

For more information on building and deploying apps with Mendix, see [Building Native Apps](/refguide/mobile/distributing-mobile-apps/building-native-apps/). Put simply, Mendix lets you [build an app for distribution](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) and get it running on a native device. After you develop further, you can [debug native app issues](/refguide/mobile/distributing-mobile-apps/native-debug/) to improve your users' experience. Then, you can add [custom fonts](/refguide/mobile/designing-mobile-user-interfaces/images-icons-and-fonts/) to make your app feel more like your brand. And if you ever need help, we have [troubleshooting help](/refguide/mobile/getting-started-with-mobile/prerequisites/) for you just in case.

## 5 Read More

* [Studio Pro Overview](/refguide/studio-pro-overview/) – describes Studio Pro tabs, menus, and shortcut keys
* [Mendix Best Practices for Development](/refguide/dev-best-practices/) – a reference for adopting consistent naming and modeling conventions while developing your Mendix apps
* [Starting with App from a Spreadsheet](/refguide/app-from-spreadsheet/) – describes importing a Microsoft Excel spreadsheet and building an app using your data
* [Mendix Academy Crash Course](https://academy.mendix.com/link/paths/82/Crash-Course) – the course we recommend for new Mendix users who are also experienced developers
