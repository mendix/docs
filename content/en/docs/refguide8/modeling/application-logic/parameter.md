---
title: "Parameter"
url: /refguide8/parameter/
weight: 70
tags: ["studio pro", "parameter", "microflow"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/parameter.pdf).
{{% /alert %}}

## 1 Introduction

A parameter is a special kind of variable that is used an input for the microflow. When a microflow is triggered, the parameters are filled with the current values.

If you want to use an object of the *Customer* entity in a microflow, use the parameter. In the picture below, the object name is *EnclosingCustomer* and is shown in black. The data type is object, therefore the entity name is shown underneath the object name in blue.

{{< figure src="/attachments/refguide8/modeling/application-logic/parameter/parameter.png" >}}

## 2 Output Properties

### 2.1 Name

**Name** refers to the value of the parameter.

### 2.2 Data Type

The data type of a parameter defines the type of the value that it expects. See [Data Types](/refguide8/data-types/) for the possible data types.

Default: *Object*
