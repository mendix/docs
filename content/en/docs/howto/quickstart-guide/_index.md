---
title: "Quickstart Guide"
url: /howto/quickstart-guide/
parent: "_index"
weight: 15
description: "Learn the basics of Studio Pro quickly and easily."
tags: ["microflows", "widgets", "app", "nanoflow", "app development"]
---

## 1 Introduction 

Get up and running with the Mendix Platform and start developing your first app. 

Using this guide, you will learn how easy building and hosting apps with Mendix is. Our low-code approach lets you develop powerful apps quickly. Also, every app created with Mendix automatically provisions a [Free Cloud Environment](/developerportal/deploy/mendix-cloud-deploy/#free-app) the first time it is deployed.

This 25-minute tutorial will cover the essentials of Mendix development, and when you finish you will have your first app. Specifically, you will build a native mobile app that can take pictures. After that you will adapt it for web and PWA apps.

## 2 Prerequisites

* Create your [free account](https://signup.mendix.com/link/signup/?source=direct) in two minutes or less
* Download the latest version of [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Install [Mendix Studio Pro](/howto/general/install/)
* Install the [Make it Native 9](https://docs.mendix.com/refguide/getting-the-make-it-native-app/) app on your mobile testing device

## 3 Getting Started

1.  Starting from Studio Pro, click **Create new app**:

    {{< figure src="/attachments/quickstart-guide/new-app.png" alt="Create new app"   width="350"  >}}

1.  Select the **Blank Native Mobile** template and click **Use this starting point**:

    {{< figure src="/attachments/quickstart-guide/templates.png" alt="Templates"   width="350"  >}}

    {{< figure src="/attachments/quickstart-guide/blank-native-template.png" alt="Blank Native Mobile template"   width="350"  >}}

1. Name your app *Quickstart*.
1. Click **Create App**. 
1.  Wait for your  team server to be initialized and your app to be uploaded:

    {{< figure src="/attachments/quickstart-guide/config-app-settings.png" alt="Set up new app"   width="350"  >}}

    {{< figure src="/attachments/quickstart-guide/upload-to-server.png" alt="Uploading to server"   width="350"  >}}

1.  Once this is finished you will see your **Home_Web** page open in Studio Pro

    {{< figure src="/attachments/quickstart-guide/home-web-page.png" alt="Home web page"   width="350"  >}}

1.  In the **App Explorer** on the left, open the **Domain model** in the **NativeMobile** module. The domain model is a visual representation of your app's underlying data structure:

    {{< figure src="/attachments/quickstart-guide/native-mobile-mobule.png" alt="Native mobile module"   width="350"  >}}

1.  Right-click anywhere in the domain model, select **Add Entity**, then double-click the new entity to open its properties:

    {{< figure src="/attachments/quickstart-guide/add-entity.png" alt="Add entity"   width="350"  >}}

1. Name your entity *Picture*.
1.  Click **Select** next to Generalization, search for **image** and select it, and then click okay to close all open windows. This will cause your entity to inherit the properties of System.Image:

    {{< figure src="/attachments/quickstart-guide/save-entity-props.png" alt="Save entity properties"   width="350"  >}}

    {{< figure src="/attachments/quickstart-guide/select-image.png" alt="Select image"   width="350"  >}}

1. Use the keyboard shortcut <kbd>Ctrl</kbd> + <kbd>G</kbd> to open the “Go-To” menu.
1.  Type *Home_Native* to find the page quickly, and then click **Go To** which opens your native mobile home page (this works for any item in your entire app):

    {{< figure src="/attachments/quickstart-guide/go-to-menu.png" alt="Go to menu"   width="350"  >}}

    {{< figure src="/attachments/quickstart-guide/native-mobile-page.png" alt="Native mobile page"   width="350"  >}}

1.  There is some placeholder content in the current page. Select and delete everything on the page:

    {{< figure src="/attachments/quickstart-guide/delete-content.png" alt="Delete content"   width="350"  >}}

1.  In the **Toolbox** window on the right, select the **List view** widget and drag it on to the page:

    {{< figure src="/attachments/quickstart-guide/add-list-view.png" alt="Add list view"   width="350"  >}}

1. Double-click the list view to open its properties window, then click the **Data source** tab.
1.  Leave the type as **Database** and next to entity click **Select**. Then look for your **Picture** entity, click the **Select** button, then click **OK** to close the properties window:

    {{< figure src="/attachments/quickstart-guide/list-view-data-config.png" alt="Configure list view"   width="350"  >}}

1. Click **Yes** to automatically fill the contents of the list view.

## 3 Adding a Nanoflow

A nanoflow is a visual representation of logic, written in Business Process Modelling (BPM). Nanoflows always have a single start point, but can branch and have multiple end points. When you compile your app, the platform translates your nanoflow into JavaScript which can be executed on your device or inside a browser:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647431363748_Screenshot+2022-03-16+at+11.49.20.png)

Now you will make a nanoflow which takes pictures for your app:

1. In the Toolbox window find **Nanoflow button** and drag it into the empty space above the **List view**. This will automatically open a dialog box.
1. Choose your nanoflow.
1.  Select the **NativeMobile Module**, click the **New** button, and name your new nanoflow *ACT_TakePicture*.

    {{< figure src="/attachments/quickstart-guide/name-nanoflow.png" alt="Name nanoflow"   width="350"  >}}

1.  Double-click the new button to open its properties, clear the caption field, and then select the **Camera** icon:

    {{< figure src="/attachments/quickstart-guide/camera-icon.png" alt="Camera icon"   width="350"  >}}

1.  Right-click the button then click **Go to on click nanoflow...**:

    {{< figure src="/attachments/quickstart-guide/go-to-nanoflow.png" alt="Go to nanoflow"   width="350"  >}}

1.  With your nanoflow editor open go to your toolbox window, find the **Create object** activity, and drag it onto the line between the green start and red stop points:

    {{< figure src="/attachments/quickstart-guide/create-object-activity.png" alt="Drag and drop object activity"   width="350"  >}}

1.  Double-click the activity to open its properties window, click **Select**, then choose your **Picture** entity as the object to be created:

    {{< figure src="/attachments/quickstart-guide/select-entity.png" alt="Select entity"   width="350"  >}}

1.  Go back to the toolbox, search for the **Take Picture** action, and drag it onto the line after the **Create object** action:

    {{< figure src="/attachments/quickstart-guide/drag-take-picture.png" alt="Drag take picture action"   width="350"  >}}

1.  Double-click the action again to open its properties and then configure each drop-down as follows: 
    1. Picture: *$NewPicture*
    1. Picture Source: *camera*
    1. Picture Quality: *Original*
    1. Maximum width: *empty*
    1. Maximum height: *empty*
    1. Use return value: *Yes*
    1. Variable name: *PictureTaken*

    {{< figure src="/attachments/quickstart-guide/configure-take-picture.png" alt="Configure take picture action"   width="350"  >}}

1. In the toolbox, search for the **Commit object(s)** action, and commit the **New Picture** entity to the database:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647432281853_Screenshot+2022-03-16+at+12.04.39.png)

Finally, we need to make sure data is synced from the app's mobile device to its server:

1. In the **Toolbox**, find **Synchronize** action and drag it onto the end of your flow:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647432463188_Screenshot+2022-03-16+at+12.07.40.png)

1. You can now run your app by pressing <kbd>F5</kbd> or by clicking the green play button at the top-right corner. Once your app is running you will receive a notification:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647432569072_Screenshot+2022-03-16+at+12.09.27.png)

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647432698123_Screenshot+2022-03-16+at+12.11.34.png)

