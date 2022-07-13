---
title: "Actions"
url: /refguide7/actions/
---

{{% alert color="info" %}}
App services have been deprecated in version 7.23.4 and are marked for removal. Use a [published web service](/refguide7/published-web-services/) or a [published REST service](/refguide7/published-rest-services/) instead.
{{% /alert %}}

Provides the actual microflow actions of the app service. Note that once an app service version is set to Consumable, its parameters and return type are no longer editable as they are part of the app service contract.

In the General tab, you can set the microflow that corresponds to the action. When the microflow is set, the Parameters tab will be filled automatically.

An action page has the following tabs:

## General

{{< figure src="/attachments/refguide7/desktop-modeler/integration/published-app-services/actions/16843926.png" >}}

### Name

This is the name of the action the consumer will see in their toolbox.

### Icon

This is the icon that belongs to the action. An icon can be selected from any images document in the project. A new icon can be added to an images document if it is not available yet.

### Microflow

Defines which microflow will be executed when this action is called.

### Description

Describes the action. The consumer will see this description their overview.

## Parameters

### {{< figure src="/attachments/refguide7/desktop-modeler/integration/published-app-services/actions/16843923.png" >}}

### Microflow parameter

Defines the name of the parameter in the microflow

### Type

Defines the type of the parameter.

### Can be empty

Defines whether a value is can be empty as an input parameter.

### Action parameter

Defines the name of the parameter in the app service action call. This is initially copied from the microflow parameter name but can be modified. There are three reserved parameter names that are not allowed to be used: **username**, **password** and **appservicelocation** (case insensitive).

### Exposed attributes and associations

{{< figure src="/attachments/refguide7/desktop-modeler/integration/published-app-services/actions/16843922.png" >}}

A button is available for complex types (for example, an entity from your domain model), to define whether to include or exclude the attribute in an entity, as well as to define whether an attribute can be empty as input.

## Return Type

Defines what kind of object will be returned by the action. This can be a simple type (like an integer or string), or a complex type (as in, an entity from your entity model)

### Can be empty

Defines whether the return value can be **empty**.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/integration/published-app-services/actions/16843921.png" >}}

The Return Type tab of an app service action. An **empty** ReturnObject is disallowed here.

{{% /alert %}}
