---
title: "Operations"
parent: "published-web-services"
---


Provides the actual methods of which the webservice is composed.

Looking at an operation in more detail, you can see that a microflow can be selected. When you select a microflow, the other fields will be automatically filled. These can be changed as needed.

An operation has the following properties:

## General

![](attachments/16713701/16843884.png)

### Name

This is what the operation is called in the WSDL.

### Microflow

Defines which microflow will be executed when this webservice is called.

### Documentation

Describes the operation and is included in the WSDL.

## Parameters

![](attachments/16713701/16843879.png)

### Microflow parameter

Defines the name of the parameter in the microflow

### Type

Defines which type the parameter is, for example a List of Vehicle entities.

### Optional

Defines whether this parameter is optional in the webservice call.

### Nillable

Defines whether this parameter can have a nil value in the webservice call.

### Operation parameter

Defines the name of the parameter in the webservice call. This is initially copied from the microflow parameter name but can be modified.

### Operation object name

Is available when the parameter is a list, and can be used to name the object in the list.

{{% alert type="info" %}}

The CountCarsAndHp operation. It takes a non-optional list of Vehicle as a parameter which is called VehicleList and consists of objects called Vehicle. This information is based on the microflow and entity model but can be modified.

{{% /alert %}}{{% alert type="info" %}}

![](attachments/819203/918221.png)

The microflow attached to the CountCarsAndHp operation. It takes a list of objects of the entity Vehicle as input and returns an object that holds the number of cars and the total amount of horsepower of those cars.

{{% /alert %}}

### Exposed attributes and associations

If you click 'Select...' in the parameter tab, you can select individual members of the entity that is being passed as a parameter. The toolbar buttons are available to help you quickly perform operations that would otherwise be laborious.

| Collapse all | Collapses the entire tree, so that only the root node remains visible |
| --- | --- |
| Check all | Checks the box next to every expanded node and visible leaf node. Collapsed nodes and their children are not affected. |
| Uncheck all | Unchecks the box next to every expanded node and visible leaf node. Collapsed nodes and their children are not affected. |
| All optional | Checks the Optional box on every expanded node and visible leaf node. |
| All non-optional | Unchecks the Optional box on every expanded node and visible leaf node. |
| All nillable | Checks the Nillable box on every expanded node and visible leaf node. |
| All non-nillable | Unchecks the Nillable box on every expanded node and visible leaf node. |

{{% alert type="info" %}}

![](attachments/16713701/16843878.png)

Here you can select which members of the entity can be passed and/or are optional or nillable, as well as set their names. Note that checking Optional or Nillable on the root element has no effect; you should set these values in the operation editor.

{{% /alert %}}{{% alert type="info" %}}

The order of XML elements in the WSDL does not by definition reflect the order of attributes in entities in the domain model. The order of members in the dialog is the same as the order of elements in the WSDL (and can be different from the order of attributes in entities). This gives a better overview of the WSDL contract that is exposed from Mendix. The structure you see in the members dialog reflects the structure in the WSDL.

New attributes from entities will appear as new elements _below_ members that are already in the WSDL. This will prevent breaking the WSDL contract, because if you insert new XML elements inside a XML _Sequence_ container, existing web service consumers that strictly validate against the WSDL may break.

{{% /alert %}}{{% alert type="info" %}}

If you expose the Password (hashed string) attribute of a System.User entity (or a specialization thereof), a warning appears that there is a risk that someone does a brute-force attack to obtain the original plain-text password. The risk is considerably less when you use a strong hashing algorithm (preferably 'BCrypt'). The hashing algorithm can be set in the Project settings.

{{% /alert %}}

## Return Type

This section pertains to the return type of the microflow and how it is transformed back to XML.

### Type

Defines what kind of object will be returned by the microflow. If the returned type is a complex type (i.e. something from your entity model) you can use the Members button to select which members will be returned in the same way as parameters.

### Name

The name of the return type. This determines the output element name in the XML that results from a webservice call.

### Optional

This determines if the element in the XML can be left out if the return value is empty.

### Nillable

This determines if the element in the XML is sent as nil if the return value is empty.

Optional and Nillable cannot be checked both.

{{% alert type="info" %}}

![](attachments/16713701/16843880.png)

Here, you can see an optional Order entity set as the return type of the operation ReturnsOrder.

{{% /alert %}}
