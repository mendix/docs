---
title: "Project Explorer"
parent: view-menu
menu_order: 40
tags: ["studio pro", "project explorer"]
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/project-explorer.pdf).
{{% /alert %}}

## 1 Introduction

The **Project Explorer** shows the complete structure of your project including all documents inside the modules:

{{% image_container width="250" %}}![](attachments/project-explorer/project-explorer.png)
{{% /image_container %}}

The **Project Explorer** consists of the following:

* **Project** folder – contains settings and documents that apply to your project as a whole (for more information, see [Projects](project))
* **Modules**  – contain settings, a domain model, and *documents* that apply to this module (for more information, see [Modules](modules)) 
  * **Domain model** – a model that describes the information (or *data*) used by your application in an abstract way; one module can have one domain model only 
  * **Document** – an individual file, for example, a [page](pages), [microflow](microflows), or a [scheduled event](scheduled-events). 

## 2 Performing Basic Functions

In the **Project Explorer**, you can do the following:

* **Filter** – enter the name of a module, folder, or document into the **Filter** field to filter documents of the project and highlight entered text within the **Project Explorer**. When filtering by a module or folder name, all content of matching modules and/or folders is displayed. In addition, while focused on the **Filter** field, it is possible to do the following:
  * Navigate the **Project Explorer** using <kbd>↑</kbd> and <kbd>↓</kbd> keys 
  * Expand a folder or open a document by pressing <kbd>Enter</kbd> 
  * Clear the filter query by pressing <kbd>Esc</kbd>
* **Open the document** – double-click the document to open it
* **Select the active document** – click the icon in the upper-right corner of the **Project Explorer** to quickly view the active document in the **Project Explorer** tree. By default the active document is always selected so you can quickly see where the document you are editing is located. You can change this behavior in the **Edit** > **Preferences** dialog box.
* **Expand all documents** – click the plus icon in the upper-left corner of the **Project Explorer** to expand all document and see the whole structure of your project
* **Collapse all documents** – click the minus icon in the upper-left corner of the **Project Explorer** to collapse all documents
* **Expand or collapse an individual folder** – to expand/collapse documents in an individual folder click the plus/minus icon or double-click the folder 
* **Perform actions specific to the selected folder** – right-click the selected folder to see what functions you can perform. The list of functions depends on the folder, for example, when right-clicking the **System** module, you can only find usages of this module, while when right-clicking **MyFirstModule** you can add a page, add a microflow, rename the module, export the module package, copy/paste documents, and much more.

## 3 Read More

* [Projects](project)
* [Modules](modules)
* [Security](security)
