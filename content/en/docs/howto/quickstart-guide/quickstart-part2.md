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

Your app needs a button which allows the user to take a picture. Instead of a regular button, you can use a floating action button optimized for mobile users:

1.  Drag the **Floating Action Button** from the **Toolbox** onto the page:

    {{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

    {{% alert type="info" %}}
    The location is managed in the widget's properties, so it does not matter where the widget is placed on the page. You can place it above the list view and still have it display in the bottom-right corner by configuring the widget correctly.
    {{% /alert %}}

1. Double-click the button to open its properties. 
1. Select an **Icon** for the button, then search for the camera icon. 
1. Set the position to the lower-right side of the page. 
1. Make sure the on click action is set to **Call a nanoflow**.
1. Click **Nanoflow** > **Select** then create a new nanoflow called **ACT_TakeNewPicture**.

[Nanoflows](/refguide/nanoflows/) are the native mobile equivalent of microflows, but with several key differences. Nanoflows are offline-first, meaning they can execute without an online data connection. Therefore, certain functionality which is available in microflows is not available in nanoflows. This is because nanoflows are based on JavaScript and execute on mobile devices instead of the server. Nanoflows also interact with the database on the user's mobile device, which is a copy of the server's database. All database transactions need to be synchronized from the device to the server in order for the data to reflect online.

As you look at your new **ACT_TakeNewPicture** nanoflow, do the following:

1. Drag and drop a **Create object** action from the **Toolbox** onto the nanoflow. 
1. Double-click the create object action and select the entity type as **Picture**. 
1. Drag and drop a **Take Picture** action from the **Toolbox** onto the nanoflow after the create object activity:

    {{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

1.  Configure the **Take Picture** action by double-clicking it and configuring the properties like this:
    1. Picture: $NewPicture
    1. Picture source: empty
    1. Picture quality: original
    1. Maximum width: empty
    1. Maximum height: empty
    1. Use return value: yes
    1. Variable name: PictureTaken

    {{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

Finally you need to create a page in which the user can view and edit their new picture:

1. Add a **Show page** action to the nanoflow. 
1. Open the action's properties:
    1. Select the **Object to pass** as the **$NewPicture entity**. 
    1. Click **Page** > **Select** and choose to create a new page. 
    1. Name the page *Picture_NewEdit_Native*.
    1. Change the profile type to **Native mobile** at the top of the screen.
    1. Select the **Edit with Dataview** template.

You should see the new page:

{{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

Just like before, you need to validate that the user has entered the title and description. Instead of validating that data in a nanoflow, you can simply configure validation on the text boxes themselves:

1. Double-click the **Title** field to open its properties. 
1. Find **Validation Type** at the bottom. 
1. Set **Validation Type** to **Required** and provide the message *Please provide a title for this Picture*.
1. Repeat this for the **Description** field, and provide a unique message to the user.

The final thing to do is ensure all the data captured by the user is synchronized from the device to the server. You can do this quickly by editing the properties of this page's save button: 

1. Double-click the **Save** button. 
1.  Set **Auto-synchronize** to **Yes**:

    {{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

All done! You can now run your app and test all the features you have built. To test your native mobile app without creating a deployable package, do the following:

1. Open the Make it Native app on your mobile device,
1. Click the drop-down menu in Studio Pro and select **View app on your device**
1. Click the View Native Mobile App tab
1. Scan the QR code with the Make it Native app on your mobile device to begin testing.

This will automatically begin testing. If you have issues, see [Troubleshoot Common Native Mobile Issues](/howto/mobile/common-issues/) for troubleshooting information.

When we tested our native mobile photo app, we were lucky to sight a stegosaurus nearby:

{{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}
{{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}
{{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

After taking a photo with your native mobile app and tapping the **Save** button, you should be able to see your new pictures automatically appear in the responsive profile after reloading the page in your browser:

{{< figure src="/attachments/howto/quickstart-guide/part2/REPLACE_THIS.png" >}}

Congratulations on successfully completing the Quickstart guide! You are definitely on your way to succeed with the Mendix platform.

To continue learning, go to [Mendix Academy](https://academy.mendix.com/) and choose a learning path that interests you (we recommend the [Crash Course](https://academy.mendix.com/link/paths/82/Crash-Course) for new users who are also experienced developers) or go the [Mendix Documentation](https://docs.mendix.com/) home page to learn more about the Mendix topics which interest you most.