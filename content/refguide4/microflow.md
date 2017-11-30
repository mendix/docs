---
title: "Microflow"
parent: "microflows"
---
{{% alert type="warning" %}}

This document describes the properties of a microflow. If you want to see what microflows are for and what kind of elements they contain, you can check the [Microflows](microflows) overview documentation.

{{% /alert %}}

## Common Properties

### Name

The internal name of the microflow.

### Folder

The folder in which the microflow is located in the project.

## Concurrent Execution Properties

### Disallow

With this property you can specify whether it is allowed for the microflow to be executed more than once concurrently. This applies to all users at the same time.

| Option | Description |
| --- | --- |
| False | It is possible to execute the microflow more than once concurrently. |
| True | It is not possible to execute the microflow more than once concurrently; the user receives a message or another microflow is executed instead. |

Disallowing concurrent execution of a microflow is useful if a microflow would interfere with another running instance. For example, if it accesses a global resource.

### Error message

Error message defines the message the user gets when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed.

### Error Microflow

Error microflow defines which microflow is executed when concurrent execution is not allowed and the user tries to start the microflow while it is already being executed. When set, there will be no further message shown to the user.

## Output Properties

### Return type

The return type defines what information the microflow returns. The caller of the microflow will get a result of this type.

{{% alert type="info" %}}

A microflow could return whether or not the committing of an object should continue. In this case, a boolean would be the return type of the microflow.

{{% /alert %}}

## Security Properties

### Allowed roles

Allowed roles defines to which [module role](module-role) the user must have to be able to execute the microflow.

{{% alert type="warning" %}}

Note that these roles are only checked when the microflow is executed from the client. A microflow is always allowed to call another microflow and these roles are not checked then.

{{% /alert %}}

See also [Module Security](module-security).

### Apply entity access

This property indicates whether entity access based on the current user is applied when performing operations on objects. Applying entity access limits the objects that are retrieved by the [retrieve action](retrieve) to only those that the current user is allowed to see. Similarly, to reading and writing attributes and associations the entity access of the current user is applied. If entity access is not applied on the other hand, all operations are allowed and all objects are retrieved.

{{% alert type="warning" %}}

Microflows that apply entity access have a yellow background; microflows that do not have a white background.

{{% /alert %}}

| Option | Description |
| --- | --- |
| True | Entity access is applied to retrieving and manipulating objects. The rights of current user are taken into account. |
| False | Entity access is not applied. |

{{% alert type="success" %}}

By default entity access is not applied. Set 'apply entity access' to true if you want to perform some actions that respect the rights of the current user.

{{% /alert %}}

_Default value_: False
