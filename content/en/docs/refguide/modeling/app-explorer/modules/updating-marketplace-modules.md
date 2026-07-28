---
title: "Updating Marketplace Modules"
url: /refguide/updating-marketplace-modules/
weight: 40
description: "How to update Marketplace modules in Studio Pro while retaining your customizations using three-way merge."
---

## Introduction

{{% alert color="info" %}}
This feature requires Studio Pro 11.12 or above.
{{% /alert %}}

Previously, when you wanted to update a Marketplace module to a newer version, you had to fully replace it, losing any customizations such as modified microflows or added functionality.

Studio Pro 11.12 changes this by enabling module updates that retain your customizations. When you update a module, Studio Pro performs a three-way merge that combines your customizations with the publisher's updates. You can keep your changes and benefit from bug fixes and new features in the updated module.

## How Module Updates Work

### Three-Way Merge Process

To retain your customizations when updating a module, Studio Pro performs a three-way merge using three versions:

1. Original version – The version of the Marketplace module that you originally imported.
2. Current version – The version currently in your app, which may include your modifications.
3. Target version – The new version of the Marketplace module that you want to upgrade to.

You must manually provide both the original and target versions. If document mapping succeeds, the merge begins. If mapping fails, you cannot upgrade while keeping your customizations and must fully replace the module instead.

During the merge, conflicts may occur if you and the publisher both modified the same element (for example, the same microflow). For information on resolving conflicts, see [Combining Changes and Resolving Conflicts](/refguide/resolving-conflicts/).

### Document Mapping

To merge your customizations with the updated module, Studio Pro matches documents between the old and new versions. The method depends on whether the module has package IDs:

* Modules with package IDs – Studio Pro uses embedded GUID mapping to match documents by GUID. This is more reliable because documents can be matched even if they have been renamed.

{{% alert color="info" %}}
Studio Pro 11.12 introduced package IDs and document GUID mappings to make updates more reliable.
{{% /alert %}}

For more information on package IDs and how they are assigned, see [Module Settings](/refguide/module-settings/#package).

## Read More

* [Modules](/refguide/modules/)
* [Module Settings](/refguide/module-settings/)
* [Consuming Add-on Modules and Solutions](/refguide/consume-add-on-modules-and-solutions/)
* [Combining Changes and Resolving Conflicts](/refguide/resolving-conflicts/)
