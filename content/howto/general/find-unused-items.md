---
title: "Find Unused App Project Items"
category: "General Info"
menu_order: 5
tags: ["unused", "item", "usage"]
---

## 1 Introduction

During the development of your application it might occur that specific functionality, pages, microflows etc. aren't applicable anymore for the final version of your application. In order to keep your model clean, clear and easy to maintain it is advised to cleanup any unused items. This How-To will teach you how you can find unused items and what you have to keep in mind dealing with unused items.

## 2 Finding Unused Items

In this how-to, you will learn how you can find unused items within your model.

1. In the top toolbar of Studio Pro, click **Edit** > **Find** Advanced (or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>.

2. Select **Unused items** as **search for** option

    ![](attachments/find-unused-items/18581609.png)

3. Click o**Find**.

4. The results will show up in the **Find Results** pane.

You can filter the results by clicking on the 'Show all' button on the top-right of the result table. To learn more about filtering the find results, please have a look at the How-To: Filter a result set.

Keep in mind that by deleting any unused items the actual list of unused items might grow. For example, if you delete an unused page any microflow which is only used on that page will become an unused item itself. If you are cleaning up your application regularly refresh the unused items list.

Modules downloaded from the Appstore might contain a lot of unused items. If you remove those items and the module is updated later, those items will be back in your model. It is advised that you don't remove any unused items from an Appstore module.

Any objects which are excluded from the project won't show up in the unused items list.

## 3 Setting Unused Objects to "Used" 

Some pages and microflows are only used from Java code and will be listed as an unused item because Studio Pro can't look into Java source code. To prevent anyone from removing these objects you can mark the page or microflow as "used." In this part of the How-To you will learn how to do so.

1.  Open the page or microflow which needs to be marked as used.
2.  Change the **Mark as used** property from **no** to **yes** in the properties table of Studio Pro.
    ![](attachments/find-unused-items/18581608.png)
3.  **Save** the object.

To mark a page as used, right-click the page and select **Properties**:

![](attachments/find-unused-items/18581607.png)

