---
title: "Access Rule Editor (Beta)"
linktitle: "Access Rule Editor (Beta)"
url: /refguide/access-rule-editor-beta/
weight: 5
description: "Describes the functionalities of the beta version of the redesigned access rule editor."
tags: ["beta", "domain model", "entity", "access rule", "xpath constraint", "module role", "studio pro"]
---

## 1 Introduction

{{% alert color="info" %}}
The beta versions of the access rule editor is available to try out in Studio Pro 10.6.0. For more information on beta features, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}



## 2 Access rule normalisation

The new access rule editor works with normalised access rules. A normalised access rule is an access rule that has exactly one module role attached to it. This change is made because the new editor works with a table where the members of the entity make us the rows and module roles (optionaly with XPaths) the columns. 

Access rules are automaticly normalised when first using the new editor for an entity. Alternatively, all access rules in a project can be normalized at once by going to *App* *Tools* > *Normalize access rules*;

## 3 XPath and the columns in the editor

Each module role from the module of the entity will have a default column for its access rigths without a XPath. Next to this default column a module role can have more columns if XPath's have been added. 

A XPath contraint can be be added to a module role by clicking on the XPath field of its default column. This will open the XPath editor dialog. After a XPath contraint has been entered a new column is added. This new column will be created with the same access rights of the default column Alternatively, you can use the 'Add XPath' option in the context menu to add a new column based of any column [Read more](#add-xpath).

The non-default columns with a XPath contraint can be deleted via the context menu. The default column can not be deleted, but its content can be cleared in the same way. [Read more](#delete-clear)

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/example-columns.png" alt="Example of the columns for an entity" width="550px" >}}

## 3 Editing Create rigths

Toggle the setting shown below *on* or *off* to enable or disable Create rigths. Note that XPath contrains are not applied to create operations, meaning that if you enable create access for one column of a module role, any user with this module role can create objects of this entity.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/create.png" alt="This image indicates the position of the Create icons" width="550px" >}}

## 4 Editing Delete rigths

Toggle the setting shown below *on* or *off* to enable or disable Delete rigths. In contrast to Create access, XPath contrains are applied to delete operations.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/delete.png" alt="This image indicates the position of the Delete icons" width="550px" >}}

## 5 Editing Read rigths

Toggle the setting shown below *on* or *off* to enable or disable Read rigths for the attribute or assosiation of that row. When disabling Read access, Write access is automatically disabled as well.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/read.png" alt="This image indicates the position of the Read icons" width="550px" >}}

Next to this you can click the 'read' icon in the footer to enable or disable Read access for all attributes and associations in this column.

## 6 Editing Write rigths

Toggle the setting as shown below on or off to enable or disable Write rigths for the attribute or assosiation of that row. When enabling Write access, Read access is automatically enabled as well.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/write.png" alt="This image indicates the position of the Write icons" width="550px" >}}

Next to this you can click the 'write' icon in the footer to enable or disable Write access for all attributes and associations in this column.

## 7 Context menu

The context menu of a column can be openen by clicking on the three dots icon that is shown when hovering over a module role name in the header. Within the context menu you will find options to easily reuse, add or remove access rules.

{{< figure src="/attachments/refguide/modeling/domain-model/entities/access-rules/context-menu.png" alt="Example of the context meny" width="550px" >}}

### 7.1 Copy to

This option allows you to select another column and to copy the Create, Delete, Read and Write access of this column to that column.

### 5.2 Copy from

This option allows you select another column and to copy the Create, Delete, Read and Write access of that column to this column.

### 5.3 Add XPath

This option allows you enter an XPath and create a new column with the same Create, Delete, Read and Write access of this column, but with the new XPath you just entered.

### 5.4 Delete/Clear

For columns with an XPath contraint this option allows you to remove this column from the table. For the default columns this option allows you to reset all the access rigths to their default values.
