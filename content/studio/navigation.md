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

![Navigation Document Icon](attachments/navigation/navigation-icon.png)

The **Navigation Document** consists of menu items that allow end-users navigate your app or that perform certain actions. For example, you can configure a menu item to open a specific page or to log an end-user out of their profile. For more information on actions you can assign to menu items, see the [Events Section](#events-section-navigation).

You can also add a sub-item to a menu item. Mind that you cannot assign an action to the menu item that has the sub-item.  

{{% alert type="info" %}}

In Studio, you are viewing and editing a Responsive type of the navigation profile, while there are more types of profiles in Studio Pro. For more information on profiles in Studio Pro, see the [Profiles](/refguide/navigation#profiles) section in *Navigation* in the *Studio Pro Guide*. 

{{% /alert %}}

## 2 Navigation Editor Properties

### 2.1 Default Home Page

In the navigation editor properties you can set a page or a microflow as a default home page:

![Default Home Page](attachments/navigation/default-home-page.jpg)

The **Default Home Page** section consists of the following properties:

* **Page** – Allows you to set a page that is opened when an end-user opens the page. A home page icon is displayed in a list of pages against a page that is set as a home page.
* **Microflow** – Allows you to set a microflow that is performed when an end-user opens the app. 

### 2.2 Role-Specific Home Page

You can set a separate home page per each role. For example, an Administrator role can have a Admin_Dashboard page as its home page, while other users will have a default home page opened when they open the app:

![](attachments/navigation/role-based-home-page.jpg)

Role-specific home page has the following properties:

* **Role** – defines what role has a dedicated home page.
* **Type** – defines whether a page or a microflow is opened/performed when the user opens the app. You can select one of the following options:
  * Page – 
  * Microflow –

### 2.3 Adding Role-Specific Home Page

To add a role-specific home page, do the following:

1. Make sure your security is enabled and configured.
2. Open the navigation editor > Navigation editor properties.
3. In the **Role-Specific Home Page** section, click the **Add Role-Specific Home Page**.
4. In the **Role** property, Select a role that will have a dedicated home page.
5. 

## 3 Menu Item Properties {#properties-of-menu-items}

Properties of the menu items consists of the following sections:

* [Events](#events-section-navigation) 
* [General](#general-section-navigation) 

![](attachments/navigation/navigation-properties.png)

### 2.1 Events Section {#events-section-navigation}

You can choose the **On Click Action** in the **Events** section. The **On Click Action** defines what action is performed when the user clicks a menu item. 

{{% alert type="info" %}}
If a menu item has a sub-item(s), it cannot have an action configured for it.
{{% /alert %}}

The available actions are described in the table below:

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

The properties that can be configured in the **General** section are the following:

* **Caption** – Allows you to fill in the name of the menu item.
* **Icon** – Allows you to set the icon of the menu item.

### 2.3 Creating a Menu Item {#create-new-menu-items}

To create a new menu item, do the following:

1. Click the **Navigation Document** icon in the left menu bar to open the **Navigation**.

2. Click a plus at the bottom of the navigation tree to create a menu item, or click a plus next to the existing navigation item to create its sub-item

   ![](attachments/navigation/adding-navigation-items.png)

3. Specify the properties of the created item if needed (For more information, see [Properties of Menu Items](#properties-of-menu-items)). 

A new menu item or a sub-item is added to the navigation.

## 4 Read More

* [General Info](general)
* [Navigation Consistency Errors](consistency-errors-navigation)
