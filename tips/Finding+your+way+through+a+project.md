---
title: "Finding your way through a project"
space: "Tips and Tricks"
category: "Tips and Tricks"
---

This how-to explains how you can find your way through a project in the Mendix Business Modeler. At many places in the Business Modeler you can access a handy menu by clicking the right mouse button. Two options are commonly used to find your way through a project and they are called 'Go-To' and 'Find usages'. The 'Go-To' option for example allows you to navigate to the target of a button or to the source of data grid. The 'Find Usages' option for example allows you to find all buttons that are opening a certain page.

## 1\. 'Go to' options

1.  Open the **Navigation** editor.
    ![](attachments/18448722/19398806.png?effects=border-simple,blur-border)
2.  Right click a menu item and select **Go to target**. The Modeler now opens the corresponding target of the menu item, in this case a page.
    ![](attachments/18448722/18581619.png)
3.  Now right click any of the buttons in the data grid and select 'Go to microflow'. The Business Modeler opens the corresponding microflow.
    ![](attachments/18448722/18581618.png)
4.  Right click any of the activities in the Microflow and select 'Go to entity'. The Business Modeler now opens the corresponding domain model.
    ![](attachments/18448722/18581617.png)

## 2\. Find usages

1.  In the domain model right click any of the entities and select 'Find usages'. The Business Modeler shows all the usages of this entity in the 'Find Results' pane.
    ![](attachments/18448722/18581616.png)
2.  Double click any of the items in the 'Find Results' pane to open the corresponding document.
    ![](attachments/18448722/18581615.png)
3.  Now click 'Lock results' in the 'Find Results' pane. From this moment on, if you click 'Find Usages', the results will be shown in a second 'Find Results' pane. This allows you to continue navigating while keeping your initial search results open in the first 'Find Results' pane.
    ![](attachments/18448722/18581614.png)

## 3\. Related content

*   [Finding Object Activities](/tips/Finding+Object+Activities)
*   [Finding Unused Items](/tips/Finding+Unused+Items)
*   [Finding your way through a project](/tips/Finding+your+way+through+a+project)
*   [Querying over self-references](/tips/Querying+over+self-references)
*   [Showing a Project in the Directory in Explorer](/tips/Showing+a+Project+in+the+Directory+in+Explorer)
*   [Translatable Validation Messages](/tips/Translatable+Validation+Messages)
