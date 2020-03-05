---
title: "Building Block"
parent: "page-resources"
menu_order: 40
tags: ["studio pro", "building block", "page resource"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Building blocks are components that can be re-used to streamline the page creation process. By pre-configuring and styling building blocks, users can easily click together interfaces without having to worry about the details of styling guidelines or user experience. 

Building blocks are stored in the project's [UI resources package](ui-resources-package). This keeps them in sync with the project theme, and provides a handy place to consolidate all design-related data. 

To create a building block, simply right-click a widget anywhere in your project in Studio Pro and select **Create building block**. The widget along with its contents will be added as a new building block. The building block will now automatically appear in the **Building blocks** tab of the **Toolbox**. 

As the purpose of building blocks is to facilitate design rather than functionality, building blocks should be devoid of references to other documents. This is to prevent users from facing confusing errors when using building blocks in their pages. It also mitigates the chance of errors when importing building blocks from a different project. 

## 2 Common Properties

{{% snippet file="refguide/common-section-link.md" %}}

## 3 Designer Properties

{{% snippet file="refguide/designer-properties.md" %}}

## 4 General Properties

### 4.1 Display Name

The display name determines the name of the building block that will appear in the toolbox. 

### 4.2 Image

The image selected will appear in the **Building Blocks** tab of Studio's **Toolbox**. Selecting a representative image will allow users to easily distinguish between building blocks. If left blank, Studio will display a generic default image. Any image selected will be scaled down to 200x200 pixels.

### 4.3 Documentation URL

The documentation URL can be used to link to a documentation page for the building block. These links will appear in the **Building Blocks** tab of Studio's **Toolbox**.