1. Click the arrow next to the **View App** button, click **View on Your Device**, then open the **View Native Mobile App** tab:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647432763376_Screenshot+2022-03-16+at+12.12.40.png)

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647432864478_Screenshot+2022-03-16+at+12.14.21.png)

1. Open the Make it Native app on your mobile device.
1. Scan the QR code shown in Studio Pro to open your app on your testing device.
1. Press the camera button you created and take a picture of your nearest desk stegosaurus (or anything else you would like): 

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647433469005_file.jpeg)

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647433891249_file.jpeg)

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647433474104_file.jpeg)

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647433985771_file.jpeg)

## 4 Adapting for Web and PWA Apps

Congratulations, the hardest development tasks are done! Now you can see how easy it is to configure Web and PWA versions of your app. To start, set up your app's navigation to handle mobile browsers: 

1. In the **App Explorer** on the right side open the **Navigation**. 
1. Click **Add navigation profile**. 
1.  For profile type, choose **Phone Web** and then select **Copy settings from an existing profile**:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647964253854_Screenshot+2022-03-22+at+15.50.50.png)

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647964611700_Screenshot+2022-03-22+at+15.56.48.png)

1. In the newly created profile, select **Progressive Web App** > **Publish as a Progressive Web App**:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647964641552_Screenshot+2022-03-22+at+15.57.18.png)

