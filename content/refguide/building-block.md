---
title: "Building block"
parent: "pages"
---

## 1 Introduction

{{% alert type="info" %}}

The option to edit and manage custom building blocks was added in Mendix 7.9.0.

{{% /alert %}}

Building blocks are components that can be re-used to streamline the page creation process. By pre-configuring and styling building blocks, users can easily click together interfaces without having to worry about the details of styling guidelines or user experience. 

Building blocks are stored in the project's [UI Resources package](ui-resources-package). This keeps them in sync with the project theme, and provides a handy place to consolidate all design-related data. 

To create a building block, simply right-click a widget anywhere in your project in the Desktop Modeler and select **Create building block**. The widget along with its contents will be added as a new building block. The building block will now automatically appear in the **Building blocks** tab of the **Toolbox**. 

As the purpose of building blocks is to facilitate design rather than functionality, building blocks should be devoid of references to other documents. This is to prevent users from facing confusing errors when using building blocks in their pages. It also mitigates the chance of errors when importing building blocks from a different project. 

## 2 Common Properties

{{% snippet file="refguide/Document+Name+Property.md" %}}

{{% snippet file="refguide/Documentation+Property.md" %}}

## 3 Designer Properties

{{% snippet file="refguide/Canvas+Width+Property.md" %}}

{{% snippet file="refguide/Canvas+Height+Property.md" %}}

## 4 General Properties

### 4.1 Display Name

The display name determines the name of the building block that will appear in the toolbox. 

### 4.2 Image

The image selected will appear in the **Building Blocks** tab of the Web Modeler's **Toolbox**. Selecting a representative image will allow users to easily distinguish between building blocks. If left blank, the Web Modeler will display an empty white field. Any image selected will be scaled down to 200x200 pixels.