---
title: "Adding a Native Mobile App"
url: /quickstarts/native-mobile-app/
weight: 20
description: "Learn the basics of making a native mobile app."
aliases:
    - /quickstarts/part2/
    - /refguide/quickstart-part2/
    - /refguide9/quickstart-part2/
---

## Introduction 

In this quick start tutorial, you will add on to the app you created in [Building a Responsive Web App](/quickstarts/responsive-web-app/). If you decided to skip that tutorial, you can [download](https://quickstartguidev1.s3.eu-west-2.amazonaws.com/Quickstart_App.mpk) a copy of its completed app package so that you can start this tutorial right away.

In this tutorial, you will learn to use a native mobile navigation profile. Apps built in the native mobile profile are typically installed natively on your iOS or Android device (usually via an app store). The native app you create will take pictures and upload them to the same database as configured in the [Creating Your App’s Domain Model](/quickstarts/responsive-web-app/#domain-model) section of *Building a Responsive Web App*. This will enable viewing the pictures in a browser or native app on a mobile device. You will also use the [Make it Native](/releasenotes/mobile/make-it-native-10/) app to test your app on a mobile device.

### Getting to Know Mendix Native Mobile

Mendix native mobile apps are based on React Native. These apps use native UI elements, which means faster performance, advanced features like gesture functionality (swiping, multi-tap, and more), and improved access to device functionalities like geolocation and the camera. 

Native mobile apps are offline first and only fetch data from the server when programmed to do so. This tutorial will familiarize you with the following Mendix native mobile concepts:

* [Offline-first design](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/)
* [Data synchronization](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/) between mobile devices and web apps
* [Nanoflows](/refguide/nanoflows/), which are the native mobile JavaScript equivalent to microflows
* Using custom [JavaScript actions](/refguide/javascript-actions/) in your nanoflows

For more information, see [Building Native Apps](/refguide/mobile/distributing-mobile-apps/building-native-apps/). 

In summary, Mendix lets you [build an app for distribution](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) and get it running on a native device. As you develop the app further, you can [debug native app issues](/refguide/mobile/distributing-mobile-apps/native-debug/) to improve the user experience. You can also add [custom fonts](/refguide/mobile/designing-mobile-user-interfaces/images-icons-and-fonts/) to make your app feel more like your brand. And if you need help, Mendix provides [troubleshooting help](/refguide/mobile/getting-started-with-mobile/prerequisites/) for you just in case..

## Prerequisites

Before starting this tutorial, make sure you have completed the following prerequisites:

* Read through [Building a Responsive Web App](/quickstarts/responsive-web-app/)
* Download the [Make It Native 10](/refguide/getting-the-make-it-native-app/) app on your mobile device
    * The [Make it Native 10](/refguide/getting-the-make-it-native-app/) mobile app is available for Android and iOS devices
    * Once installed, the app lets you quickly test your native mobile app as you develop it by connecting to your local development machine’s running copy of your app and displaying the app inside its mobile testing environment
    * This lets you make changes to your app on your development machine, then instantly see those changes in the mobile app
* If you are working on a Mac, complete [Configuring Parallels](/refguide/using-mendix-studio-pro-on-a-mac/) to install Studio Pro on your Mac

## Building the Native Mobile Picture App

Starting in Studio Pro, open the **Home_Native** page by double-clicking it in the **App Explorer**. You can also press <kbd>Ctrl</kbd> + <kbd>G</kbd> to open the **Go to** menu and search for the page (the **Go to** menu is used for quick navigation in the app; for more Mendix shortcuts, see [Edit Menu](/refguide/edit-menu/#overview)).

{{% alert type="info" %}}
The **Home_Native** page has a different icon than the **Home_Web** page. Mendix uses these icons to help you develop the right aspect of your app.
{{% /alert %}}

You should see this in Studio Pro:

{{< figure src="/attachments/quickstarts/native-mobile-app/studio-pro-check.png" width="400px" alt="What you should see" class="no-border" >}}

The content on this page comes pre-made as a part of the template. To get started, do the following:

1. Delete everything from the page.
2. Add a **List view** to the page via the **Toolbox**. A list view works like the template grid used in [Building a Responsive Web App](/quickstarts/responsive-web-app/#template-grid), except that it can scroll, which is better for mobile users.
3. Right-click the list view, then click **Select data source**.
4. Click **Select** next to **Entity**, then search for and select the **Picture** entity: 

    {{< figure src="/attachments/quickstarts/native-mobile-app/list-view-fill.png" width="400px" alt="List view" class="no-border" >}}
    
5. When prompted to automatically fill the contents of the list view, click **No**.

### Creating the UI

Next, you are going to create the UI for your native app:

1. Right-click the empty space inside the list view and select **Add building block**.
2. Search for and select the **Image** building block under **Cards**.
3. Replace the static image with the image the end-user uploads to the database by right-clicking the **Static Image** viewer and selecting **Convert to dynamic image**. 
4. Right-click the image viewer and select  **Select data source**.
5. Search for and select your **Picture** entity, and when prompted to automatically fill the contents of the widget, click **Yes**.
6. The **Images** will now be displayed from the database, but the **Labels** on the page will still display their default text. To fix this, double-click the label captioned **Card title** to open its properties.
7. Click the **Edit** button next to **Caption**.
8. In the new dialog box, replace the caption with the placeholder *{1}*. 
9. Click to add a new **Parameter** and select the **Title** attribute:

    {{< figure src="/attachments/quickstarts/native-mobile-app/add-title-param.png" width="400px" alt="Configure edit button" class="no-border" >}}

10. Repeat this process for the other label, making sure to select the **Description** attribute this time.

Now, the existing images are displayed from the database. 

Next, you will develop functionality that allows the end-user to take new pictures with the app and then upload them to the server.

## Using a Nanoflow to Call a JavaScript Action {#nanoflow-use-case}

Your app needs a button that allows the end-user to take a picture. Instead of a regular button, you can use a floating action button optimized for mobile users that calls a nanoflow: 

1. Drag the **Floating action button** from the **Toolbox** onto the page:

    {{< figure src="/attachments/quickstarts/native-mobile-app/floating-action-button.png" width="500px" alt="Floating action button" class="no-border" >}}

    The location is managed in the widget's properties, so it does not matter where the widget is placed on the page. You can place it above the list view and still have it display in the bottom-right corner by configuring the widget correctly.

2. Double-click the button to open its properties. 
3. Select an **Icon** for the button, then search for the **Camera** icon. 
4. Set the position to the **Right** and **Bottom** side of the page. 
5. Set the **On click action** to **Call a nanoflow**.
6. Click **Nanoflow** > **Select**, then create a new nanoflow called *ACT_TakeNewPicture*:

    {{< figure src="/attachments/quickstarts/native-mobile-app/make-pic-nano.png" width="300px" alt="New nanoflow" class="no-border" >}}

### Configuring the Nanoflow

[Nanoflows](/refguide/nanoflows/) are the native mobile equivalent of microflows, but with several key differences. Nanoflows are based on JavaScript, and they are offline-first. This means they can execute without an online data connection, and they execute on mobile devices instead of the server. Therefore, certain functionality—like calling a REST API, which is available in microflows—is not available in nanoflows.

Nanoflows also interact with the database on the user's mobile device, which is a copy of the server's database. All database transactions need to be synchronized from the device to the server in order for the data to reflect online.

Do the following for your new **ACT_TakeNewPicture** nanoflow:

1. Drag a **Create object** action from the **Toolbox** into the nanoflow. 
2. Double-click the action and set the entity type as **Picture**, then click **OK**. 
3. Drag a **Take Picture** action and position it after the Create object activity:

    {{< figure src="/attachments/quickstarts/native-mobile-app/add-activities.png" width="450px" alt="Take picture action" class="no-border" >}}

4. Double-click the **Take Picture** action configure the properties like this:
    * **Picture** – **$NewPicture**
    * **Picture source** – **camera**
    * **Picture quality** – **original**
    * **Maximum width** – **empty**
    * **Maximum height** – **empty**
    * **Use return value** – **Yes**
    * **Variable name** – **PictureTaken**

    {{< figure src="/attachments/quickstarts/native-mobile-app/config-take-pic.png" width="350px" alt="Configure take picture" class="no-border" >}}
    
5. Finally you need to create a page where the end-user can view and edit their new picture. Add a **Show page** action to the nanoflow. 
6. Open the action's properties:
    1. Set the **Object to pass** to be **$NewPicture entity**. 
    1. Click **Page** > **Select** and create a new page. 
    1. Set the **Page name** to be *Picture_NewEdit_Native* at the top of the screen.
    1. Change the profile type to **Native mobile**.
    1. Select the **Edit with Data View** template.

You should now see the new page:

{{< figure src="/attachments/quickstarts/native-mobile-app/native-pic-page.png" width="450px" alt="New page" class="no-border" >}}

### Adding Validation

Your app needs to validate that the end-user enters the title and description. Instead of validating that data in a nanoflow, you can configure validation on the text boxes:

1. Double-click the **Title** field to open its properties. 
2. Set **Validation Type** to **Required** and set the message as, *Please provide a title for this picture*.
3. Repeat the step above for the **Description** field, and set the message as, *Please provide a description for this picture*.

### Enabling Auto-Synchronization

Finally, you need to ensure all the data captured by the end-user is synchronized from the device to the server. You can do this quickly by editing the properties of this page's Save button: 

1. Double-click the **Save** button to open its properties.
2. Set **Auto-synchronize** to **Yes**:

    {{< figure src="/attachments/quickstarts/native-mobile-app/edit-button-props.png" width="300px" alt="Auto sync set to yes" class="no-border" >}}
    
## Testing

All done! You can now run your app and test all the features you have built. To test your native mobile app without creating a deployable package, do the following:

1. Open the Make it Native app on your mobile device:

    {{< figure src="/attachments/quickstarts/native-mobile-app/min-start-screen.png" width="350px" alt="MIN start screen" class="no-border" >}}

2. Click the drop-down menu in Studio Pro and select **View app on your device**.
3. Click the **View Native Mobile App** tab.
4. Scan the QR code with the Make it Native app on your mobile device to begin testing (Mac users: be sure to use forward ports 8080/8083 as [explained here](/refguide/using-mendix-studio-pro-on-a-mac/)):

    {{< figure src="/attachments/quickstarts/native-mobile-app/min-qr.png" width="400px" alt="Scan QR code" class="no-border" >}}
    
    {{% alert color="info" %}}If you are using a Mac, be sure to use forward ports 8080/8083, as explained in [Configuring Your Windows Virtual Machine for Mendix Studio Pro](/refguide/using-mendix-studio-pro-on-a-mac/#configuring).{{% /alert %}}

If you need more information, see [Native App Prerequisites and Troubleshooting](/refguide/mobile/getting-started-with-mobile/prerequisites/).

## Finishing Up

This is what we saw when we started testing our native mobile photo app:

{{< figure src="/attachments/quickstarts/native-mobile-app/mobile-pic-1.png" width="200px" class="no-border" >}}

While we were testing, we were lucky to see a dinosaur nearby:

{{< figure src="/attachments/quickstarts/native-mobile-app/mobile-pic-2.png" width="150px" alt="Stegosaurus plant holder in a mobile device camera" class="no-border" >}}

After taking a photo with the native mobile app and tapping the **Save** button, we saw the new picture automatically appear in the responsive profile:

{{< figure src="/attachments/quickstarts/native-mobile-app/mobile-pic-3.png" width="200px" alt="Updated app with new photo" class="no-border" >}}

After reloading the page in our browser, we could also see the new picture there:

{{< figure src="/attachments/quickstarts/native-mobile-app/responsive-app.png" width="550px" alt="Browser view" class="no-border" >}}

Congratulations on completing this quick start tutorial! You are on your way to successful app development with the Mendix Platform.

## Read More

* [Studio Pro Overview](/refguide/studio-pro-overview/) – describes Studio Pro tabs, menus, and shortcut keys
* [Mendix Best Practices for Development](/refguide/dev-best-practices/) – a reference for adopting consistent naming and modeling conventions while developing your Mendix apps
* [Starting with App from a Spreadsheet](/refguide/app-from-spreadsheet/) – describes importing a Microsoft Excel spreadsheet and building an app using your data
* [Become a Rapid Developer (Mendix Academy)](https://academy.mendix.com/link/paths/31/Become-a-Rapid-Developer) – the learning path recommended for new Mendix users who want to create their first app using low-code
* [Crash Course (Mendix Academy)](https://academy.mendix.com/link/paths/82/Crash-Course) – the learning path recommended for new Mendix users who are also experienced developers
