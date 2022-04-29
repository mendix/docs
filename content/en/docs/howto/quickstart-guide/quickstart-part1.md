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

A generalization is a parent entity your child entity inherits properties from. This is the Mendix equivalent of inheritance. You can have multiple levels of generalizations. 

For example you have created a new entity **Picture** which inherits from the system entity **Image**. However, the **Image** entity also inherits some of its properties from another system entity called **FileDocument**.

Next you must add some attributes. Remember, your entity now inherits many properties from its parent entity **-Image**. Therefore you only have to add fields for the image's **Title** and **Description** information:

1.  Under the **Attributes** tab in the entity’s properties, click **New**, name your attribute *Title*, and click **OK**:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1. Repeat the process for the description, except select **Unlimited** for the string's **Length**.
1.  Click **OK** to close the entity’s properties window:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

## 5 Creating Your App's User Interface

Now that you have created your domain model, it’s time to create your app’s front end:

1. Open the **Home_Web** page from the App Explorer. 
1. Drag and drop a **Template Grid** from the **Toolbox** onto the page. 
1.  In Mendix, in order to display data from the domain model on a page element it needs to be within a context. Double-click the template grid to open its properties, then go to the **Datasource** tab:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1.  Leave the **Datasource type** as **Database** and under **Entity** select the **Picture** entity we created earlier, then click **OK** to close the window.

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1. When Studio Pro prompts you to automatically fill the contents of the template grid, click **Yes**. 
1.  Note the red error pointers on the **New** and **Edit** buttons of the template grid. This is because there is no page connected to the buttons. To resolve this, click one of the buttons and choose to **Generate Page**:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1.  Leave the page name as is and choose the **Form Vertical** template for the page:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

Next we want to replace some of the auto-generated content inside the template grid with some sleeker building blocks:

1. Delete all the display widgets inside the grid.
1. Right-click in the empty space and select **Add building block**.
1. Search for and select **Card with image**.

A building block is a collection of pre-styled display widgets. A building block is similar to a component in React.js. Building blocks are data agnostic, meaning they are created without data and you need to link the relevant data sources for the building block’s components when including them in the page.

Next you will connect your data to the display widgets because your page is currently displaying only static resources:

{{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

To start, replace the static image with the image the user uploads to the database: 

1. Right-click on the static image viewer and click **Convert to dynamic image**. 
1. Right-click on the image viewer again, click **Select datasource**, and then search for your **Picture** entity (click **Yes** when prompted to automatically fill the contents of the widget).

Your **Images** will now be displayed from the database, but the **Labels** on the page will still be displaying their default text. To fix this, do the following:

1. Double-click to open the properties of the label captioned **Card title**.
1. Click the **Edit** button next to **Caption**.
1. In the new window, replace the caption field with a place holder (a number in curly braces starting from 1). 
1. Click to add a new **Parameter** and select the **Title** attribute.
1. Repeat this process for the label below with the caption **Supporting text**, making sure to select the **Description** attribute this time.

## 6 Defining Logic Using Microflows

There is only one step left before you can run and test your app. You have created a place to store images and a page to display them on. Most of the functionality for creating, editing, and deleting images has been handled automatically. But what if you want your app to do some custom logic? For example, what if you wanted to validate that the user has entered text for the **Title** and **Description** fields before they click **Save**? In Mendix, you can achieve this using a Microflow.

A microflow is a piece of custom logic which is represented visually in Business Process Model and Notation (BPMN). Think of a function in traditional code, except written visually. When your app compiles, it translates all your microflows into code executable by your browser. Microflows are based on Java and are executed on the server. This means an internet connection is required in order for it to execute. A microflow can only have one start point, but can often have multiple end points.

Implement custom logic with a microflow by doing the following:

1. Open the page **Picture_NewEdit** using the App Explorer.
1. Scroll down to the **Save** button at the bottom of the page. 
1. Right-click the button then click **Edit on click action**. 
1. Set the on click action type to call a microflow.
1.  Choose to create a new microflow in the **Native Mobile** module called *ACT_ValidateAndSavePicture* (click the **Show** button to quickly navigate to the new microflow):

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1. You should now see the microflow open in your editor:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1. Add a decision to the flow (The orange diamond shape) from the toolbox. 
1. Give it the caption `Has title?` and provide the expression `$Picture/Title != empty and $Picture/Title != ''`:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1. Click OK to close the window. 

Notice the line has changed to red. This is because a decision creates multiple paths within the microflow. You need to add another path for when this expression evaluates as false:

1. Add the additional path and make sure to select the **False** path as the one which goes down. 
1. You should also add the **Validation feedback** action to the false path to provide feedback to the user. 
1.  Repeat these steps for the **Description** attribute until your microflow looks like this:

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

Finally we need to commit the image to the database, and then close the page:

1. Add a commit action from the toolbox to the true path.
1.  (Select the picture Entity to commit, without events, but Refresh in client set to true):

    {{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

1. Add a **Close page** action to the end of the microflow to ensure the user is directed back to the home page after clicking **Save**. 

You have finished your responsive app! You can run your app and test it out by pressing <kbd>F5</kbd> or by clicking the green play icon in the top-right corner of Studio Pro (next to the **Publish** button):

{{< figure src="/attachments/howto/quickstart-guide/part1/REPLACE_THIS.png" >}}

Congratulations! You successfully completed Part 1 of the Quickstart guide, you have your first Mendix App to prove it, and it works on almost any device. Well done! 

To continue learning, carry on with Part 2 of the Quickstart Guide: [Upgrade to a Native Mobile App](/howto/quickstart-part2/).

You can also go to [Mendix Academy](https://academy.mendix.com/) or [Mendix Documentation](https://docs.mendix.com/) to learn more about the Mendix topics which interest you most.