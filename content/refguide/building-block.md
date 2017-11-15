---
title: "Building block"
parent: "pages"
---


Building blocks are components that can be re-used to streamline the page creation process. By pre-configuring and styling building blocks, users can easily click together interfaces without having to worry about the details of styling guidelines or user experience. 

Generally, building blocks are stored in the project's [UI resources package](ui-resources-package). This keeps them in sync with the project theme, as well as providing a handy place to consolidate all design-related data. 

To create a building block, simply right-click a widget anywhere in your project and select 'Create building block'. The widget, as well as its contents, will be added as a new building block. The building block will now automatically appear in the building block toolbox tab. 

As the purpose of building blocks is to facilitate design rather than functionality, building blocks should be devoid of references to other documents. This is to prevent users from facing confusing errors when using building blocks in their pages. It also mitigates the chance of errors when importing building blocks from a different project. 


## Common Properties

{{% snippet file="refguide/Document+Name+Property.md" %}}

{{% snippet file="refguide/Documentation+Property.md" %}}

## Designer Properties

{{% snippet file="refguide/Canvas+Width+Property.md" %}}

{{% snippet file="refguide/Canvas+Height+Property.md" %}}

## General Properties

### Display name

The display name determines by what name the building block will appear in the toolbox. 

### Image

The image selected will appear in the web modeler building block toolbox. Selecting a representative image will allow users to easily distinguish between building blocks. If left blank, the web modeler will display an empty white field. Any image selected will be scaled down to 200x200 pixels. 