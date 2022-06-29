---
title: "Find, Find Advanced, and Find Usages"
url: /refguide8/find-and-find-advanced/
description: "Describes Find, Find Advanced, and Find Usages in Mendix Studio Pro."
weight: 10
tags: ["studio pro", "find advanced", "find usages", "find", "edit menu"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/find-and-find-advanced.pdf).
{{% /alert %}}

## 1 Introduction

You can search for changes or usages of different elements, documents, Xpaths, changes to various elements, in your app.  You do it via **Find**, **Find Advanced**, and **Find Usages** options under the **Edit** menu. 

{{< figure src="/attachments/refguide8/modeling/menus/edit-menu/find-and-find-advanced/find-options.jpg" alt="Find Options" >}}

## 2 Find Option

You can find various elements in your app via the **Find** option. For example, you would like to find elements in the domain model, page editor, and microflow editor where the word "Employee" is used: pages, entities, associations, expressions with it, etc. Do the following:

1. Click **Edit** > **Find** in the top-bar or press <kbd>Ctrl</kbd>+<kbd>F</kbd>.

2. In the **Find** dialog box, leave **Match case** and **Match the whole word** unselected. This way you will search for all instances of the word "Employee" including such instances as "employee", Employees", or "Department_Employee":

3. In the **Look in** section unselect items in your project where you do not want to search in:  

   {{< figure src="/attachments/refguide8/modeling/menus/edit-menu/find-and-find-advanced/look-in.jpg" alt="Look in Section" >}}

You can see search results in the **Find Results** pane:

{{< figure src="/attachments/refguide8/modeling/menus/edit-menu/find-and-find-advanced/search-results.jpg" alt="Search Results" >}}

## 3 Find Advanced Option

With the **Find Advanced** option you can set advanced criteria and find specific elements in your project, such as all [object activities](#find-object-activities), or [unused elements](#find-unused-elements). 

### 3.1 Finding Object Activities {#find-object-activities}

You can search for microflows that have object activities in them. Do the following:

1.  Click **Edit** > **Find** **Advanced** in the top-bar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>.
    The **Find Advanced** dialog box will open:
    {{< figure src="/attachments/refguide8/modeling/menus/edit-menu/find-and-find-advanced/find-advanced-dialog-box.png" >}}
3.  In the **Search for** option, select **Microflow actions**:
    {{< figure src="/attachments/refguide8/modeling/menus/edit-menu/find-and-find-advanced/search-for-microflow-actions.png" >}}
3.  Select the entity for which you want to search for object activities, and click **Find**.

You can see search results in the **Find Results** pane.

### 3.2 Finding Unused Elements {#find-unused-elements}

While you develop your app, it might occur that specific functionality (for example, pages or microflows) is not applicable anymore in the final version of your application. To keep your app clear and easy to maintain, it is advised to clean any unused items up. 

To find the unused items, do the following:

1. In the top-bar of Studio Pro, click **Edit** > **Find Advanced** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>.

2. In the **Find Advanced** dialog box, select **Unused items** in the **Search for** option:

   {{< figure src="/attachments/refguide8/modeling/menus/edit-menu/find-and-find-advanced/search-for-unused-items.png" >}}

3. Click **Find**. 

The results will show up in the **Find Results** pane. To filter the results click the **Show all** button in the upper-right corner of the pane. 

Note that deleting any unused items might result in more unused items. For example, if you delete an unused page, a microflow which is only used on that page will become an unused item itself. If you are cleaning up your app regularly refresh the unused items list.

{{% alert color="info" %}}

Modules downloaded from the Marketplace might contain a lot of unused items. If you remove those items and the module is updated later, those items will be back in your model, so it is advised that you do not remove any unused items from a Marketplace module.

{{% /alert %}}

{{% alert color="info" %}}

Any objects which are excluded from the project will not show up in the unused items list.

{{% /alert %}}

### 3.3 Marking Unused Objects as Used 

Some pages and microflows are only used from Java code and will be listed as an unused item because Studio Pro cannot look into Java source code. To prevent anyone from removing these objects you can mark the page or microflow as used. Do the following:

1. Open the page or microflow which needs to be marked as used.

2. Navigate to properties and change the **Mark as used** property from **No** to **Yes**.

   {{< figure src="/attachments/refguide8/modeling/menus/edit-menu/find-and-find-advanced/mark-as-used-property.png" >}}

## 4 Find Usages Option {#find-usages}

The **Find Usages** option allows you to find where a certain element is used, for example, to find all buttons that open a certain page.

{{% alert color="info" %}}
This option only finds places where the selected entity/attribute is selected itself. This means that it will not find instances where the entity/attribute is derived implicitly (for example, by following an association).
{{% /alert %}}

To find where a certain element is used, do the following:

1. Open the document which contains the element. For example, open the domain model. 
2. Select an element (for example, an entity) and click **Edit** > **Find usages** in the top-bar or right-click an element and select **Find usages**:
   {{< figure src="/attachments/refguide8/modeling/menus/edit-menu/find-and-find-advanced/find-usages.png" alt="Find Usages" >}}

Studio Pro shows all usages of this entity in the **Find Results** pane. 
{{< figure src="/attachments/refguide8/modeling/menus/edit-menu/find-and-find-advanced/found-usages.png" alt="Find Results Pane" >}}

Double-click an item in the **Find Results** pane to open the corresponding document. 

Click **Lock results** in the **Find Results** pane. Now if you click **Find Usages**, the results will be shown in a second **Find Results** pane. This allows you to  keep several search results.

## 5 Read More

* [Go to Option](/refguide8/go-to-option/)
