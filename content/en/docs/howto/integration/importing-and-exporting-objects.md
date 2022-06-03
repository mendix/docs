---
title: "Import & Export Objects"
url: /howto/integration/importing-and-exporting-objects/
category: "Integration"
weight: 2
tags: ["mpk", "import", "export", "document", "module", "widget"]
---

## 1 Introduction

In Mendix, you don't need to reinvent the wheel. You can save time by importing modules others have created and by exporting new modules for others to use. The Marketplace provides this functionality on a macro level. You can also use 's built-in import and export functions to share content between your own apps, import unofficial modules, and share entire projects.

{{% alert color="warning" %}}
Please note throughout this how-to that Mendix packages are stored as Mendix package (*.mpk*) files. These are not compatible with each other; you cannot, for example, import individual *modules* from a *project* package.
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Import and export the following Studio Pro objects:
    * projects
    * modules
    * widgets
    * module documents such as pages or microflows

## 2 Importing Objects

{{% alert color="warning" %}}
Be careful when importing objects, as you can overwrite your existing work. Pay attention to prompts and warnings along the way!
{{% /alert %}}

### 2.1 Importing App Packages

A Mendix package (*.mpk*) file can store a complete Mendix project.

To import a complete Mendix app package, follow these steps:

1. Click the **File** menu in  and select **Import App Package**:

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/file-import-app-project.png" >}}

2. Select your Mendix app package file and click **Open**. The **Import App Package** dialog box will appear:

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/18582101.png" >}}

    You have the following options in this dialog box:

    * Decide whether to store your app in a **New Mendix Team Server** (recommended), an **Existing Mendix Team Server**, or **Locally on disk**
    * Provide an **App name** (by default, it will be named as it was in the Mendix package file)
    * Determine the local folder where you would like to store your app in **App directory**
   
3.  Click **OK**, and your app will be loaded in .

### 2.2 Importing Module Packages

A Mendix package (*.mpk*) file can store a Mendix app module.

To import module packages, follow these steps:

1. Right-click your app in the **App Explorer** and select **Import Module Package**.

2. Select your Mendix module package file and click **Open**. The **Import Module** dialog box will open.

3. In the dialog box, choose a name for your module and select whether to create a new module or replace an existing one:

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/18582113.png" >}}

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/18582112.png" >}}

    {{% alert color="info" %}}If you replace the module with a new version, the existing user data will be retained based on the names of entities, attributes, and associations. If you delete a module and then add a newer version of it, all user data will be lost.
    {{% /alert %}}

4. Click **Import**. You may see a **Warning** pop-up window that will inform you of any included module dependencies that will be overwritten in your app.

5. Click **OK**. You will see your new or replaced module in the **App Explorer**.

    You will also see your changes in the **Changes** section. In this example, the existing module has been deleted and replaced by the newly imported module:

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/18582109.png" >}}

### 2.3 Importing Module Documents

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

To import module objects, follow these steps:

1. Right-click a module in the **App Explorer** and select **Import document from file...**

    The **Import Document from File** dialog box appears.

2.  Select your Mendix package file containing the document you want to import, and click **Open**.

    {{% alert color="info" %}}If a document with the same name already exists, you will see the **Warning** pop-up window. In that case, you can either select **Rename** to rename the object or **Cancel**.
    {{% /alert %}}

3. Click **OK** to import the object into your module:

    {{% alert color="info" %}}You may need to update the new object's permissions, depending on where it was originally exported from. For consistency, be sure to check the permissions on any objects imported.
    {{% /alert %}}

### 2.4 Importing Widgets

A Mendix package (*.mpk*) file can store one or more widgets. You need to place the Mendix package file in your app directory to import it.

To import widgets, follow these steps:

1. Click the **App** menu and select **Show App Directory in Explorer**:

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/18582108.png" >}}

2. Open the **widgets** folder in your app directory and put your Mendix package file there.

3. Open the **App** menu and select **Synchronize App Directory** to synchronize the changes in the app directory:

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/18582106.png" >}}

    {{% alert color="info" %}}You can also press **F4** to synchronize your app directory.
    {{% /alert %}}

4. Add your newly imported widget from the **Toolbox** or the **Add Widget** context menu.

### 2.5 Importing Content from the Marketplace

To learn more about importing content from the Marketplace, see [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/).

## 3 Exporting Objects

### 3.1 Exporting Complete App Packages

To export an app, follow these steps:

1. Click the **File** menu in  and select **Export App Package**.

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/file-export-package.png" >}}

2. The **Export App Package** dialog box will appear, which enables you to set the export location and select data to export (if required):

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/18582090.png" >}}

    The **Existing snapshot** option will only be available when a data snapshot was created earlier using the **Add snapshot of data** menu option from the **Team** menu. It is also possible to include a new snapshot based on the current state of the local database. This option is only available after the app has been started at least once.

3. Click **Export** to create the package.

### 3.2 Exporting Modules

To export a module, follow these steps:

1. Right-click a module in the **App Explorer**, and select **Export module package**.

    If your module refers to other modules in the app (that is, it is not self-contained), you will see a pop-up window warning you of this.

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/18582094.png" >}}

    Select **Find usages of other user modules** to view the references, or click **Continue exporting** and you will see the **Select Dependencies** dialog box:

    {{< figure src="/attachments/howto/integration/importing-and-exporting-objects/18582093.png" >}}

    Here you can select files you would like to include in your package. This list includes any files in the **userlib** or **resources** folders in your app directory. If you don't want to include these files, you can uncheck the boxes.

    {{% alert color="info" %}}To uncheck all the files quickly, press **<kbd>Ctrl</kbd>+<kbd>A</kbd>** to select all of the items then press the <kbd>spacebar</kbd> to uncheck all the objects.
{{% /alert %}}

### 3.3 Exporting Widgets

Widgets are automatically available in the **widgets** folder in your app directory as *.mpk* files.

### 3.4 Exporting Module Documents

Mendix module documents can be exported as a Mendix package (*.mpk*) file.

1. Right-click the document you want to export and select **Export document to file...**.

    The **Export Page to File** dialog box opens.

2. Enter the **Name** for your package and click **Save**.

## 4 Read More

* [Consume a Complex Web Service](/howto/integration/consume-a-complex-web-service/)
* [Consume a Simple Web Service](/howto/integration/consume-a-simple-web-service/)
* [Export XML Documents](/howto/integration/export-xml-documents/)
* [Import Excel Documents](/howto/integration/importing-excel-documents/)
* [Expose a Web Service](/howto/integration/expose-a-web-service/)
* [Configure Selenium Support](/howto/integration/selenium-support/)
* [Import XML Documents](/howto/integration/importing-xml-documents/)
* [Consume a REST Service](/howto/integration/consume-a-rest-service/)
* [Expose Data to BI Tools Using OData](/howto/integration/exposing-data-to-bi-tools-using-odata/)
* [Modules](/refguide/modules/)
* [App](/refguide/project/)
