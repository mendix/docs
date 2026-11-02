---
title: "Setup"
url: /refguide/setup/
---


## Introduction

The **Setup** node helps consumers of a module quickly identify which documents are intended to be used first. Unlike the earlier convention of placing documents in a separate folder for visibility, the **Setup** node lets you highlight important documents while keeping them in their original location in the module structure.

Adding a document to **Setup** does not move it. The document remains in its original folder and is also shown under **Setup** for easier discovery.

{{< figure src="/attachments/refguide/modeling/app-explorer/modules/setup/setup.png" class="no-border" width="300" >}}

{{% alert color="info" %}}
The **Setup** node is available only for [app modules](/refguide/module-settings/#app-module). It is not available for [add-on](/refguide/module-settings/#add-on-module) or [solution](/refguide/module-settings/#solution-module) modules.
{{% /alert %}}
## Adding Documents to Setup

You can add a document or folder to **Setup** in the following ways:

* Right-click the document or folder and select **Add to Setup**
* Drag a document or folder to the **Setup** node


## Removing Documents from Setup

You can remove a document or folder from **Setup** in the following ways:

* Right-click the item in **Setup** and select **Remove from Setup**
* Select the item in **Setup** and press <kbd>Delete</kbd>

When you remove an item from **Setup**, a confirmation dialog is displayed. In this dialog, you can choose to remove the item from **Setup** only, or also remove the original document.

## Context Menu Behavior

### Right-Click the Setup Node

When you right-click the **Setup** node, the context menu shows the option **Add folder**, which adds a folder to **Setup**. You can then drag documents into this folder.

### Right-Click a Folder in Setup

When you right-click a folder in **Setup**, the context menu shows three options:

{{< figure src="/attachments/refguide/modeling/app-explorer/modules//setup/folder-context-options.png" class="no-border" >}}

* **Add folder** – adds a subfolder to the selected folder
* **Rename** – renames the selected folder
* **Remove from Setup** – shows a warning message and, after confirmation, removes the folder from **Setup**

    {{< figure src="/attachments/refguide/modeling/app-explorer/modules/setup/folder-remove-warning.png" class="no-border" >}}

### Right-Click a Document

When you right-click a document in **Setup**, the context menu shows two options:

{{< figure src="/attachments/refguide/modeling/app-explorer/modules/setup/document-context-options.png" class="no-border" >}}

* **Open** – opens the original document in the module structure
* **Remove from Setup** – shows a warning message and, after confirmation, removes the document or folder from **Setup** with the option to also remove the original document 

    {{< figure src="/attachments/refguide/modeling/app-explorer/modules/setup/document-remove-warning.png" class="no-border" >}}

## Converting Existing Use Me Folders

When the **Setup** feature is introduced in an app, Studio Pro performs a one-time conversion to preserve existing module conventions.

For each module, Studio Pro checks whether there is a first-level folder whose name is a supported variation of **Use Me**. Matching is case-insensitive. The folder name may optionally start with an underscore (`_`), and `Use` and `Me` may be written together or separated by a space, underscore, or hyphen. Examples include **UseMe**, **Use Me**, **Use_Me**, **Use-Me**, **_UseMe**, and **USE_ME**.

All documents in the matching folder are automatically shown under the **Setup** node. If the folder contains subfolders, that structure is also shown under **Setup**.

This conversion does not move the original documents. The original documents remain in their existing folder locations.