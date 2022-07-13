---
title: "Parameter"
url: /refguide7/parameter/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A parameter is data that serves as input for the flow. Parameters are filled at the location from where the flow is triggered.

{{% alert color="info" %}}

When you have an object of the entity 'Customer' that you want to use in a microflow, a parameter is used. The variable name is 'EnclosingCustomer' and is shown in black. The data type is object, therefore the entity name is shown underneath the variable name in blue.

{{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/parameter/917903.png" >}}

{{% /alert %}}

## 2 Output Properties

### 2.1 Variable Name

Variable name defines the name of the variable in which the argument of the parameter is stored.

### 2.2 Data Type

The data type of a flow parameter defines the type of the value that it expects. See [Data Types](/refguide7/data-types/) for the possible data types.

_Default value:_ Object
