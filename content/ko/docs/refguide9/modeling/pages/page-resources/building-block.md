---
title: "Building Block"
url: /refguide9/building-block/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Building blocks are components that can be re-used to streamline the page creation process. By pre-configuring and styling building blocks, users can easily click together interfaces without having to worry about the details of styling guidelines or user experience. 

Building blocks are stored in the app's [UI resources package](/refguide9/ui-resources-package/). This keeps them in sync with the app theme, and provides a handy place to consolidate all design-related data. 

To create a building block, simply right-click a widget anywhere in your app in Studio Pro and select **Create building block**. The widget along with its contents will be added as a new building block. The building block will now automatically appear in the **Building blocks** tab of the **Toolbox**. 

As the purpose of building blocks is to facilitate design rather than functionality, building blocks should be devoid of references to other documents. This is to prevent users from facing confusing errors when using building blocks in their pages. It also mitigates the chance of errors when importing building blocks from a different app. 

## Common Properties

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

## Designer Properties

{{% snippet file="/static/_includes/refguide9/designer-properties.md" %}}

## General Properties

### Display Name

The display name determines the name of the building block that will appear in the toolbox. 

### Image

The image selected will appear in the **Building Blocks** tab of Studio Pro's **Toolbox** in **Tile View**. Selecting a representative image will allow users to easily distinguish between building blocks. If left blank, Studio Pro will display a generic default image. Any image selected will be scaled down to 200x200 pixels.

### Category

The category is used to group building blocks inside the **Toolbox**.

### Category Weight

The category weight determines the order of categories inside the **Toolbox** (in ascending order). If building blocks with the same category have different category weights, the lowest is used to determine the position.

### Documentation URL

The documentation URL can be used to link to a documentation page for the building block. These links will appear in the **Building Blocks** tab of Studio Pro's **Toolbox**.
