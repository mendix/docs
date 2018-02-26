---
title: "Nanoflow"
category: "Modeler"
---

{{% alert type="warning" %}}

This document describes the properties of a nanoflow. If you want to see what nanoflows are for and what kind of elements they contain, you can check the [nanoflows overview documentation](nanoflows)

{{% /alert %}}

## Common Properties

### Name

The internal name of the nanoflow.

## Output Properties

### Return type

The return type defines what information the nanoflow returns. The caller of the nanoflow will get a result of this type. See [Data Types](data-types) for the possible return types.

{{% alert type="info" %}}

A nanoflow could return whether or not the committing of an object should continue. In this case, a Boolean would be the return type of the nanoflow.

{{% /alert %}}

## Security Properties

### Allowed roles

Allowed roles defines to which [module role](module-role) the user must have to be able to execute the nanoflow.

See also [Module Security](module-security).

## Usage Properties

### Mark as used

You can search for unused items (Ctrl+Shift+F, Search for = Unused items) in the Modeler. nanoflows that are only called from Java code will be listed as unused because the Modeler cannot look inside Java source code.

By setting the propery 'Mark as used' to 'Yes' you specify that the document is used implicitly and the Modeler will no longer list it when searching for unused items.

_Default value:_ No
