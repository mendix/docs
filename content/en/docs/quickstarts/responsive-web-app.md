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
## Introduction 

This guide aims to get you started with the Mendix Platform and walks you through the steps on how to develop your first app using the **Studio Pro IDE** (integrated development environment). You will build a web app to store employee data. While Mendix can be used to create much more complex applications, we're starting with a simple use case to help you get comfortable with Studio Pro.

By following this guide, you will:

* Learn how to install and navigate Studio Pro
* Explore the platform's key features
* Find resources and learning materials to deepen your knowledge

## Getting to Know Mendix

The Mendix Platform consists of:

* **Mendix Portal** - A web-based interface for developers, administrators, and other stakeholders to manage the entire application lifecycle and collaborate through.

* **Studio Pro** - A desktop IDE for developers to create, view, and edit Mendix applications.

Make sure you are using the [latest version of Studio Pro](https://marketplace.mendix.com/link/studiopro/) when following this guide.

{{% alert type="info" %}}
When you create an app in Mendix, a [free app environment](/developerportal/deploy/mendix-cloud-deploy/#free-app) is automatically set up for you in the Mendix Cloud (public cloud service). You can run and test your app right away - no additional configuration or infrastructure setup is required to get started.
{{% /alert %}}

## Prerequisites

Before you begin, complete the following steps:

* Create your free [Mendix Account](https://signup.mendix.com/link/signup).
* [Download](https://marketplace.mendix.com/link/studiopro) and [install](/refguide/install/) Studio Pro.
* Open Studio Pro and sign in with your Mendix Account details (click **Go to Web Sign In**):

    {{< figure src="/attachments/quickstarts/part1/3. login.png" width="450px" alt="Sign in to Studio Pro">}}

## Create the App

You can start building your first app directly in Studio Pro by clicking **Create New App**. Next, select **Create a new app in the Mendix Portal** (unless you're working offline, in which case you can only create a blank template locally). 

{{< figure src="/attachments/quickstarts/part1/4.1 CreateNewApp.png" width="450px" alt="Sign in to Studio Pro">}}

Open a page to **choose your starting point**.

You can find a wide variety of Starter Apps to choose from in the [Mendix Marketplace](https://marketplace.mendix.com/link/contenttype/102). From web and native mobile, to GenAI and augmented reality, there are dozens of platform-supported templates to start from and many more templates created by our amazing community.

Select the **blank web app template**, and on the next screen, click **Use This Starting Point**:

{{< figure src="/attachments/quickstarts/part1/4.2 UseThisStartingPoint.png" width="450px" alt="se the Blank web app template as a starting point">}}

Next, a window will appear to enter a name for your app, whether or not to enable online services, as well as choose the file path for the project, and the default language for the app. **Enter a name for the app** and leave everything else as **default**:

{{< figure src="/attachments/quickstarts/part1/4.3 ConfirmCreateApp.png" width="450px" alt="Confirm your choice by clicking create app.">}}

Confirm by clicking **Create App**. 

{{% alert type="info" %}}
A starter app is a ready-to-use app template that gives you a basic structure, like navigation, layout, and common components, so you don’t have to start from scratch. It helps you get up and running faster while still giving you full control to customize your app as needed.
{{% /alert %}}

## Explore Studio Pro Interface

You should see the app open in **Studio Pro**, with the **welcome page** open. Before we continue, let's take a quick tour of the main interface:

{{< figure src="/attachments/quickstarts/part1/5. StudioProInterface.png" width="450px" alt="Have a look around the Studio Pro Interface">}}

### Top Bar

The top bar includes several key elements:

* The Global Navigation Menu (Bento menu), with links to the Mendix Portal
* Several dropdown menus with items for fundamental app development tasks such as creating a deployment package, uploading to a version control server, and more.
* Quick-access buttons to do the following:

    * Publish, run locally, and view your app
    * Access the [Community](https://community.mendix.com/index3.html), [Marketplace](https://marketplace.mendix.com/link/contenttype/102), and [Maia](/refguide/mendix-ai-assistance/#maia-capabilities-in-mendix-studio-pro)

### Working Area 

**At the center of the screen** is the **working area**, where you'll see the currently open document tab. It's the main space within the IDE where you design, model, and configure application components visually. Think of it as the code editor in a text-based programming IDE.

{{% alert type="info" %}}
When you launch **Studio Pro** for the first time, you’ll see the **Welcom** tab. From here, you can access:

* [Maia Learn](/refguide/maia-learn/) – learning materials to help you get started

* [Maia Chat](/refguide/maia-chat/) – an AI-powered assistant for quick support and guidance

We recommend watching the introduction videos to get familiar with the basic concepts of Mendix development before you start building your app.
{{% /alert %}}

### App Explorer

On the **left side** of the screen, you'll find the **App Explorer**, which shows the complete structure of your app that consists of individual files (documents) and settings that are grouped in folders and modules.

### Dockable Panels

On the **right** and **bottom** of the screen are **dockable panes** that display context-specific information and tools. These include panes for managing data, seeing changes, and errors, accessing AI features, and more. You can customize your workspace by resizing, docking, or hiding these panes to suit your workflow. More options can be found under the **View** menu item.

## Modules

Before you start building your app, it's essential to understand the concept of **modules**, which is a way to split the functionality of your Mendix application into separate parts. Learn more about modules and different module types [here](/refguide/modules/).

Each module has its own security and access settings, which you can configure to accommodate different users and use cases. Modules can access data, logic, and pages from other modules. 

When your app is deployed locally or in a cloud environment, all modules are bundled together into a single package.

## Create a Domain Model

After getting familiar with the Studio Pro interface, you can begin building your app, starting with the data model. In Mendix, the data structure of your app is defined using the [domain model](/refguide/domain-model/). Each module has a domain model that describes the data used within that [module](/refguide/modules/). 

{{% alert type="info" %}}
Domain models are comprised of [entities](/refguide/entities/) (similar to a table in traditional SQL). Entities have [attributes](/refguide/attributes/) (similar to fields). [Properties](/refguide/entities/#properties) define the names of the entities. Entities can relate to each other as one-to-one, one-to-many, or many-to-many. The relations between entities are called [associations](/refguide/associations/). Entities can inherit their properties and attributes from other entities by creating a [Generalization](/refguide/generalization-and-association/#generalization-specialization-and-inheritance) of an entity.
{{% /alert %}}

### Create an Entity 

To create an entity, follow these steps:

1. In the **App Explorer** (on the left), double-click **Domain Model** under **MyFirstModule**.
1. From the **Toolbox** (on the right), drag and drop the entity (blue box) into the central **Working Area**.
1. Double-click the newly added entity in the **Working Area** to open its **properties** dialog box.
1. Name the entity **Employee**:

    {{< figure src="/attachments/quickstarts/part1/7.1 EntityPropertiesWindow.png" width="450px" alt="The properties window of the Employee Entity">}}

### Create Attributes

You have created a new persistable entity called **Employee**. This means the entity and its attributes will be stored in the Database when it is committed.  Next, you have to add attributes. You only have to add fields for the employee's name, job role, and employee ID:

1. In the properties dialog box, click **New** under **Attributes**.
1. Name your attribute **FirstName**, leave all the other settings default, then click **OK**.
1. Repeat the steps above to create two additional **string** attributes, called **LastName** and **JobRole**.
1. Add a final attribute called **EmployeeID**, as an **Autonumber** (an automatically generated number).
1. Click OK to close the properties dialog box:

    {{< figure src="/attachments/quickstarts/part1/7.2 CreateAttributes.png" width="450px" alt="Create attributes on an entity">}}

{{% alert type="info" %}}
You can create a domain model by simply describing your application using [Maia for Domain Model](/refguide/maia-for-domain-model/) an AI-powered tool that generates domain models based on your input.

To use it, **click Maia for Domain Model** in the **Working Area**, then describe your application in the chat box on the right.

In our case, you can ask Maia: “Create a domain model that stores employee information: first name, last name, job role, and employee ID.” 
{{% /alert %}}

### Add an Association

An employee will be required to complete and upload important documents and contracts connected to their role. We need to adapt our domain model to store these documents. To do this, we can create a new entity, called Document, and connect it to the Employee entity using an association. Associations define how entities relate to each other. Associations can either be one-to-many, one-to-one, or many-to-many:

1. Add a new entity and name it Document.
1. Next to Generalization, click **Select**.
1. Search for **FileDocument**, and select it.
1. Click **OK** to confirm your choices.
1. Click the new Document entity to select it. Then, once it is selected, **click and drag** from its border towards the Employee entity. A line should appear and connect to the employee entity. This is the association, created as a one-to-many (1 employee can upload many documents):

    {{< figure src="/attachments/quickstarts/part1/7.3 CreateAssociation.png" width="450px" alt="Create an Association between the two entities">}}

{{% alert type="info" %}}
**Generalizations** allow an entity to inherit properties from another. When an entity is a generalization of another, it inherits all the attributes of the original. In this case, Document is a generalization of FileDocument, which will allow it to store anything you might consider a file (this includes images, PDFs, Microsoft Office documents, and more).
{{% /alert %}}

## Create User Interface

Now that you have created your domain model, you can develop the front-end of your application. Your page is pre-filled with some elements you can add to, edit, or delete. At the top of the page, the label **Home**, along with some welcome text below it, can be seen. 

### Add Page Element

1. Double click on **Home_Web** under **MyFirstModule** in App Explorer
1. Select the **Home label** and start typing to update the caption to Employee Overview.
1. Select the **Getting Started** label below, and delete it by either right-clicking it and choosing delete or by hitting the delete button on your keyboard.
1. **Delete** all other pre-populated content on the screen (select the element and hit delete on your keyboard)
1. Drag-and-drop a **Data Grid 2** from the **Toolbox (Widgets > Data containers)** onto your page in the **Working Area**. 
1. **Double-click** the data grid element to open its properties. 
1. Under **Data source**, click **edit**, then ensure **Database** is selected for **Type**.
1. On the **General tab**, next to **Entity**, select the **Employee entity** that you’ve created and Click **OK**.
1. When Studio Pro prompts you to select the columns, leave everything selected and click **Generate**.
1. Click **OK** to close the properties Window:

    {{< figure src="/attachments/quickstarts/part1/8.1 DataGrid2.png" width="450px" alt="A data grid 2 connected to the Employee Entity">}}

{{% alert type="info" %}}
A Data Grid is a Context Widget. To display data from the domain model using a widget, the widget needs to be within the context widget (Data view, Data grid, Template grid, and List view are examples of context widgets)
{{% /alert %}}

### Edit Page Elements

Next, we need to modify some of the elements on the page.

1. On the **Data Grid 2**, you should have a button captioned **New Employee**. It will have a red notification next to it indicating there is no page connected to the button. Right-click the button and choose **Generate on click page**.
1. In the dialog window, **enter a name** for the new page as Employee_NewEdit.
1. Under Navigation layout, click the dropdown and select **PopupLayout(Atlas_Core)**.
1. Select the **Form Vertical layout** for the page and click **OK**:

    {{< figure src="/attachments/quickstarts/part1/8.2a AddNewPage.png" width="450px" alt="Add a New Page called Employee_NewEdit">}}

1. In the **Data Grid 2**, there is another button with the image of a pencil. This button needs to be connected to the same page we just created as well, so that users may edit the details of the employees. **Right-click** the button, choose **Select on click page**, then select the **Employee_NewEdit** page we just created.
1. Next, **open** the **Employee_NewEdit** page.
1. **Add** a **Data grid 2** from the toolbox onto the page below the Employee ID field. **Double-click** it to open its properties.
1. Next to **Data source**, click **Select**.
1. Search for the **Document entity** (But via the page parameter “Employee”), and click select:

    {{< figure src="/attachments/quickstarts/part1/8.2b DataOverAssociation.png" width="450px" alt="Display Data connected over association in the new datagrid 2">}}

1. The new data grid 2 will have new and edit buttons, which will expect a new page to be connected. Once again, **right-click** either button and choose to **generate page**.
1. **Name** the page **Document_NewEdit**, select the **Pop-up layout** under Navigation Layout, and choose the **Form Vertical template**.
1. Click **OK** to confirm your choices. (Don’t forget to connect the edit button inside the Data grid to the new page as well)

## Creating Application Logic {#create-application-logic}

Now that we have created a basic front end for your app, we can add some logic. Let's add a microflow that will validate the employee’s details when the user clicks on save.

1. Starting on the **Employee_NewEdit** page in the **App Explorer**, **right-click** the save button at the bottom of the page and choose to **edit the on-click action**.
1. In the on-click option dropdown, select **Call a Microflow**.
1. Next to Microflow, click **Select**.
1. A window will appear, allowing you to select an existing microflow or **create a new one**.
1. Click to create a **New Microflow**.
1. **Name** the microflow **Act_Employee_NewEdit** and click **OK**.
1. In the newly created microflow, look for an orange **Decision** and **drag it** onto the flow.
1. **Double-click** the decision to open its **properties**.
1. **Enter the caption** as "Has Firstname?"
1. **Under Expression**, add "trim($Employee/FirstName)!= empty". This will remove any whitespace from the string and then check to ensure there are characters in the string attribute.
1. As the expression above results in a **true** and **false** result, we need to create a **branching path** from the decision - a path for each possible result. **Select** the decision, then from a corner **click and drag** away to create the new alternative path. Ensure to **define** which path is for the true result and the false result by **right-clicking** them both and under **condition value** choosing true and false.
1. On the **false path**, add a **validation feedback action**. Double click to open its **properties**, enter the following details, and click **OK**:

1. Variable → Employee
1. Member → FirstName
1. Template → Please enter a Firstname for the employee

1. Now on the **true path**, repeat this step for the **LastName** and **JobRole** attributes as well.

 a. You can copy and paste the decision and validation feedback action to save time (But don’t forget to update the actions for each attribute)

1. At the end of the flow on the true path, add a **commit action**. Open its properties by double-clicking the action and ensure **Employee** is selected for Object or List, and change **refresh in client** to **Yes**. Click **OK** to close to window.
1. Add a **close page action** after the commit action:

    {{< figure src="/attachments/quickstarts/part1/9. Microflow.png" width="450px" alt="The completed validation microflow">}}

## Deploy App

Your app is ready to deploy! Click the **green run** button in the top bar menu to run your app locally (you can also hit **F5** on your keyboard). Once your app is running, clicking the red **Stop** button will shut down your local copy of the app. These options can also be found in the console, above the console log entries.

To deploy your app to a cloud environment, you can hit **publish** to deploy your app to the Mendix Free cloud. The Mendix Free cloud is a free testing environment that every app has access to. The environment is automatically created the first time you publish your app, and there is no configuration required to set it up.

{{% alert type="info" %}}
To deploy your app to the Mendix Cloud (Paid), there are multiple options for hosting. Please refer to this guide on [our hosting options](/developerportal/deploy/mendix-cloud-deploy/) for more information on which plan is best for your project.
{{% /alert %}}

## Finished!

Congratulations on completing and deploying your very first Mendix App! Next, head over to the [Academy](https://academy.mendix.com/link/home) and get started with our **Crash Course** learning plan, or continue learning here in our docs pages by continuing onto part two. For videos on the latest news and updates, head to our [YouTube page](https://www.youtube.com/c/MendixCommunity). Or see what our awesome community is up to on our [Medium publication](https://medium.com/mendix). 

Looking to get in touch with us or the community? Join our [Slack community workspace](https://join.slack.com/t/mendixcommunity/shared_invite/zt-39m9sfzsl-so7j70WRyj_4gJ33gaVXOw) and get involved.

## Read More

* [Studio Pro Overview](/refguide/studio-pro-overview/) – describes Studio Pro tabs, menus, and shortcut keys
* [Development Best Practices](/refguide/dev-best-practices/) – a reference for adopting consistent naming and modeling conventions while developing your Mendix apps
* [Starting with App from a Spreadsheet](/refguide/app-from-spreadsheet/) – describes importing a Microsoft Excel spreadsheet and building an app using your data
* [Mendix Academy Become a Rapid Developer](https://academy.mendix.com/link/paths/31/Become-a-Rapid-Developer) – the learning path recommended for new Mendix users who want to create their first app using low-code
* [Mendix Academy Crash Course](https://academy.mendix.com/link/paths/82/Crash-Course) – the learning path recommended for new Mendix users who are also experienced developers
