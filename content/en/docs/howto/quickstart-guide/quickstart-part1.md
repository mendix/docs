---
title: "Design in a Responsive Web Profile"
url: /howto/quickstart-part1/
parent: "_index"
weight: 10
description: "Learn the basics of making an app in a Responsive Web profile."
tags: ["microflows", "widgets", "app", "nanoflow", "app development"]
---

## 1 Introduction 

Before starting this tutorial, please [download](https://marketplace.mendix.com/index3.html) and [install](/howto/general/install/) Mendix Studio Pro as well as the [Make It Native 9](/refguide/getting-the-make-it-native-app/) app. You will not need any additional software configured on your device in order to start.

### 1.1 What is Mendix Studio Pro?

[Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/) is the Mendix integrated development environment (IDE) for professional developers. This tutorial will use Studio Pro version 9.12.1, but you can use a later version if one is available.

### 1.2 What is the Make It Native 9 App?

The [Make it Native 9](/refguide/getting-the-make-it-native-app/) mobile app is available for Android and iOS devices. Once installed, the app lets you quickly test your native mobile app as you develop it. Specifically, the Make it Native 9 app connects to your local development machine’s running copy of your app and then displays your app inside its mobile testing environment. This lets you make changes to your app on your development machine, then instantly see those changes in the mobile app.

## 2 Create an Image Gallery in the Responsive Navigation Profile

1.  Starting from Studio Pro, click **Create New App**:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1. Search for the **Blank Native Mobile App** and click **Use this starting point**.
    * **Why choose this template?** — Choosing the **Blank Native Mobile App** template lets you start with an already configured native mobile navigation profile setup for your app. 
    * **Does that mean this app is native mobile only?** — No. The blank native mobile app template also comes with a responsive web navigation profile configured. This means your app is accessible by both web browser and natively on mobile devices.
1. Name your app *Quickstart App* and click the **Create app** button.
1. Wait a few minutes for your app to be created, its team server to be initialized, and a local copy of the project to be downloaded to your development machine. Once it is finished the project will open on your app’s home page called **Home_Web**:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

## 3 Explore Studio Pro

Now that you have completed your first basic tasks in Studio Pro, this section will give you a quick and optional tour. If you know Studio Pro well already, you can skip this section.

You can navigate through your app using the App Explorer, the window on the left side of your screen. This is where you can create and explore new documents and modules in your app. Any modules you download from the Marketplace will appear under **Marketplace Modules** > **App** section:

{{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

At the bottom of Studio Pro you will find several panels:

* **Stories**: displays your active user stories added on your App’s Stories page in the Developer Portal
* **Changes**: displays a list of all changes in the project since the last commit to the team server (also used to resolve conflicts with other team members when updating)
* **Errors**: displays any errors found within your project. Can also display deprecations and Warnings
* **MxAssist Performance Bot**: an AI peer programmer bot which analyzes your app's model and identifies any issues which may negatively impact your app’s performance
* **Console**: a live feed of your app’s console as the app runs (you can filter for additional log levels by clicking on the **Advanced** drop-down list)

On the right side of Studio Pro you will find more panels:

* **Datahub**: displays remote entities (entities from other apps) which are available for use in your app
* **Properties**: displays all the properties of the currently selected context element
* **Toolbox**: a list of things you can add to the current document⁠—the **Toolbox** changes depending on context: it displays page elements while in the page editor or displays actions when editing a microflow or nanoflow
* **Connector**: quickly links data to pages⁠—using the connector you could drag an entity onto a data view or data grid to quickly display your app’s data on a page

The view you see above is completely editable. You can add or remove panels as desired (you can find more windows under **View** as well as reset your view back to default settings if you wish). You can also quickly hide all of Studio Pro's panels by enabling Distraction Free Mode with <kbd>Shift</kbd> + <kbd>F11</kbd>.

## 4 Creating Your App's Domain Model

In Mendix you define your app's data structure in the Domain Model.

### 4.1 Understanding the Domain Model

The domain model is a visual representation of your app’s database. Each module in your app (modules created by you or your team, downloaded from the Marketplace, or System Modules) can all have their own individual models which are combined and translated into a database automatically at runtime. 

Domain models are comprised of entities similar to a table in traditional SQL. Entities have attributes (similar to fields), and they can relate to other entities (including ones in other modules or even other apps). They can relate to each other either as a one-to-one association, one-to-many, or many-to-many.

When you run your app locally or deploy it for the first time,  the runtime compiles your app’s domain models and creates the underlying database. Any subsequent changes will be seen as updates to the database.

Mendix by default uses its own built-in HSSQL database, but Mendix also supports several alternative database types such as IBM DB2, PostgreSQL, Microsoft SQL Server, and others. 

### 4.2 Creating an Entity to Store the Images

1.  To open the domain model for the native mobile module, double-click it in the **App Explorer** pane on the left side. 
    *  There is already an entity here: **Login** (it is part of the template and is used only for native mobile authentication,so you can ignore it for now)

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1. Add an entity, *Picture*, to store all your uploaded images in the database. Drag a new **Entity** from the Toolbox and drop it into the domain model (or right-click anywhere in the domain model to add a new entity). 
1.  Double-click the new entity to open its properties window:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1. Name the entity *Picture*, then click **Select** next to **Generalization**. 
1. Search for and select the **Image** entity (found in the system module).

### 4.3 Understanding Generalizations