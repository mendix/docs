---
title: "Operations"
url: /refguide/operations/
---

## Introduction

This document provides the methods of which the web service is composed.

Looking at an operation in more detail, you can see that a microflow can be selected. When you select a microflow, the other fields will automatically fill. These can be changed as needed.

An operation has the properties described below.

## General

{{< figure src="/attachments/refguide/modeling/integration/published-web-services/operations/16843884.png" class="no-border" >}}

### Name

This is what the operation is called in the WSDL.

### Microflow

Defines which microflow will be executed when this web service is called.

### Documentation

Describes the operation and is included in the WSDL.

## Parameters

{{< figure src="/attachments/refguide/modeling/integration/published-web-services/operations/16843879.png" class="no-border" >}}

### Microflow Parameter

Defines the name of the parameter in the microflow.

### Type

Defines which type the parameter is (for example, a List of Vehicles entity).

### Optional

Defines if this parameter is optional in the web service call.

### Nillable

Defines if this parameter can have a nil value in the web service call.

### Operation Parameter

Defines the name of the parameter in the web service call. This is initially copied from the microflow parameter name, but it can be modified.

### Operation Object Name

This is available when the parameter is a list, and can be used to name the object in the list.

{{% alert color="info" %}}
The `CountCarsAndHp` operation takes a non-optional list of vehicles as a parameter, which is called *VehicleList* and consists of objects called *Vehicle*. This information is based on the microflow and entity model, but can be modified.
{{% /alert %}}

{{< figure src="/attachments/refguide/modeling/integration/published-web-services/operations/918221.png" class="no-border" >}}

The microflow attached to the `CountCarsAndHp` operation. It takes a list of objects of the entity Vehicle as input and returns an object that holds the number of cars and the total amount of horsepower of those cars.

### Exposed Attributes and Associations

If you click **Select** in the **Parameter** tab, you can select individual members of the entity that is being passed as a parameter. The toolbar buttons are available to help you quickly perform operations that would otherwise be difficult.

| Collapse all | Collapses the entire tree, so that only the root node remains visible. |
| --- | --- |
| Check all | Checks the box next to every expanded node and visible leaf node. Collapsed nodes and their children are not affected. |
| Uncheck all | Unchecks the box next to every expanded node and visible leaf node. Collapsed nodes and their children are not affected. |
| All optional | Checks the Optional box on every expanded node and visible leaf node. |
| All non-optional | Unchecks the Optional box on every expanded node and visible leaf node. |
| All nillable | Checks the Nillable box on every expanded node and visible leaf node. |
| All non-nillable | Unchecks the Nillable box on every expanded node and visible leaf node. |

{{< figure src="/attachments/refguide/modeling/integration/published-web-services/operations/16843878.png" class="no-border" >}}

Here you can select which members of the entity can be passed and/or are optional or nillable, as well as set their names. Note that checking **Optional** or **Nillable** on the root element has no effect; set these values in the operation editor.

{{% alert color="info" %}}
The order of XML elements in the WSDL does not, by definition, reflect the order of attributes in entities in the domain model. The order of members in the dialog is the same as the order of elements in the WSDL (and can be different from the order of attributes in entities). This gives a better overview of the WSDL contract that is exposed from Mendix. The structure you see in the members dialog reflects the structure in the WSDL.

New attributes from entities will appear as new elements below members that are already in the WSDL. This will prevent breaking the WSDL contract; if you insert new XML elements inside a XML Sequence container, existing web service consumers that strictly validate against the WSDL can break.
{{% /alert %}}

{{% alert color="info" %}}
If you expose the Password (hashed string) attribute of a `System.User` entity (or a specialization thereof), a warning appears that there is a risk that someone does a brute-force attack to obtain the original plain-text password. The risk is considerably less when you use a strong hashing algorithm (preferably 'BCrypt'). The hashing algorithm can be set in the app settings.
{{% /alert %}}

## Return Type

This section pertains to the return type of the microflow and how it is transformed back to XML.

### Type

Defines what kind of object will be returned by the microflow. If the returned type is a complex type (as in, something from your entity model) you can use the **Members** button to select which members will be returned in the same way as parameters.

### Name

The name of the return type. This determines the output element name in the XML that results from a web service call.

### Optional

This determines if the element in the XML can be left out if the return value is empty.

### Nillable

This determines if the element in the XML is sent as nil if the return value is empty.

Optional and Nillable cannot both be checked.

{{< figure src="/attachments/refguide/modeling/integration/published-web-services/operations/16843880.png" class="no-border" >}}

Here, you can see an optional Order entity set as the return type of the operation ReturnsOrder.
