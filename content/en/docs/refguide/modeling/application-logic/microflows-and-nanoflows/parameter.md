---
title: "Parameter"
url: /refguide/parameter/
weight: 70
tags: ["studio pro", "parameter", "microflow"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A parameter is a special kind of variable that is used as input for the microflow. When a microflow is triggered, the parameters are filled with the current values.

If you want to use an object of the *Customer* entity in a microflow, use the parameter. In the picture below, the object name is *EnclosingCustomer* and is shown in black. The data type is object, therefore the entity name is shown underneath the object name in blue.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/parameter/parameter.png" >}}

## 2 Output Properties

### 2.1 Name

**Name** refers to the value of the parameter.

### 2.2 Data Type

The data type of a parameter defines the type of the value that it expects. See [Data Types](/refguide/data-types/) for the possible data types.

Default: *Object*
