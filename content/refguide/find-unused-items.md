---
title: "Find Unused App Project Items"
parent: studio-pro-overview
menu_order: 20
tags: ["unused", "unused items", "find unused item"]
---

## 1 Introduction

While you develop your app, it might occur that specific functionality (for example, pages or microflows) is not applicable anymore in the final version of your application. To keep your app project clear and easy to maintain, it is advised to clean any unused items up. 

## 2 Finding Unused Items

To find the unused items, do the following:

1. In the top toolbar of Studio Pro, click **Edit** > **Find Advanced** (or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>).

2. In the Find Advanced dialog box, select **Unused items** in the **Search for** option:

    ![](attachments/find-unused-items/search-for-unused-items.png)

3. Click **Find**. and 

The results will show up in the **Find Results** pane:

![Find Results](attachments/find-unused-items/find-results-pane.png)

To filter the results clicking the **Show all button** on the top-right corner of the pane. 

Note that deleting any unused items might result in more unused items. For example, if you delete an unused page, a microflow which is only used on that page will become an unused item itself. If you are cleaning up your application regularly refresh the unused items list.

{{% alert type="info" %}}

Modules downloaded from the Appstore might contain a lot of unused items. If you remove those items and the module is updated later, those items will be back in your model, so it is advised that you do not remove any unused items from an Appstore module.'

{{% /alert %}}

{{% alert type="info" %}}

Any objects which are excluded from the project will not show up in the unused items list.

{{% /alert %}}

## 3 Marking Unused Objects as Used 

Some pages and microflows are only used from Java code and will be listed as an unused item because Studio Pro cannot look into Java source code. To prevent anyone from removing these objects you can mark the page or microflow as used. Do the following:

1.  Open the page or microflow which needs to be marked as used.
2.  Navigate to properties and change the **Mark as used** property from **No** to **Yes**.

    ![](attachments/find-unused-items/mark-as-used-property.png)
    

