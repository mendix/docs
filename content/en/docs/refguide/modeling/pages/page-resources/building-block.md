---
title: "Building Block"
url: /refguide/building-block/
weight: 5
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Building blocks are components that can be re-used to streamline the page creation process. By pre-configuring and styling building blocks, users can easily click together interfaces without having to worry about the details of styling guidelines or user experience. 

Building blocks are stored in the app's [UI resources package](/refguide/ui-resources-package/). This keeps them in sync with the app theme, and provides a handy place to consolidate all design-related data. 

To create a building block, simply right-click a widget anywhere in your app in Studio Pro and select **Create building block**. The widget along with its contents will be added as a new building block. The building block will now automatically appear in the **Building blocks** tab of the **Toolbox**. 

As the purpose of building blocks is to facilitate design rather than functionality, building blocks should be devoid of references to other documents. This is to prevent users from facing confusing errors when using building blocks in their pages. It also mitigates the chance of errors when importing building blocks from a different app. 

## 2 General Properties

### 2.1 Display Name

The display name determines the name of the building block that will appear in the toolbox. 

### 2.2 Auto-Generate Display Name

This property allows you to switch on and off auto-generating display name.

Default: switched on

### 2.3 Image

The image selected will appear in Studio Pro's **Toolbox** in **Tile View**. Selecting a representative image will allow users to easily distinguish between building blocks. If left blank, Studio Pro will display a generic default image. The image selected must be in the PNG format and will be resized to fit 432x192 pixels (px). 

When resizing, Studio Pro preserves the aspect ratio of your image. For example, an image of 864x192px will be resized to 432x89px (which fits 432x192), and an image of 432x384px will be resized to 216x192px (which fits 432x192px).

### 2.4 Category

The category is used to group building blocks inside the **Toolbox**.

### 2.5 Category Weight

The category weight determines the order of categories inside the **Toolbox** (in ascending order). If building blocks with the same category have different category weights, the lowest is used to determine the position.

### 2.6 Documentation URL

The documentation URL can be used to link to a documentation page for the building block. These links will appear in the **Building Blocks** tab of Studio Pro's **Toolbox**.

## 3 Common Properties

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 4 Designer Properties

{{% snippet file="/static/_includes/refguide/designer-properties.md" %}}
