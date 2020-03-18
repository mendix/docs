---
title: "Parameter"
parent: "application-logic"
menu_order: 70
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A parameter is a special kind of variable that is used an input for the microflow. Parameters are filled in the location from where the flow is triggered.

If you want to use an object of the *Customer* entity in a microflow, use the parameter. In the picture below, the object name is *EnclosingCustomer* and is shown in black. The data type is object, therefore the entity name is shown underneath the object name in blue.

![](attachments/819203/917903.png)

## 2 Output Properties

### 2.1 Name

**Name** refers to the value of the parameter.

### 2.2 Data Type

The data type of a parameter defines the type of the value that it expects. See [Data Types](data-types) for the possible data types.

Default: *Object*
