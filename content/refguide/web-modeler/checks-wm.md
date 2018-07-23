---
title: "Checks Overview in the Web Modeler"
category: "Web Modeler"
description: "Describes checks during publishing process in the Mendix Web Modeler."
tags: ["web modeler", "app viewing", "checks", "errors"]
---

## 1 Introduction 

When publishing your app, the Web Modeler checks the app you created on consistency errors. If there are any, the app canot be published, and you see the **Checks** button goes red with the number of errors indicated.

![](attachments/checks-wm/wm-checks-button.png)

## 2 Viewing Checks for Your App and Interacting with the Checks Panel

To display checks for your app and view the faulty elements in it, do the following:

1. Click **Publish** in the top-right of the Web Modeler.

2. In the pop-up window, click **Update**.

   ![](attachments/checks-wm/wm-publish-update.png)

3. If your app has consistency errors, the **Checks** button will have red border, the number of the errors will be indicated on the button, and a warning will be displayed. 

   ![](attachments/checks-wm/wm-checks-button-red.png)

4. Click the **Checks** button, the warning or press <kbd>C</kbd> to view all checks. 
   The panel with the list of checks appears at the bottom of the screen. For more information on the **Checks** panel, see section [3.2 Checks Panel Overview](#checks-panel-overview).

   ![](attachments/checks-wm/wm-checks-panel.png)

5. Click **Error**, **Warning** and **Info** buttons to manage what is displayed on the **Checks** panel (the types that are displayed are highlighted in red/orange/blue for **Error**/**Warning**/**Info** types correspondingly). For more information, see section [3.1 Types of Checks](#checks-types). 

   ![](attachments/checks-wm/wm-checks-panel-different-colors.png)

6. To view the exact place and element that the error/warning/info refers to, click the corresponding row in the **Checks** panel (you can click any place of the row, the whole row is responsive),  and the element that contains faults will be displayed.

   ![](attachments/checks-wm/wm-viewing-error.png)

7. To close the panel, either click the close button in the top-right corner of the panel, or click **Checks** in the top-right corner of the Web Modeler. 

{{% alert type="info" %}}

If there are no consistency errors, the app will be published, and the **Checks** panel will be empty. That means that if there are no consistency errors, **Warnings** and **Info** will not be updated and displayed, and you will see an empty **Checks** panel.

{{% /alert %}}

## 3 Checks Types and the Checks Panel

The **Checks** panel consist of three buttons indicating the type of a check and a table with details on each check. 

### 3.1 Types of Checks {#checks-types}

There are three types of checks in the Web Modeler. Each button is colored differently at the top of the **Checks** panel and has its own icon.

![](attachments/checks-wm/wm-button-colors.png)

The description of the types of checks is represented in the table below.

| Type    | Button color | Icon                                           | Function                                                     |
| ------- | ------------ | ---------------------------------------------- | ------------------------------------------------------------ |
| Error   | Red          | ![](attachments/checks-wm/wm-error-icon.png)   | Consistency errors that prevent your app from functioning in a correct way and being published (for example, if you don't specify an entity for the data view, your app cannot function correctly). |
| Warning | Orange       | ![](attachments/checks-wm/wm-warning-icon.png) | Errors that are not critical, so you can publish your app having warnings. However, it is highly recommended to take action based on the warnings, because your app has logical gaps (for example, clicking a button does nothing). |
| Info    | Blue         | ![](attachments/checks-wm/wm-info-icon.png)    | This type shows information on features that will be deleted from the user interface soon (deprecated). This does not affect the app now, but may cause problems when upgrading to the next version. |

{{% alert type="info" %}}

The button is colored only when the corresponding type of the check is enabled for the panel. If the type is disabled, it is transparent.

{{% /alert %}}

### 3.2 Checks Panel Overview {#checks-panel-overview}

The **Checks** panel is represented as a table with buttons on top, and a table underneath them. The buttons control the information that is displayed in the table. For more information, see section [3.1 Types of Checks](#checks-types). 

{{% alert type="info" %}}

The **Checks** panel is only refreshed after a user clicks **Update** again, it is not refreshed in real-time.

{{% /alert %}}

The information displayed in the table of the **Checks** panel is represented below. 

| Item     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| Message  | Contains an explanation of the error/warning/info. In front of the message you can see an icon indicating the type of the check. For more information, see section [3.1 Types of Checks](#checks-types). |
| Module   | Indicates the module where the error/warning/info is found.  |
| Document | Indicates the place of your app where the error/warning/info is found (for example, a page, a microflow). |
| Element  | Indicated the exact element that is faulty (button, activity, etc. ). |

## 4 Related Content

* [The Web Modeler Overview](overview-wm)
* [How to Publish and View Your App](../../howto/tutorials/start-with-a-blank-app-3-publish-and-view-your-app)
