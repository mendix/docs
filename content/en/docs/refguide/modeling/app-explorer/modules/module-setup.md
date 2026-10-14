---
title: "Module Setup"
url: /refguide/module-setup/
weight: 15
description: "Describes the Setup node of a module, which lets module publishers highlight the documents that consumers should use."
---

## Introduction

{{% alert color="info" %}}
The **Setup** node was introduced in Studio Pro 11.16.
{{% /alert %}}

Modules, such as [Marketplace modules](/appstore/modules/), often contain many documents, while consumers of the module only need a few of them to get started, for example, a page to add to the navigation, a microflow to call after startup, or a constant to configure. Previously, publishers indicated these documents by moving them into a folder named **USE_ME** (or a variation of this name), which took the documents out of the place where they logically belong in the module.

The **Setup** node formalizes this convention. Each module in the **App Explorer** has a **Setup** node, located below the module's **Settings** and **Security** items. Publishers can add documents and folders to the **Setup** node to highlight them for consumers. The items in the **Setup** node are shortcuts: the original documents stay where they are in the module's folder structure.

The **Setup** node is available for app modules and Marketplace modules. The **System** module and protected modules, such as consumed [add-on modules](/refguide/consume-add-on-modules-and-solutions/), do not have a **Setup** node.

## Adding Items to Setup {#add}

You can add a document or a folder to the **Setup** node of the module that contains it. Documents and folders from other modules cannot be added.

To add an item, do one of the following:

* Right-click a document or folder and select **Add to Setup**. If the **Setup** node already contains folders, **Add to Setup** opens a submenu where you can choose the location:
    * Select **Setup** to add the item directly to the **Setup** node.
    * Select a folder name to add the item to that folder. If that folder has subfolders, select **Add here** to add the item to the folder itself, or select one of its subfolders.
* Drag a document or folder onto the **Setup** node or onto a folder inside it.

When you add a document, a shortcut to that document is added. The shortcut has the same name and icon as the original document. Each document can be added to the **Setup** node only once. If you add a document that is already in the **Setup** node, its shortcut is moved to the new location.

When you add a folder, a folder with the same name is created in the **Setup** node. It contains shortcuts to all documents in the original folder, and the same is done for its subfolders. If the selected location in the **Setup** node already contains a folder with that name, the contents are merged into the existing folder.

{{% alert color="info" %}}
Adding a folder copies its structure and contents at that moment. Documents that you later add to the original folder are not added to the **Setup** node automatically.
{{% /alert %}}

## Working with Setup Items {#work}

You can perform the following actions in the **Setup** node:

* **Open a document** – double-click a shortcut, or right-click it and select **Open**, to open the original document
* **Add a folder** – right-click the **Setup** node or a folder inside it and select **Add folder…** to structure the items in the **Setup** node
* **Rename a folder** – right-click a folder inside the **Setup** node and select **Rename…** (or press <kbd>F2</kbd>)
* **Rearrange items** – drag shortcuts and folders to a different folder within the **Setup** node

Folders are shown first, followed by shortcuts, and both are sorted alphabetically. Folder names cannot be empty, and two folders at the same location cannot have the same name.

## Removing Items from Setup {#remove}

To remove an item, select it in the **Setup** node, then right-click it and select **Remove from Setup**, or press <kbd>Delete</kbd>. In the confirmation dialog box, click **Remove from Setup**.

Removing an item from the **Setup** node does not delete the original document or folder, with one exception: when you remove a single shortcut, the confirmation dialog box has a check box for also deleting the original document. When you remove a folder, or several items at once, the original documents are never deleted.

## Changes to the Original Documents {#original-changes}

The **Setup** node is kept up to date when you change the original documents:

* When you delete a document or folder that is referenced in the **Setup** node, the corresponding shortcuts are removed from the **Setup** node.
* When you move a document or folder that is referenced in the **Setup** node to another module, Studio Pro asks for confirmation, because the shortcuts are removed from the **Setup** node of the original module. Click **Continue** to move the item and remove the shortcuts, or **Cancel** to keep the item in its current module.

## Read More

* [Modules](/refguide/modules/)
* [Module Settings](/refguide/module-settings/)
* [App Explorer](/refguide/app-explorer/)