1. Open the the home page for web, **Home_Web**. 
1. Like before, add a List view to the page from the toolbox and set its data source to be from the database to display your picture entity:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647964904364_Screenshot+2022-03-22+at+16.01.40.png)

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647964965283_Screenshot+2022-03-22+at+16.02.41.png)


This time instead of a button, you will use a file upload widget to utilize mobile device cameras. This widget needs to be placed in context (meaning in a data view, list view, or template grid). 

1. Drag in a data view from the toolbox and place it above the list view:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647965094091_Screenshot+2022-03-22+at+16.04.51.png)

1. Double-click the dataview to open its properties window. 
1. Set the Data source to be a microflow, click select next to the microflow box, and create a new microflow called *DS_CreatePicture*.
1. Click **Show** to quickly jump to the new flow:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647965289642_Screenshot+2022-03-22+at+16.08.05.png)

1. In the microflow, add a retrieve action from the toolbox. 
1. Open the action, set it to retrieve from database, and select the picture entity. 
1. For range choose first and provide the xpath constraint as `[hasContents = false()]`. This will look for any empty picture records (without file contents) in the database or memory and return them for your use:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647965461692_Screenshot+2022-03-22+at+16.10.56.png)


1. Next add an exclusive split (the orange diamond shape). This is the equivalent of creating an "if" statement in other languages. 
1. Add the caption “Found”.
1. Under expression type *$Picture != empty*: 

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647965634951_Screenshot+2022-03-22+at+16.13.51.png)

{{% alert type="info" %}}
Use <kbd>Ctrl</kbd> + <kbd>Space</kbd> to use autocomplete in an expression editor.
{{% /alert %}}

That expression checks if the `Picture` object was found. This will result in a true or false result. To make sure the flow accounts for this, make the following changes:

1. Add a new branch from the exclusive split. 
1. Set the condition values for both paths, one for true and one for false:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647965882417_Screenshot+2022-03-22+at+16.17.55.png)

On the true path, you can simply set the return value on the End Event as the picture which was retrieved. On the false path you have to create an object because nothing was found: 

1. Drag in a “Create Object” action, once again from the toolbar. 
1. Set the newly created entity to be your picture entity, and then click OK. 
1. Right-click on the new entity and choose **Set $NewPicture as return value**:

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647965998337_Screenshot+2022-03-22+at+16.19.55.png)

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647966064841_Screenshot+2022-03-22+at+16.20.59.png)

![](https://paper-attachments.dropbox.com/s_A24CF16B5F978C4E7ECE0D85EB7BCF682E534747C1ABF7CDA69C26A5FE7EEF76_1647966216286_Screenshot+2022-03-22+at+16.23.33.png)


1. Return to your app's home page and add an image uploader widget inside your dataview. 
1. Add a save button to the footer of the dataview. 
1. Re-run your app. 
1. Once it is running click the dropdown arrow next to the **View App** button and choose **view on your device**.
1. Scan the QR code to open in your device’s browser. 

On your device you should be able to take pictures using the widgets, buttons, and logic you employed. Next you can click **Publish** and deploy your app to the Mendix Free Cloud! 

Congratulations Mendix developer, you successfully completed this Quickstart guide! You have your first Mendix app which works on almost any device, and now you can start planning your next app.

To learn more about the power of Mendix apps, visit academy.mendix.com for use-case specific lessons or docs.mendix.com to explore any part of Mendix that interests you.


