---
title: "Import and Export Objects"
category: "Integration"
tags: []
---

## 1 Introduction

With Mendix, you don't need to reinvent the wheel. You can save time by importing modules others have created and by exporting new modules for others to use. The App Store provides this functionality on a macro level, and you can use the Modeler's built-in import and export functions to share content between your own apps, import unofficial modules, and share entire projects.

Please note throughout this how-to that Mendix project packages are stored as Mendix package (*.mpk*) files.

**This how-to will teach you how to do the following:**

* Import and export Modeler objects: packages, modules, widgets, and module objects (including pages, microflows, image collections, events, document templates, constants, web services, layouts, and menus)

## 2 Prerequisites

None.

## 3 Importing Objects

{{% alert type="warning" %}}

Be careful when importing objects, as you can overwrite your existing work. Pay attention to prompts and warnings along the way!

{{% /alert %}}

### 3.1 Importing Entire Project Packages

Mendix project packages are stored as Mendix package (*.mpk*) files.

To import entire project packages, follow these steps:

1. Click the **File** menu in the Modeler and select **Import Project Package...**:

    ![](attachments/18448739/18582103.png)

2. Select your Mendix package file and click **Open**:

    ![](attachments/18448739/18582102.png)

    The **Import Project Package** dialog box will appear:

    ![](attachments/18448739/18582101.png)

    You have the following options in this dialog box:

    * Determine the local folder where you would like to store your project in **Project directory**
    * Decide whether you want to use Mendix Team Server for this project (unless you have a good reason *not* to use Team Server, it is highly recommended that you leave **Yes** selected for **Enable Team Server**)
    * Decide whether to upload to a **New repository** (recommended) or to an **Existing repository**
    * Provide a **Project name** (by default, it will be named as it was in the Mendix package file)

3.  Click **OK**, and your project will be loaded in the Modeler.

### 3.2 Importing Module Packages

Mendix module packages are stored as Mendix package (*.mpk*) files.

To import module packages, follow these steps:

1. Right-click your project in the **Project Explorer** and select **Import Module Package...**.

    ![](attachments/18448739/18582115.png)

2. Select your Mendix package file and click **Open**:

    ![](attachments/18448739/18582114.png)

    The **Import Module** dialog box will open.  

3. In the dialog box, choose a name for your module and select whether to replace an existing module or create a new one:

    ![](attachments/18448739/18582113.png)

    ![](attachments/18448739/18582112.png)

    {{% alert type="info" %}}

    If you replace the module with a new version, the existing user data will be retained based on the names of entities, attributes, and associations. If you delete a module and then add a newer version of it, all user data will be lost.

    {{% /alert %}}

4. Click **Import**. You may see another dialog box, which will inform you of any included module dependencies that will be overwritten in your project.

    ![](attachments/18448739/18582111.png)

5. Click **OK**. You will see your new or replaced module in the **Project Explorer**:

    ![](attachments/18448739/18582110.png)

    You will also see your changes in the **Changes** section of the Modeler. In this example, the existing module has been replaced and deleted in favor of the newly imported module:

    ![](attachments/18448739/18582109.png)

### 3.3 Importing Module Objects

Mendix module object packages are stored as Mendix package (*.mpk*) files.

An object package can contain a page, microflow, image collection, event, document template, constant, web service, layout, menu, and more.

To import module objects, follow these steps:

1. Right-click a module in the **Project Explorer** and select **Import document package...**:

    ![](attachments/18448739/18582100.png)

    The **Open File** dialog box will appear.

2. Select your Mendix package file containing the object you want to import, and click **Open**.
3. If an object with the same name already exists, you will see the **Warning** pop-up window:

    ![](attachments/18448739/18582098.png)

    At this point, you can either select **Rename** to rename the object or **Cancel**.

4. Click **Rename**, and enter a new name for the object you are importing:

    ![](attachments/18448739/18582097.png)

5. Click **OK** to import the object into your module:

    ![](attachments/18448739/18582096.png)

    {{% alert type="info" %}}

    You may need to update the new object's permissions, depending on where it was originally exported from. For consistency, be sure to check the permissions on any objects imported.

    {{% /alert %}}

### 3.4 Importing Widgets

Mendix module packages are stored as Mendix package (*.mpk*) files. You need to place the Mendix package file in your project directory to import it.

To import widgets, follow these steps:

1. Click the **Project** menu and select **Show Project Directory in Explorer**:

    ![](attachments/18448739/18582108.png)

    Your project directory will appear.
2. Open the widgets folder and paste your Mendix package file here:

    ![](attachments/18448739/18582107.png)

3. Open the **Project** menu and select **Synchronize Project Directory** to synchronize the changes in the project directory:

    ![](attachments/18448739/18582106.png)

    {{% alert type="info" %}}

    You can also press **F4** to synchronize your project directory.

    {{% /alert %}}
4. Add your newly imported widget from the **Toolbox** or the **Add Widget** context menu:

    ![](attachments/18448739/18582105.png)

### 3.5 Importing Content from the App Store

To learn more about importing content from the App Store, see [Use App Store Content in the Modeler](/community/app-store/use-app-store-content-in-the-modeler).

## 4 Exporting Objects

### 4.1 Exporting Entire Project Packages

To export projects, follow these steps:

1. Click the **File** menu in the Modeler and select **Export Project Package...**

    ![](attachments/18448739/18582091.png)

2. The **Export Project Package** dialog box will appear, which enables you to set the export location and select data to export (if required):

    ![](attachments/18448739/18582090.png)

    The **Existing snapshot** option will only be available when a data snapshot was created earlier using the **Add snapshot of data** menu option from the **Team** menu. It is also possible to include a new snapshot based on the current state of the local database. This option is only available after the project has been started at least once.
3. Click **Export** to create the package.

### 4.2 Exporting Modules

To export modules, follow these steps:

1. Right-click a module in the **Project Explorer**, and select **Export module package...**:

    ![](attachments/18448739/18582095.png)

    If your module refers to other modules in the project (meaning, it is not self-contained), you will see a pop-up window warning you of this.
2. Right-click your module in the **Project Explorer** and select **Find usages of other user modules** to view the references:

    ![](attachments/18448739/18582094.png)

3. Click **Continue exporting** and you will see the **Continue exporting** dialog box:

    ![](attachments/18448739/18582093.png)

    Here you can select files you would like to include in your package. This list includes any files in the **userlib** or **resources** folders in your project directory. If you don't want to include these files, you can uncheck the boxes.

    {{% alert type="info" %}}

    To quickly uncheck all files, press **Ctrl+A** to select all of the items, then press the spacebar to uncheck all the objects.

    {{% /alert %}}

### 4.3 Exporting Widgets

Widgets are already available in the **widgets** folder in your project directory as *.mpk* files.

### 4.4 Exporting Module Objects

Mendix module object packages are stored as Mendix package (*.mpk*) files. An object package can contain a page, microflow, image collection, event, document template, constant, web service, layout, menu, and more.

1. Right-click the document you want to export and select **Export document package...**:

    ![](attachments/18448739/18582092.png)

    The **Save** dialog box will open.
2. Enter the **Name** for your package and click **Save**.

## 5 Related Content

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
