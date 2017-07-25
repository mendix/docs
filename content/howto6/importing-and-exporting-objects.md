---
title: "Importing and Exporting Objects"
category: "Integration"
tags: []
---
Don't re-invent the wheel. Save time by importing modules others have already created, and exporting new modules for others to use. The App Store provides this functionality on a macro-level, but you can use the modeler's built-in import and export functions to share content between your own apps, import unofficial modules, and share entire projects.

This How-to covers the basics of how to import and export modeler objects: packages, modules, widgets, and module objects. Module objects include pages, microflows, image collections, event, document templates, constants, web services, layouts, menus, and loads more.

## Importing Objects

{{% alert type="warning" %}}

Be careful when importing objects, as you can overwrite your existing work. Pay attention to prompts and warnings along the way!

{{% /alert %}}

### Importing Entire Project Packages

Mendix project packages are stored as Mendix Package (.mpk) files.

1.  Click on the **File** menu in the modeler, and select **Import Project Package...**_![](attachments/18448739/18582103.png)_
2.  Select your Mendix Package file and click **Open**.![](attachments/18448739/18582102.png)

    A dialogue box will appear:
    ![](attachments/18448739/18582101.png)

    Here, you have a few options:

    *   Determine the local folder where you would like to store your project.
    *   Decide whether you want to use Mendix Team Server for this project. Unless you have a good reason _not_ to use Team Server, it is highly recommended that you leave this on.
    *   Decide whether to upload to a new repository (recommended) or to an existing repository.
    *   Finally, give your project a name. By default, it will be named as it was in the Mendix Package file.
3.  Click **OK**, and you project will load in the modeler.

### Importing Module Packages

Mendix module packages are stored as Mendix Package (.mpk) files.

1.  **Right click** on your project in the Project Explorer and select **Import Module Package...**![](attachments/18448739/18582115.png)
2.  Select your Mendix Package file and click **Open.**
     ![](attachments/18448739/18582114.png)

    A dialogue box will open.  

3.  Choose a name for your module and select whether to replace an existing module or create a new one.
    ![](attachments/18448739/18582113.png) ![](attachments/18448739/18582112.png)

    {{% alert type="info" %}}

    If you replace a module with a new version, existing user data will be retained based on the names of entities, attributes, and associations. If you delete a module and then add a newer version of it, all user data will be lost.

    {{% /alert %}}
4.  Click **Import.**
    You may see another dialogue box, informing you of any included module dependencies that will be overwritten in your project.
    ![](attachments/18448739/18582111.png)
5.  Click **OK**. You will see your new or replaced module in the Project Explorer.
    ![](attachments/18448739/18582110.png)
    You will also see your changes in the **Changes** section of the modeler. Here, I've replaced my existing module and as you can see, it was deleted in favor of the newly imported module.
    ![](attachments/18448739/18582109.png)

### Importing Module Objects

Mendix module object packages are stored as Mendix Package (.mpk) files. An object package can contain a page, microflow, image collection, event, document template, constant, web service, layout, menu, and more.

1.  **Right click** on a module in the Project Explorer and select **Import document package...**_![](attachments/18448739/18582100.png)
    _An Open File dialogue will appear.
2.  Select your Mendix Package file containing the object you want to import, and click **Open**.
3.  If an object with the same name already exists, you will see a dialogue box:
    ![](attachments/18448739/18582098.png)
    At this point, you can either **Rename** the object or **Cancel.**
4.  Click **Rename,** and enter a new name for the object you are importing:
    ![](attachments/18448739/18582097.png)
5.  Click OK to import the object into your module:
    ![](attachments/18448739/18582096.png)

    {{% alert type="info" %}}

    You may need to update the new object's permissions, depending on where it was originally exported from. For consistency, be sure to check permissions on any objects imported.

    {{% /alert %}}

### Importing Widgets

Mendix module packages are stored as Mendix Package (.mpk) files. However, you need to place the file in your project directory to import it.

1.  Click on the **Project** menu, and select **Show Project Directory in Explorer**:
    _![](attachments/18448739/18582108.png)
    _Your project directory will appear.
2.  Open the widgets folder and paste your **Mendix Package file** here.
    ![](attachments/18448739/18582107.png)
3.  Open the **Project** menu and select **Synchronize Project Directory** to synchronize the changes in the project directory.
    ![](attachments/18448739/18582106.png)

    {{% alert type="info" %}}

    You can also press **F4** to synchronize your project directory.

    {{% /alert %}}
4.  Add your newly imported widget from the **Toolbox** or **Add Widget** context menu:
    ![](attachments/18448739/18582105.png)

### Importing Content from the App Store

To learn more about importing content from the App Store, see [Use App Store Content in the Modeler](/community/app-store/use-app-store-content-in-the-modeler).

## Exporting Objects

### Exporting Entire Project Packages

This part will go through the steps required to export projects.

1.  Click on the **File** menu in the modeler and select **Export Project Package...**
    _![](attachments/18448739/18582091.png)
    _
2.  A dialog will appear that enables you to set the export location and, if required, select data to export.
    ![](attachments/18448739/18582090.png)
    The option 'Existing snapshot' will only be available when a data snapshot was created earlier using the menu option **Add snapshot of data** from the **Team** menu.
    It is also possible to include a new snapshot based on the current state of the local database. This option is only available after the project has been started at least once.
3.  Click **Export** to create the package.

### Exporting Modules

1.  **Right click** on a module in the Project Explorer, and select **Export module package...**
    ![](attachments/18448739/18582095.png)
    If your module refers to other modules in the project (i.e., it is not self-contained), you will receive a dialogue box warning you about this.
2.  **Right click** on your module in the Project Explorer and select **Find usages of other user modules** to view the references.
    ![](attachments/18448739/18582094.png)
3.  Click **Continue exporting** and you will see another dialogue box:
    ![](attachments/18448739/18582093.png)
    Here you can select files you would like to include in your package. This list includes any files in your **userlib** or **resources** folders in your project directory. If you don't want to include these files, you can uncheck the boxes.

    {{% alert type="info" %}}

    To quickly uncheck all files, press _CTRL+a_ to select all of the items, then press the _Spacebar_ key to uncheck all objects.

    {{% /alert %}}

### Exporting Widgets

Widgets are already available in the **widgets** folder in your project directory as .mpk files.

### Exporting Module Objects

Mendix module object packages are stored as Mendix Package (.mpk) files. An object package can contain a page, microflow, image collection, event, document template, constant, web service, layout, menu, and more.

1.  **Right click** on the document you want to export and select **Export document package...**
    ![](attachments/18448739/18582092.png)
    A save dialogue box will open.
2.  Enter a **name** for your package and click **Save**.

## Related content

*   [Consuming a complex web service](consume-a-complex-web-service)
*   [Consuming a simple Web Service](consume-a-simple-web-service)
*   [Exporting XML documents](export-xml-documents)
*   [Importing Excel Documents](importing-excel-documents)
*   [Exposing a web service](expose-a-web-service)
*   [Selenium Support](selenium-support)
*   [Synchronizing user accounts using the LDAP module](synchronizing-user-accounts-using-the-ldap-module)
*   [Importing XML documents](importing-xml-documents)
*   [Consuming a REST Service](consume-a-rest-service)
*   [Exposing data to BI tools using OData](exposing-data-to-bi-tools-using-odata)



*   [Modules](/refguide6/modules)
*   [Project](/refguide6/project)
*   [Common Widgets](/refguide6/common-widgets)
