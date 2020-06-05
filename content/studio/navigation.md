---
title: "Navigation Document"
description: "Describes the navigation menu in Mendix Studio."
menu_order: 40
tags: ["studio", "navigation", "menu item", "navigation item", "app menu"]
---

## 1 Introduction 

A **Navigation Document** in Mendix Studio shows a configured menu of your app in a form of a tree. You can create items and sub-items in your navigation. 

![](attachments/navigation/navigation-vs-app.png)

To open the **Navigation Document**, click the corresponding icon in the left menu bar.

{{% image_container width="300" %}}![Navigation Document Icon](attachments/navigation/navigation-icon.png)
{{% /image_container %}}

The **Navigation Document** consists of menu items that allow end-users navigate your app or that perform certain actions. For example, you can configure a menu item to open a specific page or to log an end-user out of their profile. For more information on actions you can assign to menu items, see the [Events Section](#events-section-navigation).

You can also add a sub-item to a menu item. Mind that you cannot assign an action to the menu item that has the sub-item.  

{{% alert type="info" %}}

In Studio, you are viewing and editing a Responsive type of the navigation profile, while there are more types of profiles in Studio Pro. For more information on profiles in Studio Pro, see the [Profiles](/refguide/navigation#profiles) section in *Navigation* in the *Studio Pro Guide*. 

{{% /alert %}}

## 2 Properties of Menu Items {#properties-of-menu-items}

Properties of the menu items consists of the following sections:

* [Events](#events-section-navigation) 
* [General](#general-section-navigation) 

{{% image_container width="300" %}}![](attachments/navigation/navigation-properties.png)
{{% /image_container %}}

### 2.1 Events Section {#events-section-navigation}

You can choose the **On Click Action** in the **Events** section. The **On Click Action** defines what action is performed when the user clicks a menu item. The available actions are described in the table below:

| Action         | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| Nothing        | No action is taken.                                          |
| Page           | The specified page is opened.                                |
| Microflow      | The selected microflow is executed.                          |
| Save Changes   | Saves (commits) all changes made in the currently opened page and closes the page. |
| Cancel Changes | Rolls back all changes made in the currently opened page and closes the page. |
| Close Page     | Closes the pop-up window (for pop-up pages) or navigates to the previously visited page. Note that this action will close the page and the changes if any will not be saved. Use **Save Changes** for this purpose. |
| Sign Out       | The current user is signed out of the app.                   |
| Open Link      | Triggers an action based on the link type: <ul><li>**Web** – navigates to a website </li><li>**Email** – composes an email</li><li>**Phone Call** – starts a phone call</li><li>**Text Message** - sends a text message</li></ul>**Note** When you configure **Email**, **Phone Call** or **Message** options, the corresponding default app will be opened on the device when the action is triggered, for example, the default email client will be opened to compose a message. |

{{% alert type="info" %}}

If a menu item has a sub-item, the **On Click Action** should be **Nothing**. 

{{% /alert %}}

### 2.2 General {#general-section-navigation}

The properties that can be configured in the **General** section, are described in the table below.

| Property        | Description                                                  | Depends on                                                   |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Caption         | Fill out the name of the menu item here.                     | Nothing                                                      |
| Icon            | Set the icon for the menu item here.                         | Nothing                                                      |
| Set As Homepage | Allows you to set a page or a microflow that is opened/performed when an end-user opens the app. A homepage icon is displayed in a list of pages or microflows against a page/microflow that is set as a homepage. | **On Click Action**, available only when a page or a microflow is selected as an **On Click Action**. For more information, see [Events Section](#events-section-navigation). |

## 3 Creating a Menu Item

To create a new menu item, do the following:

1. Click the **Navigation Document** icon in the left menu bar to open the **Navigation**.

2.  Click a plus at the bottom of the navigation tree to create a menu item, or click a plus next to the existing navigation item to create its sub-item

    ![](attachments/navigation/adding-navigation-items.png)

3. Specify the properties of the created item if needed (For more information, see [Properties of Menu Items](#properties-of-menu-items)). 

A new menu item or a sub-item is added to the navigation.

## 4 Read More

* [General Info](general)
* [Navigation Consistency Errors](consistency-errors-navigation)
