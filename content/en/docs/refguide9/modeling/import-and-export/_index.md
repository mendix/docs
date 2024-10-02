---
title: "Import and Export Apps, Modules, Widgets, and Documents"
linktitle: "Importing and Exporting Elements"
url: /refguide9/import-and-export/
weight: 18
description: "Gives an overview of the import and export functions in Studio Pro."
---

## Introduction

In Mendix, you can import various elements others have created (apps, solutions, modules, etc.) and export elements for others to use. The Marketplace provides a platform to share components among the whole Mendix community. You can also use built-in import and export functions to share content between your own apps, import unofficial modules, and share entire apps.

There are *.mpk* packages that can contain apps, modules, or widgets, *.mxmodule* packages containing add-ons, and *.mxsolution* packages containing solutions. 

{{% alert color="warning" %}}
When you have an app package, you cannot import individual modules or widgets from within it. 
{{% /alert %}}

You can import and export the following:

* Apps
* Modules
* Widgets
* Documents such as pages or microflows

## Importing Various Elements

{{% alert color="warning" %}}
Be careful when importing elements, as you can overwrite your existing work. Pay attention to prompts and warnings along the way!
{{% /alert %}}

### Importing App and Solution Packages {#import-app-package}

A Mendix package (*.mpk*) file can store a complete Mendix app. 

You can also import a solution package (*.mxsolution*), which is a complete Mendix app that was developed as an out-of-the-box solution. In this case, the solution is [set up](/appstore/creating-content/sol-set-up/) for you. These solutions are compatible with future [upgrades](/appstore/creating-content/sol-upgrade/).

To import a complete app or solution package, follow these steps:

1. Select **Import App Package…** from the **File** menu:

    {{< figure src="/attachments/refguide9/modeling/import-and-export/file-import-app-project.png" class="no-border" >}}

2. Select your Mendix app package file and click **Open**. The **Import App Package** dialog box will appear:

    {{< figure src="/attachments/refguide9/modeling/import-and-export/import-app-package.png" class="no-border" >}}

    You have the following options in this dialog box:

    * Decide whether to store your app in a **New Mendix Team Server** (recommended), an **Existing Mendix Team Server**, **Private server**, or **Locally on disk**

    {{% alert color="info" %}} For a solution to be compatible with future upgrades, it must be set up using **New Mendix Team Server** (recommended) or **Private server** only. Solutions stored **Locally on disk** cannot be upgraded.{{% /alert %}}

    * Provide an **App name** (by default, it will be named as it was in the Mendix package file)
    * Determine the local folder where you would like to store your app in **App directory**

3. Click **OK**.

The app is imported. 

### Importing Module Packages {#import-module}

Mendix modules can either be stored in a Mendix package (*.mpk*) file or have an *.mxmodule* extension if they are [add-on or solution modules](/refguide9/configure-add-on-and-solution-modules/). 

#### Importing a Module Package Through the App Explorer

To import module packages through the App Explorer in Studio Pro, follow these steps:

1. Right-click your app in the **App Explorer** and select **Import Module Package**.
2. Select your Mendix module package file and click **Open**. The **Import Module** dialog box will open.
3. In the dialog box, choose a name for your module and select whether to create a new module or replace an existing one:

    {{< figure src="/attachments/refguide9/modeling/import-and-export/import-module.png" class="no-border" >}}

    {{% alert color="info" %}}If you replace the module with a new version, the existing user data will be retained based on the names of entities, attributes, and associations. If you delete a module and then add a newer version of it, all user data will be lost.{{% /alert %}}

4. Click **Import**. You may see a **Warning** pop-up window that will inform you of any included module dependencies that will be overwritten in your app.
5. Click **OK**. 

If you are importing a module with the *.mxmodule* extension, a dialog informing you about the imported add-on module is displayed:
{{< figure src="/attachments/refguide9/modeling/import-and-export/mxmodule-notification.png" class="no-border" >}}

You see a new or replaced module in the **App Explorer**. You also see your changes in the **Changes** pane. 

#### Importing an Add-On Module Package Through the App Directory

{{% alert color="info" %}}
You can only use this procedure to import add-on modules (*.mxmodule* files).
{{% /alert %}}

If you would like to import an add-on module (the *.mxmodule* file) to your app, you can add it manually to the app directory. Follow the steps below:

1. Go to **App** > **Show App Directory in Explorer**. 
2. Add *.mxmodule* file to the **modules** folder (you need to create this folder if it is not there). 
3. In Studio Pro, go to **App** > **Synchronize App Directory** on the menu bar.

