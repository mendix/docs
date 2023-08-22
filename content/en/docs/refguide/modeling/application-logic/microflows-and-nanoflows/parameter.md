---
title: "Parameter"
url: /refguide/parameter/
weight: 70
tags: ["studio pro", "parameter", "parameters", "microflow"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A parameter is a special kind of variable that is used as input for the microflow. When a microflow is triggered, the parameters are filled with the current values.

If you want to use an object of the **Customer** entity in a microflow, use the parameter. In the image below, the object name is **EnclosingCustomer** and is shown in black. The data type is object. Therefore, the entity name is shown underneath the object name in color blue.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/parameter/parameter.png" >}}

## 2 Common Section

The **Documentation** property can be used to store developer documentation. This can be used to explain to other developers about the parameter. End-users will never see this documentation.

## 3 Output Section

### 3.1 Data Type

The data type of a parameter defines the type of the value that it expects. See [Data Types](/refguide/data-types/) for the possible data types.

Default: *Object*

### 3.2 Name

**Name** refers to the name of the parameter.

## 4 Setting an Input Parameter as the Return Value

To set a parameter as the [return value](/refguide/end-event/#return-value) of your microflow, right-click the parameter and select **Set $Parameter as return value** via the context menu:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/parameter/set-parameter-as-return-value.png" width="300px" >}}
