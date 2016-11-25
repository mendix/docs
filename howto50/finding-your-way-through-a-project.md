---
title: "Finding your way through a project"
category: "Tips & Tricks"
space: "Mendix 5 How-to's"
---
<table><thead><tr><th class="confluenceTh">Mendix Version</th><th class="confluenceTh">Create Date</th><th colspan="1" class="confluenceTh">Modified Date</th></tr></thead><tbody><tr><td class="confluenceTd">5.6</td><td class="confluenceTd">Aug 08, 2014 13:25</td><td colspan="1" class="confluenceTd">Oct 19, 2015 11:54</td></tr></tbody></table>



This how-to explains how you can find your way through a project in the Mendix Modeler. At many places in the Mendix Modeler you can access a handy menu by clicking the right mouse button. Two options are commonly used to find your way through a project and they are called 'Go-To' and 'Find usages'. The 'Go-To' option for example allows you to navigate to the target of a button or to the source of data grid. The 'Find Usages' option for example allows you to find all buttons that are opening a certain page.

# Table of contents

## 1\. Go-to ...

1.  Open the navigation editor.
    ![](attachments/2949131/3080403.png)
2.  Right click a menu item and select 'Go to target'. The Mendix Modeler now opens the corresponding target of the menu item, in this case a page.
    ![](attachments/2949131/3080404.png)
3.  Now right click any of the buttons in the data grid and select 'Go to microflow'. The Mendix Modeler opens the corresponding microflow.
    ![](attachments/2949131/3080405.png)
4.  Right click any of the activities in the Microflow and select 'Go to entity'. The Mendix Modeler now opens the corresponding domain model.
    ![](attachments/2949131/3080406.png)

## 2\. Find usages

1.  In the domain model right click any of the entities and select 'Find usages'. The Mendix Modeler shows all the usages of this entity in the 'Find Results' pane.
    ![](attachments/2949131/3080407.png)
2.  Double click any of the items in the 'Find Results' pane to open the corresponding document.
    ![](attachments/2949131/3080408.png)
3.  Now click 'Lock results' in the 'Find Results' pane. From this moment on, if you click 'Find Usages', the results will be shown in a second 'Find Results' pane. This allows you to continue navigating while keeping your initial search results open in the first 'Find Results' pane.
    ![](attachments/2949131/3080409.png)

## 3\. Related content

*   [Finding Object Activities](finding-object-activities)
*   [Finding Unused Items](finding-unused-items)
*   [Showing a Project in the Directory in Explorer](showing-a-project-in-the-directory-in-explorer)
*   [Querying over self-references](querying-over-self-references)