A dialog informing you about the imported add-on module will be displayed.
{{< figure src="/attachments/refguide9/modeling/import-and-export/mxmodule-notification.png" class="no-border" >}}

The add-on module is added to the **App Explorer**.

### Importing Documents

A Mendix package (*.mpk*) file can store a Mendix module document.

The package can contain a single example of one of the following:

* Page
* Microflow
* Nanoflow
* Image
* Layout
* Menu
* Snippet
* Building block
* Page template
* Java Action
* Rule
* Enumeration
* Data Set
* Constant
* Regular Expression
* Scheduled Event
* Document Template
* Message Definition
* JSON structure
* XML schema
* Export mapping
* Import mapping
* Consumed web service
* Published REST service
* Published web service
* Published OData service

To import module documents, follow these steps:

1. Right-click a module in the **App Explorer** and select **Import document from file...**.
2. In the **Import Document from File** dialog box, select your Mendix package file containing the document you want to import and click **Open**.

    {{% alert color="info" %}}If a document with the same name already exists, you will see the **Warning** pop-up window. In that case, you can either select **Rename** to rename the element or **Cancel**.{{% /alert %}}

3. Click **OK** to import the element into your module.

    {{% alert color="info" %}}You may need to update the new element's permissions, depending on where it was originally exported from. For consistency, be sure to check the permissions on any elements imported.{{% /alert %}}

### Importing Widgets

A Mendix package (*.mpk*) file can store one or more widgets. You need to place the Mendix package file in your app directory to import it.

To import widgets, follow these steps:

1. Click the **App** menu and select **Show App Directory in Explorer**:

    {{< figure src="/attachments/refguide9/modeling/import-and-export/show-app-directory.png" class="no-border" >}}

2. Open the **widgets** folder in your app directory and put your Mendix package file there.
3. Open the **App** menu and select **Synchronize App Directory** to synchronize the changes in the app directory:

    {{< figure src="/attachments/refguide9/modeling/import-and-export/synchronize-app-directory.png" class="no-border" >}}

    {{% alert color="info" %}}You can also press <kbd>F4</kbd> to synchronize your app directory.{{% /alert %}}

4. Add your newly imported widget from the **Toolbox** or the **Add Widget** context menu.

### Importing Content from the Marketplace

To learn more about importing content from the Marketplace, see [Using Marketplace Content](/appstore/use-content/).

## Exporting Various Elements

### Exporting App Packages

To export an app, follow these steps:

1. Select **Export App Package…** from the **File** menu:

    {{< figure src="/attachments/refguide9/modeling/import-and-export/file-export-package.png" class="no-border" >}}

2. In the **Export App Package** dialog box, select the **Package Type**, the **Package destination**, and whether you want to export a snapshot of the data in the current development database:

    {{< figure src="/attachments/refguide9/modeling/import-and-export/export-app-package.png" class="no-border" >}}

    For more information on types of packages, see [Export App Package](/refguide9/export-app-package-dialog/).

    The **Existing snapshot** option will only be available when a data snapshot was created earlier using the **Add snapshot of data** menu option from the **Team** menu. It is also possible to include a new snapshot based on the current state of the local database. This option is only available after the app has been started at least once.

3. Click **Export** to create the package.

The app package is created and exported.

### Exporting Modules

To export a module, right-click a module in the **App Explorer**, and select **Export module package**.

If your module refers to other modules in the app (that is, it is not self-contained), you will see a warning pop-up window.

Select **Find usages of other user modules** to view the references, or click **Continue exporting** and you will see the **Select Dependencies** dialog box:

{{< figure src="/attachments/refguide9/modeling/import-and-export/select-dependencies.png" class="no-border" >}}

Here you can select files you would like to include in your package. This list includes any files in the **userlib** or **resources** folders in your app directory. If you do not want to include these files, you can uncheck the boxes.

{{% alert color="info" %}}To uncheck all the files quickly, press <kbd>Ctrl</kbd> + <kbd>A</kbd> to select all of the items then press <kbd>Space</kbd> to uncheck all the elements.
{{% /alert %}}

### Exporting Widgets

Widgets are automatically available in the **widgets** folder in your app directory as *.mpk* files.

### Exporting Documents

Mendix module documents can be exported as a Mendix package (*.mpk*) file.

1. Right-click the document you want to export and select **Export document to file...**.
2. In the  **Export Page to File** dialog box, enter the **Name** for your package and click **Save**.

## Read More

* [Modules](/refguide9/modules/)
* [App](/refguide9/app/)
