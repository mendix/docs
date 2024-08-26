---
title: "Building a Responsive Web App"
url: /quickstarts/responsive-web-app/
weight: 10
description: "Learn the basics of making an app in a responsive web profile."
aliases:
    - /quickstarts/part1/
    - /refguide/quickstart-part1/
    - /refguide9/quickstart-part1/
---

## Introduction

This quick start tutorial teaches you how to get up and running with the Mendix Platform and start developing your first app in Mendix Studio Pro. You will learn the basics of Studio Pro, handle data using the domain model, populate your app's pages with dynamic data, and create custom app logic using a microflow. You will be building a responsive web app that is compatible with all desktop, tablet, and mobile browsers.

After completing this tutorial, you will have a photo album app that allows app end-users to upload, edit, and display pictures for their cherished memories to be preserved. 

### Getting to Know Mendix

This tutorial teaches you several key Mendix concepts, such as adding an entity to the [domain model](/refguide/domain-model/) (a visual model that describes your app's information or data in an abstract way), creating basic pages that use building blocks and design properties, and modeling your first microflow. 

A [microflow](/refguide/microflows/) is a visual way of expressing logic or code that is compiled into executable code at runtime. Microflows are commonly used to perform actions such as creating and changing objects, showing pages, and making choices.

[Mendix Studio Pro](/refguide/) is the Mendix integrated development environment (IDE) for professional developers. Use the [latest version of Studio Pro](https://marketplace.mendix.com/link/studiopro/) when completing the tutorial for ease of use and security. Please note some of the screenshots in this tutorial might look a little different than your your version

Every app created with Studio Pro automatically provisions a [Free App environment](/developerportal/deploy/mendix-cloud-deploy/#free-app) the first time it is deployed to Mendix Cloud, so you do not have to waste time provisioning a testing environment.

You do not need any additional software configured on your machine in order to start.

To learn more about Mendix concepts, check out the various sections of the [Platform Evaluation Guide](https://www.mendix.com/evaluation-guide/).

## Prerequisites 

Before starting this tutorial, make sure you have completed the following prerequisites:

* Create your [free Mendix account](https://signup.mendix.com/link/signup/?source=quickstart-part1&medium=mxdocs), which takes only two minutes to complete
* [Download](https://marketplace.mendix.com/link/studiopro/) and [install](/refguide/install/) Mendix Studio Pro
* If you are working on a Mac, complete [Configuring Parallels](/refguide/using-mendix-studio-pro-on-a-mac/) to install Studio Pro on your Mac

## Starting Your App

You can select one from many starting points for your Mendix app. It is key that you select a starting point with a configured responsive web navigation profile for this quick start tutorial, as the app you will develop needs to work for web browsers.

A page defines the end-user interface in a Mendix app. You can create and edit pages using the page editor. All the pages are based on layouts and templates. A page [layout](/refguide/layout/) defines a page's structure (such as, navigation element location and areas for content), and a page [template](/refguide/page-templates/) is a completely editable starting point for a new page (you can also start with a blank template to build from scratch).

{{< figure src="/attachments/quickstarts/responsive-web-app/3-startingtemplate.png" width="450px" alt="Blank template" class="no-border" >}}

### Selecting the App Template

To select the best app template, follow these steps:

1. Starting from Studio Pro, click **Create New App**:

    {{< figure src="/attachments/quickstarts/responsive-web-app/starting-point.png" width="450px" alt="New app" class="no-border" >}}

2. Search for the **Blank Native Mobile App** and click **Use this starting point**:

    {{% alert color="info" %}}**Why select this template?**</br>
    Selecting the **Blank Native Mobile App** template lets you start with a native mobile navigation profile that is already configured and set up for your app. {{% /alert %}}

    {{% alert color="info" %}}**Does that mean this app is native mobile only?**</br>
    No. The blank native mobile app template also comes with a responsive web navigation profile configured. This means your app is accessible on both web browsers and natively on mobile devices.{{% /alert %}}

3. Name your app *Quickstart App* and click **Create app**:

    {{< figure src="/attachments/quickstarts/responsive-web-app/3-createnameapp3.png" width="400px" alt="Create app" class="no-border" >}}

4. Wait a few minutes for your app to be created, its [Team Server](/developerportal/general/team-server/) to be initialized, and a local copy of the app to be downloaded to your machine. After that, the app opens with your app’s home page called **Home_Web**.

    {{< figure src="/attachments/quickstarts/responsive-web-app/home-web.png" width="400px" alt="Home Web page" class="no-border" >}}
    
## Exploring Studio Pro

Now that you have started your app in Studio Pro, you can take a quick (and optional) tour. If you know Studio Pro already, you can skip this section.

Open up your version of Studio Pro and take a look at it all at once. There is a lot of power, but it can be confusing at first glance. Luckily it is easy to understand in sections. For even more detail, see the [Studio Pro Overview](/refguide/studio-pro-overview/).

Simply put, the center of Studio Pro hosts a [working area](/refguide/studio-pro-overview/#working-area) where you can work on an open document. Surrounding this work area are various panes, which you will learn more about in the sections below. Finally, if you wish to change the language you work in (and that your end-user will use), see the [status bar](/refguide/studio-pro-overview/#status-bar) at the bottom.

The Studio Pro configuration you see is completely editable. You can add or hide panes as desired (you can find more panes under the [View](/refguide/view-menu/) menu as well as reset your view back to the default settings if you wish). You can also quickly hide all of Studio Pro's panes by enabling **Distraction Free Mode** with <kbd>Shift</kbd> + <kbd>F11</kbd>.

### Top Bar

The top bar contains the menus, buttons, and other UI elements you need for fundamental app development tasks. For example, you can run your app by clicking **Run Locally** ({{% icon name="controls-play" %}}). 

{{< figure src="/attachments/quickstarts/responsive-web-app/4.1-topbar1.png" width="450px" alt="Studio Pro" class="no-border" >}}

For more information on menus and functions, see the [Top Bar](/refguide/studio-pro-overview/#top-bar) section of *Studio Pro Overview*.

### App Explorer

You can navigate through your app using the [App Explorer](/refguide/app-explorer/), which is the pane on the left side of your screen. This is where you can create and explore new documents and [modules](/refguide/modules/) in your app:

{{< figure src="/attachments/quickstarts/responsive-web-app/tour-left.png" width="300px" alt="App Explorer as left dockable pane" class="no-border" >}}

Any [Marketplace modules](/appstore/modules/) you download appear under **Marketplace Modules** > **App**.

{{< figure src="/attachments/quickstarts/responsive-web-app/4.2-styles.png" width="300px" alt="Modules" class="no-border" >}}

### Bottom Dockable Panes

Look at the bottom dockable pane of Studio Pro:

{{< figure src="/attachments/quickstarts/responsive-web-app/tour-bottom.png" width="400px" alt="Bottom Dockable Pane" class="no-border" >}}

Here you will find some separate default dockable panes:

* [Stories](/refguide/stories-pane/) – displays the active user stories added in your [project management tool](/developerportal/project-management/)
* [Changes](/refguide/changes-pane/) – displays a list of all changes in the app since the last commit to the Team Server
* [Errors](/refguide/errors-pane/) – displays any errors found within your app 

For more information on available panes, see the [Best Practice Recommender](/refguide/view-menu/#best-practice-recommender) and [Console](/refguide/view-menu/#console) sections of *View Menu*.

### Right Dockable Panes

Look at the right dockable pane of Studio Pro:

{{< figure src="/attachments/quickstarts/responsive-web-app/tour-right.png" width="300px" alt="Right Dockable Pane" class="no-border" >}}

Here you will find some more separate default dockable panes:

* [Properties](/refguide/view-menu/#properties) – displays all the properties of the currently selected context element 
* [Toolbox](/refguide/view-menu/#toolbox) – a list of things (which change depending on the context) you can add to the current document

For additional information on available panes, see the [Integration](/refguide/view-menu/#data-hub) and [Connector](/refguide/view-menu/#connector) sections of *View Menu*.

## Creating Your App's Domain Model {#domain-model}

In Mendix, you define your app's data structure in the [domain model](/refguide/domain-model/).

The domain model is a visual representation of your app’s database. Each module in your app (meaning, modules created by you or your app team, modules downloaded from the Marketplace, or system nodules) can have their own individual models, which are combined and translated into a database automatically at runtime. 

Domain models are comprised of [entities](/refguide/entities/) similar to a table in traditional SQL. Entities have [attributes](/refguide/attributes/) (similar to fields), and they can relate to other entities (including ones in other modules or even other apps). They can relate to each other as one-to-one, one-to-many, or many-to-many associations.

When you run your app locally or deploy it for the first time, the Mendix Runtime compiles your app’s domain models and creates the underlying database. Any subsequent changes will be seen as updates to the database.

Mendix by default uses its own built-in HSSQL database, but Mendix also supports several alternative database types, such as PostgreSQL and Microsoft SQL Server. 

{{< figure src="/attachments/quickstarts/responsive-web-app/5.1-log.png" width="400px" alt="Log" class="no-border" >}}

### Creating an Entity to Store the Images

To create an entity to store the images used in your app, follow these steps:

1. Open the domain model for the native mobile module by double-clicking it in the **App Explorer**:

    {{< figure src="/attachments/quickstarts/responsive-web-app/5.2-loginentity.png" width="400px" alt="Login entity" class="no-border" >}}
    
    Notice there is already an entity here called **Login**, which is part of the template and is used only for native mobile authentication. You can ignore this for now.

2. Drag a new **Entity** from the **Toolbox** into the domain model (or right-click in the domain model and select **Add entity**). This entity will store all your uploaded images in the database. 

    {{< figure src="/attachments/quickstarts/responsive-web-app/5.2-newentity2.png" width="400px" alt="Open properties" class="no-border" >}}
    
3. Double-click the new entity to open its properties dialog box:

    {{< figure src="/attachments/quickstarts/responsive-web-app/5.3-entityprops3.png" width="400px" alt="Edit configuration" class="no-border" >}}

4. Name the entity *Picture*, then click **Generalization** > **Select**. 
5. Search for and select the **Image** entity (found in the **System** module).

    A generalization is a parent entity from which the child entity inherits properties. This is the Mendix equivalent of inheritance. You can have multiple levels of generalizations. 
    
### Creating Attributes

You have created a new entity called **Picture** that inherits from the **System** entity called **Image**. However, the **Image** entity also inherits some of its properties from another **System** entity called **FileDocument**. This means you must add some attributes. Remember, your entity now inherits many properties from its parent entity **Image**. Therefore, you only have to add fields for the image's **Title** and **Description** information.

1. Under the **Attributes** tab in the entity’s properties, click **New**, name your attribute *Title*, and click **OK**:

    {{< figure src="/attachments/quickstarts/responsive-web-app/5.3-addattribute4.png" width="400px" alt="Name attribute" class="no-border" >}}

2. Repeat the step above to add an attribute called *Description*, but select **Unlimited** for the string's **Length**:

    {{< figure src="/attachments/quickstarts/responsive-web-app/5.3-picentityprops5.png" width="400px" alt="Entity properties" class="no-border" >}}
    
3. Click **OK** to close the entity’s properties dialog box.

## Creating Your App's User Interface

Now that you have created your domain model, it is time to create your photo album app’s front end. To do so, you will employ regular widgets and context widgets:

* [Widgets](/refguide/page-resources/) – Widgets are pre-made user interface components. Widget development in Mendix is based on React for both web and native mobile. A widget can either be a single visual component (like a button), or a collection of components grouped together for ease of use. There are also many [platform-supported widgets](/appstore/widgets/) available in the Mendix Marketplace.
* Context widgets – A context widget displays data from the domain model. In Mendix, there are four main context widgets: 
    * [Data view](/refguide/data-view/) – displays a single record
    * [Data grid](/refguide/data-grid/) – displays many records in a table format
    * [List view](/refguide/list-view/) – displays many records in a scrollable list
    * [Template grid](/refguide/template-grid/) – displays many records in configurable columns and rows

### Configuring a Template Grid {#template-grid}

Now it is time to build your photo album app:

1. Open the **Home_Web** page from the **App Explorer**. 
2. Drag a **Template Grid** from the **Toolbox** onto the page. You can find this by opening the **Data containers** section, or by searching for this container.
3. In Mendix, in order to display data from the domain model on a page element, the element needs to be within a context. Double-click the template grid to open its properties:

    {{< figure src="/attachments/quickstarts/responsive-web-app/6-database1.png" width="450px" alt="Open data properties" class="no-border" >}}

4. On the **Data source** tab, select the **Picture** entity you created earlier for the **Entity (path)**, then click **OK** to close the window:

    {{< figure src="/attachments/quickstarts/responsive-web-app/6-database2.png" width="400px" alt="Configure data source" class="no-border" >}}

5. When Studio Pro prompts you to automatically fill the contents of the template grid, click **Yes**.
6. Note the red error pointers on the **New** and **Edit** buttons of the template grid. This is because there is no page connected to the buttons.

    {{< figure src="/attachments/quickstarts/responsive-web-app/6-newbuttons4.png" width="450px" alt="Connect page" class="no-border" >}}

7. To resolve this, right-click each button and select **Generate Page**.
8. In the **Create Page** wizard that opens, leave the page name as is, and select the **Form Vertical** template for the page.

### Using Building Blocks

Next, you need to replace some of the auto-generated content inside the template grid with some sleeker building blocks. A building block is a collection of pre-styled display widgets, and it is similar to a component in React.js. Building blocks are data agnostic, which means they are created without data and you need to link the relevant data sources for the building block’s components when including them in a page.

To add a building block to your app's UI, follow these steps:

1. Delete all the display widgets inside the grid (ensure you have switched from **Design** mode to **Structure** mode so you can delete the widgets easily).
2. Right-click in the empty space and select **Add building block**.
3. Search for and select **Card action with image**:

    {{< figure src="/attachments/quickstarts/responsive-web-app/6-card5.png" width="400px" alt="Card action" class="no-border" >}}

### Configuring the Display Widgets

Next, you need to connect your data to the display widgets, because your page is currently displaying only static resources. 

To start, replace the static image with the image the app end-user uploads to the database by following these steps:

1. Right-click the static image viewer and click **Convert to dynamic image**. 
2. Right-click the image viewer again, click **Select data source**, and then search for and select your **Picture** entity. Click **Yes** when prompted to automatically fill the contents of the widget:

    {{< figure src="/attachments/quickstarts/responsive-web-app/6-fillcontents6.png" width="400px" alt="Autofill" class="no-border" >}}

3. The **Images** will now be displayed from the database, but the **Labels** on the page will still display their default text. To fix this, double-click the label captioned **Card title** to open its properties.
4. Click the **Edit** button next to **Caption**.
5. In the new dialog box, replace the caption with the placeholder *{1}*. 
6. Click to add a new **Parameter** and select the **Title** attribute:

    {{< figure src="/attachments/quickstarts/responsive-web-app/6-addattributes7.png" width="400px" alt="Add attributes" class="no-border" >}}

7. Repeat this process for the other label with the caption **Supporting text**, making sure to select the **Description** attribute this time.

## Defining Logic Using Microflows {#microflow-use-case}

There is only one step left before you can run and test your photo album app. You have created a place for storing images and a page for displaying them. Most of the functionality for creating, editing, and deleting images has been handled automatically. 

But what if you want your app to perform some custom [logic](/refguide/application-logic/)? For example, what if you wanted to validate that the end-user entered text for the **Title** and **Description** fields before they clicked **Save**? In Mendix, you can achieve this using a microflow.

A microflow is a piece of custom logic that is represented visually in [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN). Think of a function in traditional code, except written visually. When your app compiles, it translates all your microflows into code executable by your browser. Microflows are based on Java and are executed on the server, which means an internet connection is required for it to execute. A microflow can only have one start point, but it can often have multiple end points.

### Implementing Custom Logic

To implement custom logic with a microflow, follow these steps:

1. Open the page **Picture_NewEdit** using the App Explorer.
2. Scroll down to the **Save** button at the bottom of the page. 
3. Right-click the button and select **Edit on click action**. 
4. Set the **On click** action to **Call a microflow**.
5. Click **New** in the **Select Microflow** dialog box in order to create a new microflow.
6. Create a new microflow in the **Native Mobile** module called *ACT_ValidateAndSavePicture*:

    {{< figure src="/attachments/quickstarts/responsive-web-app/7-editonclick1.png" width="450px" alt="Edit microflow" class="no-border" >}}

7. Click **Show** to quickly navigate to the new microflow and see it open in your editor:

    {{< figure src="/attachments/quickstarts/responsive-web-app/7-microflow2.png" width="450px" alt="Microflow" class="no-border" >}}

8. Add a **Decision** to the microflow (via the orange diamond icon in the editor's top bar).
9. Give the decision the caption *Has title?* and input the following **Expression**:

    ```text
    trim($Picture/Title) != ''
    ```
    
    The [trim](/refguide/string-function-calls/#trim) function always returns a string:

    {{< figure src="/attachments/quickstarts/responsive-web-app/decision.png" width="450px" alt="Decision expression" class="no-border" >}}

10. Click **OK** to close the dialog box and notice the microflow line has changed to red. This is because a decision creates multiple paths within the microflow. You need to add another path for when this expression evaluates as false.
11. Add the additional path by clicking the activity's red dot and dragging a connection out of it, making sure to select the **False** path as the one that goes down. 
12. Add the **Validation feedback** action to the false path (so that feedback is provided to the end-user).
13. Double-click the validation feedback action, select **Variable** > **Picture (NativeMobile.Picture)**, then select **Member** > **Title**, and in **Template**, add some error text (for example, *Please provide a title for your picture.*).
14. Repeat these steps for the **Description** attribute until your microflow looks like this:

    {{< figure src="/attachments/quickstarts/responsive-web-app/7-reddots4.png" width="450px" alt="Your microflow" class="no-border" >}}
    
### Finishing Up

Finally, the image needs to be committed to the database and the paged closed:

1. Add a **Commit object(s)** action from the **Toolbox** to the true path.
2. Select the **Picture (NativeMobile.Picture)** entity to commit, and configure **Events** > **No** and **Refresh in Client** > **Yes**:

    {{< figure src="/attachments/quickstarts/responsive-web-app/7-configurecommit5.png" width="450px" alt="Configure commit object" class="no-border" >}}

3. Add a **Close page** action to the end of the microflow to ensure the end-user is directed back to the home page after clicking **Save**. 

You have now finished developing your responsive app! You can run your photo album app and test it by pressing <kbd>F5</kbd> or by clicking **Run Locally** ({{% icon name="controls-play" %}}). Your app should look like this:

{{< figure src="/attachments/quickstarts/responsive-web-app/7-closepageaction6.png" width="450px" alt="Run your app" class="no-border" >}}

{{% alert type="info" %}}
Running your app compiles it locally on your development machine (your local host). Publishing your app pushes it to a cloud environment or web container connected to the app. If none exists, an environment is initialized for your app on the Mendix Cloud Free Tier EU.
{{% /alert %}}

Congratulations! You successfully completed this quickstart tutorial. You have your first Mendix app to prove it, and it works on almost any device. Well done! 

{{< figure src="/attachments/quickstarts/responsive-web-app/8-congrats1.png" width="550px" alt="Congratulations" class="no-border" >}}

## Continuing with the Next Tutorial

To continue learning, see [Add a Native Mobile App](/quickstarts/native-mobile-app/).
