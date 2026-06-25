---
title: "Updating Marketplace Modules"
url: /refguide/updating-marketplace-modules/
weight: 40
description: "Describes how to update Marketplace modules while retaining your customizations using three-way merge."
---

## Introduction

Previously, when you wanted to update a Marketplace module to a newer version, you had to fully replace the module. This meant losing any customizations you had made, such as modified microflows or added functionality. If you had customized a module, you had to choose between keeping your changes or getting the latest updates from the publisher.

Studio Pro 11.12 changes this by enabling module updates that retain your customizations. Now, when you update a module, Studio Pro performs a three-way merge that intelligently combines your customizations with the publisher's updates. This means you can both keep your changes and benefit from bug fixes and new features in the updated module.

{{% alert color="info" %}}
Studio Pro 11.12 introduces improved package management with package IDs and document GUID mappings that make updates more reliable. However, updates with customization retention also work for older modules without package IDs through name-based mapping. For more information on package management, see [Module Settings](/refguide/module-settings/#package).
{{% /alert %}}

## Updating Modules with Three-Way Merge

### Three-Way Merge Process

To retain your customizations when updating a module, Studio Pro performs a three-way merge. This process requires three versions:

1. **Original version** – The version of the Marketplace module that you originally imported
2. **Current version** – The version currently in your app, which may include your modifications
3. **Target version** – The new version of the Marketplace module that you want to upgrade to

You must manually provide both the original and target versions. If the mapping of documents succeeds, the merge begins. If mapping fails, you cannot upgrade while keeping your customizations, and you must fully overwrite the module.

During the merge, conflicts may occur if you and the publisher both modified the same element (for example, the same microflow). For information on resolving conflicts, see [Combining Changes and Resolving Conflicts](/refguide/resolving-conflicts/).

### Document Mapping

To successfully merge your customizations with the updated module, Studio Pro needs to match documents between the old and new versions. The method Studio Pro uses depends on whether the module has package identification:

* **Modules with package IDs** – Studio Pro uses the embedded GUID mapping information to match documents by GUID. This is more reliable because documents can be matched even if they have been renamed.
* **Modules without package IDs** – Studio Pro attempts to map documents by name. This works well as long as document names have not changed between versions.

For more information on package IDs and how they are assigned, see [Module Settings](/refguide/module-settings/#package).

## Read More

* [Modules](/refguide/modules/)
* [Module Settings](/refguide/module-settings/)
* [Consuming Add-on Modules and Solutions](/refguide/consume-add-on-modules-and-solutions/)
* [Combining Changes and Resolving Conflicts](/refguide/resolving-conflicts/)
