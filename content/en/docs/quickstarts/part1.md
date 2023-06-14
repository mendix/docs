---
title: "Build a Responsive Web App"
url: /quickstarts/part1/
weight: 10
description: "Learn the basics of making an app in a Responsive Web profile."
tags: ["hello world", "microflows", "widgets", "app", "nanoflow", "app development"]
aliases:
    - /refguide/quickstart-part1/
    - /refguide9/quickstart-part1/
---

## 1 Introduction 

Get up and running with the Mendix Platform and start developing your first app in Mendix Studio Pro. This is Part 1 of the quickstarts, where you will learn the basics of Studio Pro, handle data using the Domain Model, populate your app's pages with dynamic data, and create custom app logic using a microflow.

When you complete Part 1, you will have a photo album app that will allow users to upload, edit, and display pictures so that their cherished memories will be preserved. This guide, Part 1, will show you how to build a responsive web app compatible with all desktop, tablet, and mobile browsers.

### 1.1 Getting to Know Mendix

This tutorial will teach you several key Mendix concepts, such how to add an entity to the [domain model](/refguide/domain-model/) (a visual model that describes your app's information or data in an abstract way), create some basic pages which use building blocks and design properties, and model your first microflow. 

A [microflow](/refguide/microflows/) is a visual way of expressing logic or code which is compiled into executable code at runtime. Microflows are commonly used to perform actions such as creating and changing objects, showing pages, and making choices.

[Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/) is the Mendix integrated development environment (IDE) for professional developers. Use the latest version of Studio Pro when completing the tutorial. Some of the screenshots in this guide might look a little different than your product, but we recommend you use the latest version of Studio Pro for ease and security.

Every app created with us automatically provisions a [Free Cloud Environment](/developerportal/deploy/mendix-cloud-deploy/#free-app) the first time it is deployed, so you do not have to waste time provisioning a testing environment.

You will not need any additional software configured on your device in order to start.

## 2 Prerequisites 

Before starting this guide, make sure you have completed the following prerequisites:

* Create your [free account](https://signup.mendix.com/link/signup/?source=quickstart-part1&medium=mxdocs
)—which takes only two minutes to finish
* [Download](https://marketplace.mendix.com/link/studiopro/) and [install](/refguide/install/) Mendix Studio Pro
* If you are working on a Mac, please complete [Configuring Parallels](/refguide/using-mendix-studio-pro-on-a-mac/) to install Studio Pro on your Mac

## 3 Choosing an App Template with a Responsive Navigation Profile

Here you will choose an app starting point. It is key that you choose a starting point with a configured responsive web navigation profile, as the app you will make in this guide needs to work for web browsers:

1. Starting from Studio Pro, click **Create New App**:

    {{< figure src="/attachments/quickstarts/part1/starting-point.png" width="450px" alt="New app">}}

1. Search for the **Blank Native Mobile App** and click **Use this starting point**:
    * **Why choose this template?** — Choosing the **Blank Native Mobile App** template lets you start with an already-configured native mobile navigation profile setup for your app. 
    * **Does that mean this app is native mobile only?** — No. The blank native mobile app template also comes with a responsive web navigation profile configured. This means your app is accessible on both web browsers and natively on mobile devices.
1. Name your app *Quickstart App* and click the **Create app** button.
1. Wait a few minutes for your app to be created, its team server to be initialized, and a local copy of the app to be downloaded to your development machine. After that the app will open on your app’s home page called **Home_Web**:

    {{< figure src="/attachments/quickstarts/part1/home-web.png" width="450px" alt="Home Web page">}}

A page defines the end-user interface in a Mendix app. You can create and edit pages using the Page Editor. All pages are based on layouts and templates:

* [Layouts](/refguide/layout/): define a page's structure (such as navigation element location, areas for content, and more)
* [Templates](/refguide/page-templates/): are completely editable starting points for new pages, and you can also start with a blank template so you can build from scratch

## 4 Exploring Studio Pro

Now that you have completed your first tasks in Studio Pro, this section will give you a quick and optional tour. If you know Studio Pro well already, you can skip this section.

Open up your version of Studio Pro and take a look at it all at once. There is a lot of power, but it can be confusing at first glance. Luckily it is easy to understand in sections. For even more detail, see the [Studio Pro Overview](/refguide/studio-pro-overview/).

Simply put, the center of Studio Pro hosts a [working area](/refguide/studio-pro-overview/#working-area) where you can work on an open document. Surrounding this work area are various panes which you will learn more about in the sections below. Finally, if you wish to change the language you work in (and that your end-user will use) see the [Status Bar](/refguide/studio-pro-overview/#status-bar) at the bottom.

The Studio Pro configuration you see is completely editable. You can add or hide panes as desired (you can find more panes under **View** as well as reset your view back to default settings if you wish). You can also quickly hide all of Studio Pro's panes by enabling **Distraction Free Mode** with <kbd>Shift</kbd> + <kbd>F11</kbd>.

### 4.1 Top Bar

The top bar contains the menus, buttons, and other UI elements you need for fundamental app development tasks. For example, you can run your app with the play (**Run App**) button. 

For more information on the top bar's menus and functions, see the [Top Bar](/refguide/studio-pro-overview/#top-bar) section of *Studio Pro Overview*.

### 4.2 App Structure on the Left

You can navigate through your app using the [App Explorer](/refguide/app-explorer/), the window on the left side of your screen. This is where you can create and explore new documents and modules in your app:

{{< figure src="/attachments/quickstarts/part1/tour-left.png" alt="App Structure">}}

Any [modules](/refguide/modules/) you download from the Marketplace will appear under **Marketplace Modules** > **App** section.

### 4.3 Bottom Dockable Pane 

Look at the bottom dockable pane of Studio Pro:

{{< figure src="/attachments/quickstarts/part1/tour-bottom.png" width="450px" alt="Bottom Dockable Pane">}}

Here you will find several default panes such as:

* **Stories**: displays your active user stories added on your app’s Stories page in the Developer Portal (for more information see [Stories Pane](/refguide/stories-pane/))
* **Changes**: displays a list of all changes in the app since the last commit to the team server (for more information see [Changes Pane](/refguide/changes-pane/))
* **Errors**: displays any errors found within your app (for more information see [Errors Pane](/refguide/errors-pane/))

For additional information on bottom default panes, see the [MxAssist Best Practice Bot](/refguide/view-menu/#mx-bot) and [Console](/refguide/view-menu/#console) sections of *View Menu*.

### 4.4 Right Dockable Pane

Look at the right dockable pane of Studio Pro:

{{< figure src="/attachments/quickstarts/part1/tour-right.png" width="350px" alt="Right Dockable Pane">}}

Here you will find more default panes:

* **Properties**: displays all the properties of the currently selected context element (for more information see [Properties](/refguide/view-menu/#properties))
* **Toolbox**: a list of things you can add to the current document⁠—the **Toolbox** changes depending on context (for more information see [Toolbox](/refguide/view-menu/#toolbox))

For additional information on right default panes, see the [Data Hub](/refguide/view-menu/#data-hub) and [Connector](/refguide/view-menu/#connector) sections of *View Menu*.

## 5 Creating Your App's Domain Model

In Mendix you define your app's data structure in the Domain Model.

### 5.1 Understanding the Domain Model

The domain model is a visual representation of your app’s database. Each module in your app (modules created by you or your team, downloaded from the Marketplace, or System Modules) can all have their own individual models which are combined and translated into a database automatically at runtime. 

Domain models are comprised of entities similar to a table in traditional SQL. Entities have attributes (similar to fields), and they can relate to other entities (including ones in other modules or even other apps). They can relate to each other either as a one-to-one association, one-to-many, or many-to-many.

When you run your app locally or deploy it for the first time, the runtime compiles your app’s domain models and creates the underlying database. Any subsequent changes will be seen as updates to the database.

Mendix by default uses its own built-in HSSQL database, but Mendix also supports several alternative database types such as PostgreSQL, Microsoft SQL Server, and others. 

### 5.2 Creating an Entity to Store the Images

1. To open the domain model for the native mobile module, double-click it in the **App Explorer** pane on the left side:

    * There is already an entity here: **Login** (it is part of the template and is used only for native mobile authentication, so you can ignore it for now)

    {{< figure src="/attachments/quickstarts/part1/create-entity.png" width="450px" alt="Create entity">}}

1. Add an entity, *Picture*, to store all your uploaded images in the database. Drag a new **Entity** from the Toolbox and drop it into the domain model (or right-click anywhere in the domain model to add a new entity). 
1. Double-click the new entity to open its properties window:

    {{< figure src="/attachments/quickstarts/part1/entity-config.png" width="450px" alt="Open properties">}}

    {{< figure src="/attachments/quickstarts/part1/entity-config-cont.png" width="450px" alt="Edit configuration">}}

1. Name the entity *Picture*, then click **Select** next to **Generalization**. 
1. Search for and select the **Image** entity (found in the system module).

A generalization is a parent entity your child entity inherits properties from. This is the Mendix equivalent of inheritance. You can have multiple levels of generalizations. 

For example you have created a new entity **Picture** which inherits from the system entity **Image**. However, the **Image** entity also inherits some of its properties from another system entity called **FileDocument**.

Next you must add some attributes. Remember, your entity now inherits many properties from its parent entity **-Image**. Therefore you only have to add fields for the image's **Title** and **Description** information:

1. Under the **Attributes** tab in the entity’s properties, click **New**, name your attribute *Title*, and click **OK**:

    {{< figure src="/attachments/quickstarts/part1/add-attributes.png" width="450px" alt="Name attribute">}}

1. Repeat the process while adding an attribute called *Description*, except select **Unlimited** for the string's **Length**.
1. Click **OK** to close the entity’s properties window:

    {{< figure src="/attachments/quickstarts/part1/description-attributes.png" width="450px" alt="Entity properties">}}

## 6 Creating Your App's User Interface

Now that you have created your domain model, it is time to create your photo album app’s front end. To do so, you will employ regular widgets and context widgets:

* Widgets – Widgets are pre-made user interface components. Widget development in Mendix is based on React for both web and native mobile. A widget can either be a single visual component (like a button), or a collection of components grouped together for ease of use.
* Context widgets – A context widget is a widget which displays data from the Domain Model. In Mendix there are four main context widgets: 
    * [Data view](/refguide/data-view/): displays a single record
    * [Data grid](/refguide/data-grid/): displays many records in a table format
    * [List view](/refguide/list-view/): displays many records in a scrollable list
    * [Template grid](/refguide/template-grid/): displays many records in configurable columns and rows

Now it is time to build your photo album app:

1. Open the **Home_Web** page from the App Explorer. 
1. Drag a **Template Grid** from the **Toolbox** onto the page. 
1. In Mendix, in order to display data from the domain model on a page element it needs to be within a context. Double-click the template grid to open its properties, then go to the **Data source** tab:

    {{< figure src="/attachments/quickstarts/part1/template-datasource.png" width="450px" alt="Open data properties">}}

    {{< figure src="/attachments/quickstarts/part1/template-datasource-cont.png" width="450px" alt="Data source tab">}}

1. Leave the **Datasource type** as **Database** and under **Entity** select the **Picture** entity we created earlier, then click **OK** to close the window:

    {{< figure src="/attachments/quickstarts/part1/template-edits.png" width="450px" alt="Configure data source">}}

1. When Studio Pro prompts you to automatically fill the contents of the template grid, click **Yes**. 
1. Note the red error pointers on the **New** and **Edit** buttons of the template grid. This is because there is no page connected to the buttons. To resolve this, right-click one of the buttons and select **Generate Page**:

    {{< figure src="/attachments/quickstarts/part1/generate-page.png" width="450px" alt="Connect page">}}

1. Leave the page name as is and choose the **Form Vertical** template for the page.

Next we want to replace some of the auto-generated content inside the template grid with some sleeker building blocks:

1. Delete all the display widgets inside the grid.
1. Right-click in the empty space and select **Add building block**.
1. Search for and select **Card action with image**.

A building block is a collection of pre-styled display widgets. A building block is similar to a component in React.js. Building blocks are data agnostic, meaning they are created without data and you need to link the relevant data sources for the building block’s components when including them in the page.

Next you will connect your data to the display widgets because your page is currently displaying only static resources:

{{< figure src="/attachments/quickstarts/part1/edit-caption.png" width="450px" alt="Dynamic data">}}

To start, replace the static image with the image the user uploads to the database: 

1. Right-click on the static image viewer and click **Convert to dynamic image**. 
1. Right-click on the image viewer again, click **Select data source**, and then search for your **Picture** entity (click **Yes** when prompted to automatically fill the contents of the widget).

Your **Images** will now be displayed from the database, but the **Labels** on the page will still be displaying their default text. To fix this, do the following:

1. Double-click to open the properties of the label captioned **Card title**.
1. Click the **Edit** button next to **Caption**.
1. In the new window, replace the caption field with the place holder *{1}*. 
1. Click to add a new **Parameter** and select the **Title** attribute:

    {{< figure src="/attachments/quickstarts/part1/parameter.png" width="450px" alt="Add attributes">}}

1. Repeat this process for the label below with the caption **Supporting text**, making sure to select the **Description** attribute this time.

## 7 Defining Logic Using Microflows

There is only one step left before you can run and test your photo album app app. You have created a place to store images and a page to display them on. Most of the functionality for creating, editing, and deleting images has been handled automatically. But what if you want your app to do some custom logic? For example, what if you wanted to validate that the user has entered text for the **Title** and **Description** fields before they click **Save**? In Mendix, you can achieve this using a Microflow.

A microflow is a piece of custom logic which is represented visually in Business Process Model and Notation (BPMN). Think of a function in traditional code, except written visually. When your app compiles, it translates all your microflows into code executable by your browser. Microflows are based on Java and are executed on the server. This means an internet connection is required in order for it to execute. A microflow can only have one start point, but can often have multiple end points.

Implement custom logic with a microflow by doing the following:

1. Open the page **Picture_NewEdit** using the App Explorer.
1. Scroll down to the **Save** button at the bottom of the page. 
1. Right-click the button then click **Edit on click action**. 
1. Set the on click action type to call a microflow.
1. Choose to create a new microflow in the **Native Mobile** module called *ACT_ValidateAndSavePicture* (click the **Show** button to quickly navigate to the new microflow):

    {{< figure src="/attachments/quickstarts/part1/edit-microflow.png" width="450px" alt="Edit microflow">}}

1. You should now see the microflow open in your editor:

    {{< figure src="/attachments/quickstarts/part1/microflow.png" width="450px" alt="Microflow">}}

1. Add a decision to the flow (The orange diamond shape) from the toolbox. 
1. Give it the caption `Has title?` and provide the following expression (function 'trim' will [always return a string](/refguide/string-function-calls/#trim)):

    ```text
    trim($Picture/Title) != ''
    ```

    {{< figure src="/attachments/quickstarts/part1/decision.png" width="450px" alt="Decision expression">}}

1. Click OK to close the window. 

Notice the line has changed to red. This is because a decision creates multiple paths within the microflow. You need to add another path for when this expression evaluates as false:

1. Add the additional path and make sure to select the **False** path as the one which goes down. 
1. You should also add the **Validation feedback** action to the false path to provide feedback to the user.
1. Double-click your validation feedback action, select **Variable** > **Picture (NativeMobile.Picture)**, **Member** > **Title**, and in **Template** add some error text such as *Please provide a title for your picture.*.
1. Repeat these steps for the **Description** attribute until your microflow looks like this:

    {{< figure src="/attachments/quickstarts/part1/expand-microflow.png" width="450px" alt="Your microflow">}}

Finally we need to commit the image to the database, and then close the page:

1. Add a **Commit object(s)** action from the toolbox to the true path.
1. Select the **Picture (NativeMobile.Picture)** entity to commit, select With **Events** > **No**, and select **Refresh in Client** > **Yes**:

    {{< figure src="/attachments/quickstarts/part1/commit-objects.png" width="450px" alt="Configure commit object">}}

1. Add a **Close page** action to the end of the microflow to ensure the user is directed back to the home page after clicking **Save**. 

You have finished your responsive app! You can run your photo album app and test it by pressing <kbd>F5</kbd> or by clicking the green play icon in the top-right corner of Studio Pro (next to the **Publish** button):

{{< figure src="/attachments/quickstarts/part1/complete.png" width="450px" alt="Run your app">}}

{{% alert type="info" %}}
Launching your app compiles your app locally on your development machine, your local host. Publishing your app will push your app to a cloud environment or web container connected to your app. If none exists, an environment will be initialized for your app on the Mendix Cloud Free Tier EU.
{{% /alert %}}

Congratulations! You successfully completed Part 1 of the quickstarts. You have your first Mendix app to prove it, and it works on almost any device. Well done! 

## 8 Continuing with the Next Tutorial

To continue learning, see Part 2: [Add a Native Mobile App](/quickstarts/part2/).
