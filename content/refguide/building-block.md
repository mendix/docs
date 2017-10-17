---
title: "Building block"
parent: "pages"
---

Building blocks are components that can be re-used to streamline the page creation process. By pre-configuring and styling building blocks, users can easily click together interfaces without having to worry about the minutiae of styling guidelines or user experience. 

To create a building block, simply right-click a widget anywhere in your project and select 'Add as building block'. The widget, as well as its contents, will be added as a new building block. The building block will now automatically appear in the building block toolbox tab. 

As the purpose of building blocks is to facilitate design rather than functionality, building blocks should be devoid of references to other documents. This is to prevent users from facing confusing errors when creating building blocks. It also mitigates the chance of errors when importing building blocks from a different project. 


## Common Properties

### Name

The name of the building block. You can change the name via the project explorer.

{{% snippet file="refguide/Documentation+Property.md" %}}

### Documentation

This field allows you to describe the purpose of the building block. 

## Designer Properties

### Canvas width

The canvas width property defines the width in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 800

### Canvas height

The canvas height property defines the preferred minimum height in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 600

## General Properties

### Display name

The display name determines by what name the building block will appear in the toolbox. 

### Image

The image selected will appear in the web modeler building block toolbox. Selecting a representative image will allow users to easily distinguish between building blocks. If left blank, the web modeler will display an empty white field. 