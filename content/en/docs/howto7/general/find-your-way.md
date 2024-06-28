---
title: "Find Your Way in an App"
url: /howto7/general/find-your-way/
weight: 6
---

## 1 Introduction

This how-to explains how you can find your way in an app in the Desktop Modeler. At many places in the Modeler, you can access a handy menu by clicking the right mouse button. Two options are commonly used to find your way through an app and they are called "Go to" and "Find usages." The "Go to," for example, allows you to navigate to the target of a button or to the source of data grid. The "Find Usages" option, for example, allows you to find all buttons that are opening a certain page.

## 2 "Go To" Options

1. Select **Project** > **Navigation**.
2. Right-click a menu item and select **Go to target**. The Modeler now opens the corresponding target of the menu item, in this case a page.
    {{< figure src="/attachments/howto7/general/find-your-way/18581619.png" class="no-border" >}}
3. Now right-click any of the buttons in the data grid and select **Go to microflow**. The Mendix Modeler opens the corresponding microflow.
    {{< figure src="/attachments/howto7/general/find-your-way/18581618.png" class="no-border" >}}
4. Right click any of the activities in the Microflow and select 'Go to entity'. The Mendix Modeler now opens the corresponding domain model.
    {{< figure src="/attachments/howto7/general/find-your-way/18581617.png" class="no-border" >}}

## 3 Finding Usages

1. In the domain-model, right-click any of the entities and select **Find usages**. The Mendix Modeler shows all the usages of this entity in the 'Find Results' pane.
    {{< figure src="/attachments/howto7/general/find-your-way/18581616.png" class="no-border" >}}
2. Double click any of the items in the **Find Results** pane to open the corresponding document.
    {{< figure src="/attachments/howto7/general/find-your-way/18581615.png" class="no-border" >}}
3. Now click **Lock results** in the **Find Results** pane. From this moment on, if you click 'Find Usages', the results will be shown in a second 'Find Results' pane. This allows you to continue navigating while keeping your initial search results open in the first 'Find Results' pane.
    {{< figure src="/attachments/howto7/general/find-your-way/18581614.png" class="no-border" >}}
