---
title: "Import and Export Objects"
category: "Integration"
tags: ["mpk", "Mendix project packages", "import", "export", "documents", "project", "module", "widget"]
---

## 1 Introduction

In Mendix, you don't need to reinvent the wheel. You can save time by importing modules others have created and by exporting new modules for others to use. The App Store provides this functionality on a macro level. You can also use the Desktop Modeler's built-in import and export functions to share content between your own apps, import unofficial modules, and share entire projects.

{{% alert type="warning" %}}
Please note throughout this how-to that Mendix packages are stored as Mendix package (*.mpk*) files. These are not compatible with each other; you cannot, for example, import individual *modules* from a *project* package.
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Import and export the following Desktop Modeler objects:
    * projects
    * modules
    * widgets
    * module documents such as pages or microflows

## 2 Importing Objects

{{% alert type="warning" %}}
Be careful when importing objects, as you can overwrite your existing work. Pay attention to prompts and warnings along the way!
{{% /alert %}}

### 2.1 Importing Project Packages

A Mendix package (*.mpk*) file can store a complete Mendix project.

To import a complete Mendix project package, follow these steps:

1. Click the **File** menu in the Desktop Modeler and select **Import Project Package...**:

    ![](attachments/18448739/18582103.png)

2. Select your Mendix project package file and click **Open**. The **Import Project Package** dialog box will appear:

    ![](attachments/18448739/18582101.png)

    You have the following options in this dialog box:

    * Decide whether to store your app in a **New Mendix Team Server** (recommended), an **Existing Mendix Team Server**, or **Locally on disk**
    * Provide an **App name** (by default, it will be named as it was in the Mendix package file)
    * Determine the local folder where you would like to store your project in **Project directory**
   
3.  Click **OK**, and your project will be loaded in the Desktop Modeler.

### 2.2 Importing Module Packages

A Mendix package (*.mpk*) file can store a Mendix project module.

To import module packages, follow these steps:

1. Right-click your project in the **Project Explorer** and select **Import Module Package**.

    ![](attachments/18448739/18582115.png)

2. Select your Mendix module package file and click **Open**. The **Import Module** dialog box will open.

3. In the dialog box, choose a name for your module and select whether to create a new module or replace an existing one:

    ![](attachments/18448739/18582113.png)

    ![](attachments/18448739/18582112.png)

    {{% alert type="info" %}}If you replace the module with a new version, the existing user data will be retained based on the names of entities, attributes, and associations. If you delete a module and then add a newer version of it, all user data will be lost.
    {{% /alert %}}

4. Click **Import**. You may see a **Warning** pop-up window that will inform you of any included module dependencies that will be overwritten in your project.

5. Click **OK**. You will see your new or replaced module in the **Project Explorer**.

    You will also see your changes in the **Changes** section of the Desktop Modeler. In this example, the existing module has been deleted and replaced by the newly imported module:

    ![](attachments/18448739/18582109.png)

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
* Consumed app service
* Consumed web service
* Published REST service
* Published web service
* Published OData service
* Published app service

To import module objects, follow these steps:

1. Right-click a module in the **Project Explorer** and select **Import document from file...**:

    ![](attachments/18448739/18582100.png)

    The **Import Document from File** dialog box will appear.

2.  Select your Mendix package file containing the document you want to import, and click **Open**.

    {{% alert type="info" %}}If a document with the same name already exists, you will see the **Warning** pop-up window. In that case, you can either select **Rename** to rename the object or **Cancel**.
    {{% /alert %}}

3. Click **OK** to import the object into your module:

    {{% alert type="info" %}}You may need to update the new object's permissions, depending on where it was originally exported from. For consistency, be sure to check the permissions on any objects imported.
    {{% /alert %}}

### 2.4 Importing Widgets

A Mendix package (*.mpk*) file can store one or more widgets. You need to place the Mendix package file in your project directory to import it.

To import widgets, follow these steps:

1. Click the **Project** menu and select **Show Project Directory in Explorer**:

    ![](attachments/18448739/18582108.png)

2. Open the **widgets** folder in your project directory and put your Mendix package file there.

3. Open the **Project** menu and select **Synchronize Project Directory** to synchronize the changes in the project directory:

    ![](attachments/18448739/18582106.png)

    {{% alert type="info" %}}You can also press **F4** to synchronize your project directory.
    {{% /alert %}}

4. Add your newly imported widget from the **Toolbox** or the **Add Widget** context menu.

### 2.5 Importing Content from the App Store

To learn more about importing content from the App Store, see [Use App Store Content in the Desktop Modeler](/community/app-store/use-app-store-content-in-the-modeler).

## 3 Exporting Objects

### 3.1 Exporting Complete Project Packages

To export a project, follow these steps:

1. Click the **File** menu in the Desktop Modeler and select **Export Project Package...**

    ![](attachments/18448739/18582091.png)

2. The **Export Project Package** dialog box will appear, which enables you to set the export location and select data to export (if required):

    ![](attachments/18448739/18582090.png)

    The **Existing snapshot** option will only be available when a data snapshot was created earlier using the **Add snapshot of data** menu option from the **Team** menu. It is also possible to include a new snapshot based on the current state of the local database. This option is only available after the project has been started at least once.

3. Click **Export** to create the package.

### 3.2 Exporting Modules

To export a module, follow these steps:

1. Right-click a module in the **Project Explorer**, and select **Export module package...**:

    ![](attachments/18448739/18582095.png)

    If your module refers to other modules in the project (that is, it is not self-contained), you will see a pop-up window warning you of this.

    ![](attachments/18448739/18582094.png)

    Select **Find usages of other user modules** to view the references, or click **Continue exporting** and you will see the **Select Dependencies** dialog box:

    ![](attachments/18448739/18582093.png)

    Here you can select files you would like to include in your package. This list includes any files in the **userlib** or **resources** folders in your project directory. If you don't want to include these files, you can uncheck the boxes.

    {{% alert type="info" %}}To uncheck all the files quickly, press **<kbd>Ctrl</kbd>+<kbd>A</kbd>** to select all of the items then press the <kbd>spacebar</kbd> to uncheck all the objects.
    {{% /alert %}}

### 3.3 Exporting Widgets

Widgets are automatically available in the **widgets** folder in your project directory as *.mpk* files.

### 3.4 Exporting Module Documents

Mendix module documents can be exported as a Mendix package (*.mpk*) file.

1. Right-click the document you want to export and select **Export document to file...**:

    ![](attachments/18448739/18582092.png)

    The **Export Page to File** dialog box will open.
    
2. Enter the **Name** for your package and click **Save**.

## 4 Related Content

* [How to Consume a Complex Web Service](consume-a-complex-web-service)
* [How to Consume a Simple Web Service](consume-a-simple-web-service)
* [How to Export XML Documents](export-xml-documents)
* [How to Import Excel Documents](importing-excel-documents)
* [How to Expose a Web Service](expose-a-web-service)
* [How to Configure Selenium Support](selenium-support)
* [How to Synchronize User Accounts Using the LDAP Module](synchronizing-user-accounts-using-the-ldap-module)
* [How to Import XML Documents](importing-xml-documents)
* [How to Consume a REST Service](consume-a-rest-service)
* [How to Expose Data to BI Tools Using OData](exposing-data-to-bi-tools-using-odata)
* [Modules](/refguide7/modules)
* [Project](/refguide7/project)
* [Common Widgets](/refguide7/common-widgets)
