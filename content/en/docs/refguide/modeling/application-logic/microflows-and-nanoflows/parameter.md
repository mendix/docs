---
title: "Parameter"
url: /refguide/parameter/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Parameters are the means by which you pass data to your logic. When a microflow is triggered, the parameters are filled with the current values.

If you want to use an object of the **Customer** entity in a microflow, use the parameter. In the image below, the object name is **EnclosingCustomer** and is shown in black. The data type is object. Therefore, the entity name is shown underneath the object name in color blue.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/parameter/parameter.png" class="no-border" >}}

## Common Section

The **Documentation** property can be used to store developer documentation. This can be used to explain to other developers about the parameter. End-users will never see this documentation.

## Output Section

### Data Type

The data type of a parameter defines the type of the value that it expects. See [Data Types](/refguide/data-types/) for the possible data types.

Default: *Object*

### Name

**Name** refers to the name of the parameter.

## Setting an Input Parameter as the Return Value

To set a parameter as the [return value](/refguide/end-event/#return-value) of your microflow, right-click the parameter and select **Set $Parameter as return value** via the context menu:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/parameter/set-parameter-as-return-value.png" width="300px" class="no-border" >}}

## Passing Arguments from a Page

When calling a microflow or nanoflow as a source or action from a page, you can pass arguments in two primary ways, depending on the data type of the argument.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/parameter/parameter-grid.png" width="500px" >}}

### Variable Arguments (Objects/Object Lists)

Variable arguments are used to pass objects or lists of objects from the page to the microflow or nanoflow.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/parameter/parameter-variable.png" width="500px" >}}

### Expression-Based Arguments (All Data Types)

Primitive values, such as strings, booleans, and enumerations, can be passed as expressions. This method allows users to use functions and follow associations within the expression to set the argument values. Using expressions for arguments provides flexibility in setting values and improves the functionality of microflows and nanoflows.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/parameter/parameter-expression.png" width="500px" >}}
